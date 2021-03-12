import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { getFilteredProducts } from '../actions/products';


const SearchProduct = () => {

    const [ productData, setProductData] = useState({
        name: '',
        price: 0,
        status: 'unpublished'   // By default set status = 'unpublished'
    });

    const dispatch = useDispatch();

    const handleProductSubmit = async (e) => {
        e.preventDefault(); // Not to get the refresh in the Browser

        dispatch(getFilteredProducts(productData.name, productData.price ? (+productData.price) : 0));  /* '+' is used to convert  
        'price' to a 'numeric' field (same as 'parseInt()' */
    };

    return (

        <form style={{ width: '30%' }} onSubmit={handleProductSubmit}>
            
            <h5 className='mt-3 ms-5 mb-3'>Search Product</h5>

            <div className='mt-3 mb-2 ms-5 me-3'>
                <label>Product Name (Mandatory)</label>
                <input className='float-end' type='text' value={productData.name} placeholder='Add Product Name' 
                    onChange={ e => setProductData({ ...productData, name: e.target.value })}  />
            </div> 

            <div className='mt-3 mb-2 ms-5 me-3'>
                <label>Price</label>
                <input className='float-end' type='text' value={productData.price} placeholder='Add Price' 
                    onChange={ e => setProductData({ ...productData, price: e.target.value })}  />
            </div>

            <input className='mt-3 mb-2 ms-5 me-3' type='submit' value='Search' />
        </form>
    );

}

export default SearchProduct;

