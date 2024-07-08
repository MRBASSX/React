
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';
import Cover from "./Cover"
import Featured from './Featured';

function Home() {
    return (

        <>
        <Cover />
        <Featured />
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
        </>
    )
    
}

export default Home