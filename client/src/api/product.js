import axios from 'axios';

const url='http://localhost:5000/product';   

export const fetchProducts = () => axios.get(url);
export const fetchFilteredProducts = (name, price) => axios.get(`${url}/${name}/${price}`);
export const createProduct = (product) => axios.post(url, product);
export const updatePostToDeleteState = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);


