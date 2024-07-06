import Home from './component/Home'
import logo from './logo.svg';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={< Home/>}></Route>
          <Route path='/' element={< Che/>}></Route>
          <Route path='/' element={< Home/>}></Route>
          <Route path='/' element={< Home/>}></Route>
        </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <div>
  <Button>
    Button as 
  </Button>
  <Button>
    Button as link
  </Button>
  </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
