


import 'bootstrap/dist/css/bootstrap.min.css';
import Nabars from './component/Nabars';
import Footer from './component/Footer';
import './App.css';
import './App.scss';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Home from './component/Home';
import Checkout from './component/Checkout';
import Shop from './component/Shop';
import Cart from './component/Cart';
import Love from './component/Love';
import Contact from './component/Contact';
import Pay from '././component/Pay';
import About  from './component/About';
import FAQ from './component/FAQ';
import ShopDetail from './component/ShopDetail';
// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Nabars />
     
     

      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/love' element={<Love />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/pay' element={<Pay />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/ShopDetail' element={<ShopDetail />}></Route>
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
