import { Link } from "react-router-dom"
import images1 from "../static/product/img/product-1.jpg"
import images2 from "../static/product/img/product-2.jpg"
import images3 from "../static/product/img/product-3.jpg"
import images4 from "../static/product/img/product-4.jpg"
import { useEffect, useState } from "react"

// import axios from "axios"


function HomeContent() {

       const MData = [{id:1,name:'Iphone'},{id:1,name:'Samsung'}]
       const [getData,setData] = useState(MData)
       

       useEffect(()=>{
        fetch('/tolist/').then((res)=>{
            //  setData(res.data)
            setData([
            {id:1,name:'iphone 11 pro',image:images1,price:320},
            {id:1,name:'samsung galaxy S6',image:images2,price:350},
            {id:1,name:'iphone 11 pro',image:images1,price:320},
            {id:1,name:'samsung galaxy S6',image:images2,price:350},
            {id:1,name:'iphone 11 pro',image:images1,price:320},
            {id:1,name:'samsung galaxy S6',image:images2,price:350},
            {id:1,name:'iphone 11 pro',image:images1,price:320},
            {id:1,name:'samsung galaxy S6',image:images2,price:350},
            {id:1,name:'infinix Smart 5',image:images3,price:100},
            {id:1,name:'techno camon 5',image:images4,price:111}]);
            
            

        })
       },[])
       

 

      const Product = (props)=>{    
        
       
            
           return (
            <>
           
                {
                    getData.map((keyValue)=>(
                      <>
        <div className="col-lg-2 col-md-4 col-sm-4 pb-1 border border-primary m-2 hoverchange shadow bg-shadow">
            <div className="product-item bg-white mb-2 mt-2">
                <div className="product-img position-relative overflow-hidden">
                     <Link to='/ShopDetail'>  
                    <img className="img-fluid w-100" src={ keyValue.image } alt="img not found" />
                    </Link>
                    <div className="product-action mt-2">
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="fa fa-shopping-cart"></i></Link>
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="far fa-heart" ></i></Link>
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="fa fa-sync-alt" ></i></Link>
                        <Link className="btn btn-outline-primary btn-square m-1" href><i className="fa fa-search" ></i></Link>
                    </div>
                </div>
                <div className="text-center py-1">
                    <Link to='/ShopDetail' className="h6 text-decoration-none text-truncate  text-primary productName" id="tick"  >{keyValue.name}</Link>
                    <div className="d-flex align-items-center justify-content-center mt-2 text-primary">
                        <h5>${keyValue.price}.0</h5>
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

                    ))
                }
           
            </>
           )
            
        }
      

       
   
    return (

        <>
        {/* Categories Start */}
<div className="container-fluid pt-5 border border-primary ">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="pr-3 text-primary fs-1 border-bottom border-black">Laptops</span></h2>
    <div className="row px-xl-1 pb-3 d-flex justify-content-center">
     
     <Product  />
     
   
    
  
    </div>
</div>

<div className="container-fluid pt-5 border border-primary ">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="pr-3 text-primary fs-1 border-bottom border-black">Tablet</span></h2>
    <div className="row px-xl-1 pb-3 d-flex justify-content-center">
     
     
     <Product />
     
   
  
    </div>
</div>

<div className="container-fluid pt-5 border border-primary ">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="pr-3 text-primary fs-1 border-bottom border-black">Phones</span></h2>
    <div className="row px-xl-1 pb-3 d-flex justify-content-center">
     
    
     <Product />
    
  
    </div>
</div>
{/* Categories End */}
        </>
    )
    
}


export default HomeContent