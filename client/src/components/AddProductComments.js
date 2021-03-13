import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addProductComment } from '../actions/productComments';


const AddProductComments = ({ productIdForComment, clearProductIdForComment }) => {

    const [ productComment, setProductComment ] = useState('');
    const dispatch = useDispatch();

    const handleProductCommentSubmit = async (e) => {
        e.preventDefault();

        let newProductComment = {
            productId: productIdForComment, 
            comment: productComment
        };
        await dispatch(addProductComment(newProductComment));
        
        // Display an alert message
        alert(`Comment - '${productComment}' Added Successfully!`);

        // Clear data
        setProductComment('');
        clearProductIdForComment(null);
    };

    const cancelAddingProductComment = () => {
        clearProductIdForComment(null);
    };

    return (

        <form style={{ width: '28%' }} onSubmit={handleProductCommentSubmit}>
            
            <h5 className='mt-3 ms-5 mb-3'>Add Product Comment</h5>

            <div className='mt-3 mb-2 ms-5 me-3'>
                <label>Product Comment</label>
                <textarea className="mb-3 float-end" name="body" value={productComment} onChange={ e => setProductComment(e.target.value)}></textarea>
            </div> 

            <input className='mt-5 mb-2 ms-5 me-5' type='submit' value='Save' />
            <button className='mb-2 ms-5 me-1' onClick={cancelAddingProductComment}>Clear</button>
        </form>
    );

}

export default AddProductComments;

