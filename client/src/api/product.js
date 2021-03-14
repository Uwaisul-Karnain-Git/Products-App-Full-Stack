import axios from 'axios';

const url='http://localhost:5000/product';   

export const fetchProducts = () => axios.get(url);
export const fetchFilteredProducts = (name, price) => axios.get(`${url}/${name}/${price}`);
//export const updateProductToDeleteState = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const createProduct = (product) => axios.post(url, product, {
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
      console.log('Axios Response: ' + response);
}).catch(error => {
      console.log(error.response);
});

export const updateMultipleProductsToDeleteState = (ids) => axios.patch(url, ids, {
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
      console.log('Axios Response: ' + response);
}).catch(error => {
      console.log(error.response);
});

