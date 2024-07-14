import { Link } from "react-router-dom"
import images from "../static/product/img/product-1.jpg"
// import { useState } from "react"


function HomeContent() {
    
    //    const [getcolor,setColor] = useState("text-primary")
 

      const Product = (props)=>{    
        
        
            
           return (
            <>
             <div className="col-lg-2 col-md-4 col-sm-4 pb-1 border border-primary m-2 hoverchange shadow bg-shadow">
            <div className="product-item bg-white mb-2 mt-2">
                <div className="product-img position-relative overflow-hidden">
                     <Link to='/ShopDetail'>  
                    <img className="img-fluid w-100" src={images} alt="img not found" />
                    </Link>
                    <div className="product-action mt-2">
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="fa fa-shopping-cart"></i></Link>
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="far fa-heart" ></i></Link>
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="fa fa-sync-alt" ></i></Link>
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="fa fa-search" ></i></Link>
                    </div>
                </div>
                <div className="text-center py-1">
                    <Link to='/ShopDetail' className="h6 text-decoration-none text-truncate  text-primary productName" id="tick"  >Samsung Galaxy</Link>
                    <div className="d-flex align-items-center justify-content-center mt-2 text-primary">
                        <h5>$123.0</h5>
                        <h6 className="text-muted ml-2 text-primary"><del>$400</del></h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1" ></small>
                        <small className="fa fa-star text-primary mr-1" ></small>
                        <small className="fa fa-star text-primary mr-1" ></small>
                        <small className="fa fa-star text-primary mr-1" ></small>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>
            </>
           )
            
        }
      

       
   
    return (

        <>
        {/* Categories Start */}
<div className="container-fluid pt-5 border border-primary ">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="pr-3 text-primary">Laptops</span></h2>
    <div className="row px-xl-1 pb-3 d-flex justify-content-center">
     
     <Product  />
     <Product />
     <Product />
     <Product />
     <Product />
   
    
  
    </div>
</div>

<div className="container-fluid pt-5 border border-primary ">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="pr-3 text-primary">Tablet</span></h2>
    <div className="row px-xl-1 pb-3 d-flex justify-content-center">
     
     
     <Product />
     <Product />
     <Product />
     <Product />
     <Product />
   
  
    </div>
</div>

<div className="container-fluid pt-5 border border-primary ">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="pr-3 text-primary">Phones</span></h2>
    <div className="row px-xl-1 pb-3 d-flex justify-content-center">
     
     <Product />
     <Product />
     <Product />
     <Product />
     <Product />
    
  
    </div>
</div>
{/* Categories End */}
        </>
    )
    
}


export default HomeContent