
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import { Container } from 'react-bootstrap';
import OrdersView from './View/OrdersView/OrdersView';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import MenuView from './View/MenuView/MenuView';
import SignUp from './components/Signup/SignUp';
import HomeView from './View/HomeView/HomeView';
import PaymentView from './View/PaymentView/PaymentView';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <Container fluid className='p-0 app_container_bg'>
    <Router>
      <Header />
      <Routes>        
        <Route exact path='/login' element={<Login/>} /> 
        <Route exact path='/signup' element={<SignUp/>} /> 
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path='/menu' element={<MenuView />} />
          <Route exact path='/payments' element={<PaymentView />} />
          <Route exact path='/orders' element={<OrdersView/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
