import { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import AddProductComments from './AddProductComments';

const ProductList = () => {
    const products = useSelector(state => state.products);    // 'state.products' comes from 'reducers/index.js' file
    const [ productIdForComment, setProductIdForComment ] = useState(null);

    const passProductIdForComment = productId => {
        setProductIdForComment(productId);
    };

    const clearProductIdForComment = id => {
        setProductIdForComment(id);
    };

    return (
        // products.length == 0 means 'falsy'
        !products.length ? '' : (
            <div className='mb-5'>

                <h1 className='text-center'>Products List</h1>

                {/* Products Grid */}
                <div className="container">
                    <div className="row">
                        <div className="col-3 bg-secondary text-white border text-center">
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
                        <Product product={product} passProductIdForComment={passProductIdForComment} />
                    </div>
                ))}

                {/* Product Comments */}
                {!productIdForComment ? '' : (
                    <AddProductComments productIdForComment={productIdForComment} clearProductIdForComment={clearProductIdForComment} />
                )}
            </div>
        )
    );
}

export default ProductList;
