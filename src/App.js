import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';


function App() {
  return (
    <div className='mainContainer'>
      <BrowserRouter>
      <NavBar/>
        <Routes >
          <Route path="/"element={<ItemListContainer/>} />
          <Route path="/product/:id"element={<ItemDetailContainer/>}/>
          
          <Route path="*" element={"Page not fount: 404"}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}


export default App;


{/* <NavBar />
      <ItemListContainer />
      <ItemDetailContainer/> */}