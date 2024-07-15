
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import logo from '../logo.svg';
import Cover from "./Cover"
import Featured from './Featured';
import HomeContent  from './HomeContent';

function Home() {
    return (

        <>
        <div  id='up'></div>
        <Cover />
        <Featured />
        <HomeContent />
       
       
   
        </>
    )
    
}

export default Home