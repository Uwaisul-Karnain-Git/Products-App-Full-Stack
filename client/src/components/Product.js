import { useDispatch } from 'react-redux';
import { getProducts, updatePostToDeleteState } from '../actions/products';


const Product = ({ product, passProductIdForComment }) => {
    const dispatch = useDispatch();    

    const deleteFunction = async () => {
        await dispatch(updatePostToDeleteState(product.id));

        dispatch(getProducts());
    };

    const addProductComments = () => {
        passProductIdForComment(product.id);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-3 border">
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