import { Link } from "react-router-dom"
import cover3 from '../static/product/img/product-1.jpg'
import { useState } from "react";

function ShopDetail() {

    const [getQuantity,setQuantity] =  useState(1);
    

    return (
        <>
        {/* <!-- Breadcrumb Start --> */}
<div className="container-fluid mt-4 border border-primary bg-light">
    <div className="row px-xl-5">
        <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
                <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                <Link className="breadcrumb-item text-dark" to="/shop">Shop</Link>
                <span className="breadcrumb-item active">Shop Detail</span>
            </nav>
        </div>
    </div>
</div>

{/* <!-- Breadcrumb End --> */}



{/* <!-- Shop Detail Start --> */}
<div className="container-fluid pb-5">
    <div className="row px-xl-5">
        <div className="col-lg-5 mb-30">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner bg-light">
                    <div className="carousel-item active">
                        <img className="w-100 h-100" src={cover3} alt="Not Available" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100" src={cover3} alt="Not Available" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100" src={cover3} alt="Not Available"  />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100" src={cover3} alt="Not Available" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                </a>
                <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                </a>
            </div>
        </div>
        <div className="col-lg-7 h-auto mb-30 ">
            <div className="h-100 bg-light pt-30 d-flex justify-content-center align-items-center flex-column">
                <h3 className="m-3">Digital Camera</h3>
                <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star-half-alt"></small>
                        <small className="far fa-star"></small>
                    </div>
                    <small className="pt-1">(2 Reviews)</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">${23.00 + 150.00 }.00</h3>
                <p className="mb-4">The IRF9530 is a high-efficiency P-Channel MOSFET designed for high-speed 
                switching and power management applications. This MOSFET is suitable for a variety of electronic devices 
                and circuits, including power supplies, motor controllers, and DC-DC converters.</p>
               
                <div className="d-flex mb-4 ">
                    <strong className="text-dark mr-3">Colors:</strong>
                    <form className="mx-2  d-flex gap-2 ">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-1" name="color" />
                            <label className="custom-control-label" htmlFor="color-1">Black</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-2" name="color" />
                            <label className="custom-control-label" htmlFor="color-2">White</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-3" name="color" />
                            <label className="custom-control-label" htmlFor="color-3">Red</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-4" name="color" />
                            <label className="custom-control-label" htmlFor="color-4">Blue</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-5" name="color" />
                            <label className="custom-control-label" htmlFor="color-5">Green</label>
                        </div>
                    </form>
                </div>
                <div className="d-flex align-items-center mb-4 pt-2">
                    <div className="input-group quantity mr-3" style={{width: 130}}>
                        <div className="input-group-btn">
                            <button className="btn btn-primary btn-minus" onClick={()=>setQuantity(getQuantity=>getQuantity -1)}>
                <i className="fa fa-minus" ></i>
              </button>
                        </div>
                        <input type="text" className="form-control bg-secondary border-0 text-center" value={ getQuantity < 1  ? setQuantity(1):getQuantity} />
                        <div className="input-group-btn">
                            <button className="btn btn-primary btn-plus" onClick={()=>setQuantity(getQuantity=>getQuantity + 1)}>
                <i className="fa fa-plus" ></i>
              </button>
                        </div>
                    </div>
                    <button className="btn btn-primary px-3 m-2"><i className="fa fa-shopping-cart mr-1" ></i> Add To
            Cart</button>
                </div>
                <div className="d-flex pt-2">
                    <strong className="text-dark mr-2">Share on:</strong>
                    <div className="d-inline-flex">
                        <a className="text-dark px-2" href>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-dark px-2" href>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-dark px-2" href>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-dark px-2" href>
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row px-xl-5">
        <div className="col">
            <div className="bg-light p-30">
                <div className="nav nav-tabs mb-4">
                    <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                    <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                    <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (1)</a>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3">Product Description</h4>
                        <p>The IRF9530 is a high-efficiency P-Channel MOSFET designed for high-speed switching and power management applications. This MOSFET is suitable for a variety of electronic devices and circuits, including power supplies, motor controllers, and DC-DC converters. With its low on-resistance and high current-carrying capability, the IRF9530 ensures efficient performance and reliable operation.</p>
                        <p>The IRF9530 is a high-efficiency P-Channel MOSFET designed for high-speed switching and power management applications. This MOSFET is suitable for a variety of electronic devices and circuits, including power supplies, motor controllers, and DC-DC converters. With its low on-resistance and high current-carrying capability, the IRF9530 ensures efficient performance and reliable operation.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-pane-2">
                        <h4 className="mb-3">Additional Information</h4>
                        <p>The IRF9530 is a high-efficiency P-Channel MOSFET designed for high-speed switching and power management applications. This MOSFET is suitable for a variety of electronic devices and circuits, including power supplies, motor controllers, and DC-DC converters. With its low on-resistance and high current-carrying capability, the IRF9530 ensures efficient performance and reliable operation..</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                    <li className="list-group-item px-0">
                                    High Current Capacity: Capable of handling continuous drain current up to -19A.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-pane-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-4">1 review for  Digital Camera </h4>
                                <div className="media mb-4">
                                    <img src={cover3} alt="Not Available"  className="img-fluid mr-3 mt-1" style={{width: 45}} />
                                    <div className="media-body">
                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small>
                                        </h6>
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <p>The IRF9530 is a high-efficiency P-Channel MOSFET designed for high-speed switching and power management applications. This MOSFET is suitable for a variety of 
                                            electronic devices and circuits, including power supplies, motor controllers, and DC-DC converters.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-4">Leave a review</h4>
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <div className="d-flex my-3">
                                    <p className="mb-0 mr-2">Your Rating * :</p>
                                    <div className="text-primary">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Review *</label>
                                        <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={ ""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="submit" value={"Leave Your Review"} className="btn btn-primary px-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Shop Detail End --> */}
        </>
    )
}


export default ShopDetail
