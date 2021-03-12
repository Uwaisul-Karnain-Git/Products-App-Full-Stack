import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { createProduct } from '../actions/products';
import { getProductCategories } from '../actions/productCategories';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const AddProduct = () => {

    const [ productCategoryId, setProductCategoryId] = useState(null);

    const [ productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        categoryId: null,
        status: 'unpublished'   // By default set status = 'unpublished'
    });

    const dispatch = useDispatch();

    const productCategories = useSelector(state => state.productCategories);

    // Fetch data for 'Product Category' - 'Auto Complete' dropdown
    useEffect(() => {
        dispatch(getProductCategories());
    }, [dispatch]);

    const onSelectCategory = (e, value) => {
        if(value){
            setProductCategoryId(value.id);
        }
        else {
            setProductCategoryId(null);
        }
    };


    const handleProductSubmit = async (e) => {
        e.preventDefault(); // Not to get the refresh in the Browser

        let updatedProductData = {...productData, categoryId: productCategoryId};
        dispatch(createProduct(updatedProductData));
        clear();
    };

    const clear = () => {
        setProductData({
            name: '',
            description: '',
            price: 0,
            categoryId: null,
            status: 'unpublished'
        });

        setProductCategoryId(null);
    };

    return (

        <form className='w-25' onSubmit={handleProductSubmit}>
            
            <h5 className='mt-3 ms-5 mb-3'>Add Product</h5>

            <div className='mt-3 mb-2 ms-5 me-3'>
                <label>Product Name</label>
                <input className='float-end' type='text' value={productData.name} placeholder='Add Product Name' 
                    onChange={ e => setProductData({ ...productData, name: e.target.value })}  />
            </div>

            <div className='mt-3 mb-2 ms-5 me-3'>
                <label>Product Description</label>
                <input className='float-end' type='text' value={productData.description} placeholder='Add Product Description' 
                    onChange={ e => setProductData({ ...productData, description: e.target.value })}  />
            </div>

            <div className='mt-3 mb-2 ms-5 me-3'>
                <label>Product Category</label>

                <div className='float-end'>
                    
                    {/* 'Product Category' - 'Auto Complete' dropdown */}
                    <Autocomplete
                        id="combo-box-demo"
                        options={productCategories}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 182 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        //onChange={(event, value) => console.log(value)}
                        onChange={onSelectCategory}
                    />
                </div>
            </div>            

            <div className='mt-5 mb-2 ms-5 me-3'>
                <label>Price</label>
                <input className='float-end' type='text' value={productData.price} placeholder='Add Price' 
                    onChange={ e => setProductData({ ...productData, price: e.target.value })}  />
            </div>

            <input className='mt-3 mb-2 ms-5 me-3' type='submit' value='Add Product' />

            <button className='mt-3 mb-2 ms-5 me-3' onClick={clear}>Clear</button>
        </form>
    );

}

export default AddProduct;

