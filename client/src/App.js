import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersList from './components/UsersList';
import PizzasList from './components/PizzasList';
import AddPizza from './components/AddPizza';
import OrdersList from './components/OrdersList';
import AdminPanelScreen from './screens/AdminPanelScreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element=<Homescreen /> />
          <Route path="/cart" element=<Cartscreen /> />
          <Route path="/register" element=<Registerscreen /> />
          <Route path="/login" element=<Loginscreen /> />
          <Route path="/orders" element=<Ordersscreen /> />
          <Route path="/admin" element=<AdminPanelScreen /> />
          <Route path="/pizzaslist" element=<PizzasList /> />
          <Route path="/userslist" element=<UsersList /> />
          <Route path="/addpizza" element=<AddPizza /> />
          <Route path="/orderslist" element=<OrdersList /> />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
