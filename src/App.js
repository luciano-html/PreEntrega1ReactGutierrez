import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/Context';
import 'react-toastify/dist/ReactToastify.css';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';



function App() {

  return (
    <div className='mainContainer'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes >
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={"Page not fount: 404"} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          
        </BrowserRouter>

      </CartProvider>
    </div>
  );
}


export default App;



