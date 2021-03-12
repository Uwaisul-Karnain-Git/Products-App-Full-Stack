import axios from 'axios';

const url='http://localhost:5000/productCategory';   

export const fetchProductCategories = () => axios.get(url);
export const fetchFilteredProductCategories = (name) => axios.get(`${url}/${name}`);

