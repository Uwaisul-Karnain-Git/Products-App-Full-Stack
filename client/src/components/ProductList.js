import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import AddProductComments from './AddProductComments';
import { getProducts, updateMultipleProductsToDeleteState } from '../actions/products';

const ProductList = () => {

    const dispatch = useDispatch(); 
    const orgProducts = useSelector(state => state.products);    // 'state.products' comes from 'reducers/index.js' file
    const [products, setProducts] = useState(() => []);
    const [ productIdForComment, setProductIdForComment ] = useState(null);
    const [ productIdsForBulkDelete, setProductIdsForBulkDelete ] = useState([]);

    useEffect(() => {        
        let tempProducts = [];
        for(let prd of orgProducts) {
            let tempProduct = { ...prd, isSelectedForDelete: false };
            tempProducts.push(tempProduct);
        }
        setProducts(tempProducts);
    }, [orgProducts]);

    const passProductIdForComment = productId => {
        setProductIdForComment(productId);
    };

    const clearProductIdForComment = id => {
        setProductIdForComment(id);
    };

    const markSelected = (id) => {
        let selectedProductIds = [];
        const updatedProducts = products.map(prd => {
          if(prd.id === id) {
            prd.isSelectedForDelete = !prd.isSelectedForDelete;
          }

          if(prd.isSelectedForDelete) {
            selectedProductIds.push(prd.id);
          }
          return prd;
        });
  
      setProducts(() => [...updatedProducts]);
      setProductIdsForBulkDelete(() => selectedProductIds);
    };

    const bulkDeleteFunction = async () => {
        let idsObject = {
            ids: productIdsForBulkDelete
        };
        await dispatch(updateMultipleProductsToDeleteState(JSON.stringify(idsObject)));

        dispatch(getProducts());
        productIdsForBulkDelete.length = 0; // To clear the selected products array 
    };

    return (
        // products.length == 0 means 'falsy'
        !products.length ? '' : (
            <div className='mb-5'>

                <h1 className='text-center'>Products List</h1>

                {/* Products Grid */}
                <div className="container">
                    <div className="row">
                        <div className="col bg-secondary text-white border text-center">
                        </div>
                        <div className="col-2 bg-secondary text-white border text-center">
                            <h4>Product Name</h4>
                        </div>
                        <div className="col-4 bg-secondary text-white border text-center">
                            <h4>Product Description</h4>
                        </div>
                        <div className="col bg-secondary text-white border text-center">
                            <h4>Price</h4>
                        </div>
                        <div className="col bg-secondary text-white border text-center">
                            <h4>Status</h4>
                        </div>
                        <div className="col-2 bg-secondary text-white border text-center">
                        </div>
                    </div>
                </div>
                
                {/* Products */}
                {products.map(product => (
                    <div key={product.id}>
                        <Product product={product} passProductIdForComment={passProductIdForComment} markSelected={markSelected} />
                    </div>
                ))}

                {/* Bulk Delete */}
                {productIdsForBulkDelete.length > 1 && (
                    <div className='w-25'>
                        <button type="button" className="ms-5 my-2 btn btn-danger" onClick={bulkDeleteFunction}>Bulk Delete</button>
                    </div>
                )}

                {/* Product Comments */}
                {!productIdForComment ? '' : (
                    <AddProductComments productIdForComment={productIdForComment} clearProductIdForComment={clearProductIdForComment} />
                )}
            </div>
        )
    );
}

export default ProductList;
