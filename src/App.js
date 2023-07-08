import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className='mainContainer'>
      <NavBar />
      
      <ItemListContainer itemList="Bienvenido" />
    </div>
  );
}

export default App;
