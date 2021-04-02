import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
import './App.css';
import ShoppingList from './components/ShoppList';

 import { Provider} from 'react-redux';
 import store from './store';

function App() {
  return ( 
    <Provider store={store}> 
    <div className="App">
      <AppNavbar/>  
      <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;
