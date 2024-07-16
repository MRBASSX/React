import {Link} from "react-router-dom";
import payme from '../static/product/img/payments.png'


function Footer() {
    return (

        <>
        {/* <!-- Footer Start --> */}
<div className="container-fluid bg-primary text-white mt-5 pt-5 ">
    <div className="row px-xl-5 pt-5 text-md-center text-sm-center  text-lg-start ">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5 MyCustomFont text-md-center text-sm-center  text-lg-start " >
            <h5 className="text-uppercase mb-4 MyCustomFont">Get In Touch</h5>
            <p className="mb-4 MyCustomFont">Thank you for your co-orperation </p>
            <div className="flex flex-column justify-content-start text-md-center text-sm-center  text-lg-start MyCustomFont">
            <p className="mb-2"><i className="fa fa-map-marker-alt  mr-3"></i>  Street, Mile 3, Ghana</p>
            <p className="mb-2"><i className="fa fa-envelope  mr-3"></i>  Abassiddrisu9222@gmail.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt  mr-3"></i>   +233 550 9656 01</p>
            </div>
        </div>
        <div className="col-lg-8 col-md-12 MyCustomFont">
            <div className="row">
                <div className="col-md-4 mb-5  text-md-center text-sm-center  text-lg-start  ">
                    <h5 className=" text-uppercase mb-4 ">Quick Shop</h5>
                    <div className="d-flex flex-column text-md-center text-sm-center  text-lg-start  ">
                        
                        <Link className="mb-2  text-decoration-none hoverchangeA" to="/"> Home</Link>
                        <Link className="mb-2 text-decoration-none hoverchangeA" to="/shop">Shop</Link>
                        <Link className="mb-2 text-decoration-none hoverchangeA" to="/cart">Shopping Cart
                        </Link>
                        <Link className="thoverchangeA mb-2 text-decoration-none hoverchangeA" to="/contact"> Contact Us</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-5 MyCustomFont">
                    <h5 className="text-uppercase mb-4 text-md-center text-sm-center  text-lg-start ">My Account</h5>
                    <div className="d-flex flex-column justify-content-start text-md-center text-sm-center  text-lg-start   ">
                    
                        <Link className="hoverchangeA mb-2 text-decoration-none  " to="/userprofile"> UserProfile
                        </Link>
                        <Link className="hoverchangeA mb-2 text-decoration-none" to="/settings"> Settings
                        </Link>
                        <Link className="hoverchangeA mb-2 text-decoration-none" to="/wishlist"> WishList
                        </Link>
                        <Link className="hoverchangeA mb-2 text-decoration-none" href="#">ChangePassword</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-5 MyCustomFont text-md-center text-sm-center  text-lg-start ">
                    <h5 className=" text-uppercase mb-4">Newsletter</h5>
                    <p>Keep in touch with us</p>
                    <form action>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Your Email Address" />
                            <div className="input-group-append">
                                <button className="btn btn-primary border border-white">Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <h6 className=" text-uppercase mt-4 mb-3  text-start">Follow Us:</h6>
                    <div className="d-flex">
                        <Link className="btn btn-primary btn-square m-1 border border-white" href="#"><i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="btn btn-primary btn-square m-1 border border-white" href="#"><i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="btn btn-primary btn-square m-1 border border-white" href="#"><i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="btn btn-primary btn-square m-1  border border-white" href="#"><i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row border-top mx-xl-5 py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
        <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-md-center text-sm-center  text-lg-start  text-md-left ">
              
            <i class="fas fa-copyright    "></i> BRAINTECH. All Rights Reserved. Designed by THE-BRAIN
            </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img src={payme} alt="Not found" />
        </div>
    </div>

{/* <!-- Back to Top --> */}
    <Link  className="btn btn-primary" to="#up"><i className="fa fa-angle-double-up "></i>
</Link>
</div>

{/* <!-- Footer End --> */}




        </>
    )
    
}

export default Footer