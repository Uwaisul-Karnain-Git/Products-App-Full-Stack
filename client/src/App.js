import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import { getProducts } from './actions/products';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
        <Header />

        <AddProduct />
        <SearchProduct />
        <ProductList />        
    </div>
  );
}

export default App;
