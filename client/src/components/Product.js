import { useDispatch } from 'react-redux';
import { getProducts, updateMultipleProductsToDeleteState } from '../actions/products';


const Product = ({ product, passProductIdForComment, markSelected }) => {
    const dispatch = useDispatch();    

    const deleteFunction = async () => {
        //await dispatch(updateProductToDeleteState(product.id));

        let idsObject = {
            ids: [product.id]
        };
        await dispatch(updateMultipleProductsToDeleteState(JSON.stringify(idsObject)));

        dispatch(getProducts());
    };

    const addProductComments = () => {
        passProductIdForComment(product.id);
    };
    

    return (
        <div className="container">
            <div className="row">
                <div className="col border">
                    <input type='checkbox' onChange={() => markSelected(product.id)} />
                </div>
                <div className="col-2 border">
                    <span className="ps-2">{product.name}</span>
                </div>
                <div className="col-4 border">
                    <span className="ps-2">{product.description}</span>
                </div>
                <div className="col text-end border">
                    <span className="pe-2">{product.price}</span>
                </div>
                <div className="col border">
                    <span className="ps-2">{product.status}</span>
                </div>
                <div className="col-2 border">
                    <button type="button" className="my-2 btn btn-danger" onClick={deleteFunction}>Delete</button>
                    <button type="button" className="my-2 btn btn-info float-end" onClick={addProductComments}>Comments</button>
                </div>
            </div>            
        </div>
    );
}

export default Product;