import {Link} from "react-router-dom";

// import "../static/product/css/style.css"
import "../static/product/lib/owlcarousel/assets/owl.carousel.min.css"
import "../static/product/lib/animate/animate.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




function Nabars() {
    return (

        <>
      

        
    {/* Topbar Start  */}

    <div className="container-fluid">
        <div className="row bg-primary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <Link className="m-1 text-white" to="/about" >About</Link>
                    <Link className="m-1 text-white" to="/contact" >Contact</Link>
                    <Link className="m-1 text-white" to="/help" >Help</Link>
                    <Link className=" m-1 text-white" to="/faq">FAQs</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Sign in</button>
                            <button className="dropdown-item" type="button">Sign up</button>
                        </div>
                    </div>
                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>
                        </div>
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                  
                    <Link to="/love" className="btn px-0 ml-2">
                        <i className="fas fa-heart text-white m-1" />
                        <span className="badge text-white border border-white rounded-circle m-1" style={{paddingBottom: 2}}>0</span>
                    </Link>
                    <Link to="/cart" className="btn px-0 ml-2">
                        <i className="fas fa-shopping-cart text-white" />
                        <span className="badge text-white border border-white rounded-circle m-1" style={{paddingBottom: 2}}>0</span>
                    </Link>
                    <form action className="mt-2 mx-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" />
                        <div className="btn btn-primary  p-1">
                            <span className="input-group-text bg-transparent ">
                <i className="fa fa-search text-white" />
              </span>
                        </div>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
        <div className="row align-items-center bg-light py-2 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
                <Link href className="text-decoration-none">
                    <span className="h1 text-uppercase text-primary bg-white px-1">THE</span>
                    <span className="h1 text-uppercase text-white bg-primary px-1ml-n1">BRAIN</span>
                </Link>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="/" className="mt-2 mx-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" />
                        <div className="btn btn-primary p-1">
                            <span className="input-group-text bg-transparent text-">
                <i className="fa fa-search text-white" />
              </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+233550965601</h5>
            </div>
        </div>
    </div>

 {/* Topbar End */}


{/* Navbar Start */}

    <div className="container-fluid bg-primary mb-30">
    <div className="row mx-5" > 
        <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3 py-lg-0 px-0">
                <Link href="" className="text-decoration-none d-block d-lg-none">
                  
                <span className="h1 text-uppercase text-dark bg-light px-2">THE</span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">BRAIN</span>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  
                    <span className="navbar-toggler-icon"></span>
                    
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                      
                        <Link to="/" className="nav-item nav-Link  m-1 text-white">Home
                        </Link>
                        <Link to="/shop" className="nav-item nav-Link m-1 text-white">Shop
                        </Link>
                        <div className="nav-item dropdown m-1">
                            <Link href="#" className="nav-item nav-Link dropdown-toggle active text-white" data-toggle="dropdown">Buy 
                            </Link>
                            <div className="dropdown-menu bg-primary rounded-0 border-0 m-1">
                                <Link to="/cart" className="dropdown-item ">Shopping Cart
                                </Link>
                                <Link to="/checkout" className="dropdown-item">Checkout
                                </Link>
                                
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <Link to="/love" className="btn px-0">
                        <i className="fas fa-heart text-white"></i>
                        <span className="badge text-white border border-white rounded-circle m-1" style={{paddingBottom: '2px;'}}>0</span>
                        </Link>
                        <Link to="/cart" className="btn px-0 ml-3">
                        <i className="fas fa-shopping-cart text-white"></i>
                        <span className="badge text-white border border-white rounded-circle m-1" style={{paddingBottom: '2px;'}}>0</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>

{/* Navbar End */}

        
       
        </>
    )
    
}

export default Nabars