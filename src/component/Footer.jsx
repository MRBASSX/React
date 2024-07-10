import {Link} from "react-router-dom";
import payme from '../static/product/img/payments.png'


function Footer() {
    return (

        <>
        {/* <!-- Footer Start --> */}
<div className="container-fluid bg-primary text-white mt-5 pt-5">
    <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">Thank you for your co-orperation </p>
            <p className="mb-2"><i className="fa fa-map-marker-alt  mr-3"></i>  Street, Mile 3, Ghana</p>
            <p className="mb-2"><i className="fa fa-envelope  mr-3"></i>  Abassiddrisu9222@gmail.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt  mr-3"></i>   +233 550 9656 01</p>
        </div>
        <div className="col-lg-8 col-md-12">
            <div className="row">
                <div className="col-md-4 mb-5">
                    <h5 className=" text-uppercase mb-4">Quick Shop</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-white mb-2" href="#"><i className="fa fa-angle-down mr-2"></i>
                        </Link>
                        <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right mr-2"></i> Home
                        </Link>
                        <Link className="text-white mb-2" to="/shop"><i className="fa fa-angle-right mr-2"></i> Shop
                        </Link>
                        <Link className="text-white mb-2" href="/cart"><i className="fa fa-angle-right mr-2"></i> Shopping Cart
                        </Link>
                        <Link className="text-white mb-2" href="/contact"><i className="fa fa-angle-right mr-2"></i> Contact Us
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <h5 className=" text-uppercase mb-4">My Account</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-white mb-2" href="#"><i className="fa fa-angle-down mr-2"></i>
                        </Link>
                        <Link className="text-white mb-2" to="/userprofile"><i className="fa fa-angle-right mr-2"></i> UserProfile
                        </Link>
                        <Link className="text-white mb-2" to="/settings"><i className="fa fa-angle-right mr-2"></i> Settings
                        </Link>
                        <Link className="text-white mb-2" to="/wishlist"><i className="fa fa-angle-right mr-2"></i> WishList
                        </Link>
                        <Link className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>ChangePassword</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
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
                    <h6 className=" text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex">
                        <Link className="btn btn-primary btn-square mr-2 border border-white" href="#"><i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="btn btn-primary btn-square mr-2 border border-white" href="#"><i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="btn btn-primary btn-square mr-2 border border-white" href="#"><i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="btn btn-primary btn-square border border-white" href="#"><i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row border-top mx-xl-5 py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
        <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left ">
                
            © BRAINTECH. All Rights Reserved. Designed by THE-BRAIN
            </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img src={payme} alt="Not found" />
        </div>
    </div>

{/* <!-- Back to Top --> */}
    <Link  className="btn btn-primary  "><i className="fa fa-angle-double-up "></i>
</Link>
</div>

{/* <!-- Footer End --> */}




        </>
    )
    
}

export default Footer