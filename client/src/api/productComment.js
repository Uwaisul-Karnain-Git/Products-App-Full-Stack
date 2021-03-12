import axios from 'axios';

const url='http://localhost:5000/productComment';   


export const addProductComment = (productComment) => axios.post(url, productComment);



