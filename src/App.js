import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContainer from './components/CartContainer/CartContainer';



// 1 20

// Crear el context
// Importar/Exportar
// Consumirlo
// Crear provider
// Crear prop Value

const cartContext = createContext({ cart: [] })
function CartProvider(props) {
  const [cart, setCart] = useState([])

  function addToCart(product, count) {
    const newCart = [...cart] //copiamos el estado cart para modificarlo
    const newItemObj = { count, ...product } // creamos un objeto nuevo con count y product dentro del mismo
    newCart.push(newItemObj) //cuando llamamos a la funcion se pushea los datos de itemDetailContainer a newItemObj
    setCart(newCart)
    console.log(newCart)
    toast.success(`Agregaste  ${newItemObj.count} ${newItemObj.title} al carrito `, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }
  function getTotalItems() {
    let total = 0
    cart.forEach((item) => {
      total += item.count
    })
    return total
  }
  

  return (
    <cartContext.Provider value={{ cart, addToCart, getTotalItems }}>
      {props.children}
    </cartContext.Provider>
  )
}


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
            <Route path="/cart"element={<CartContainer/>}/>
          </Routes>
          <ToastContainer />
        </BrowserRouter>

      </CartProvider>
    </div>
  );
}


export default App;
export { cartContext }


