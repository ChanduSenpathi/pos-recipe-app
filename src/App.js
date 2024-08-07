
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';
import { Container } from 'react-bootstrap';
import Orders from './components/Orders/Orders';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <Container fluid className='p-0'>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/payments' element={<Orders/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
