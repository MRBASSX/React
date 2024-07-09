

function Featured() {


    return (

        <>
      
        {/* <!-- Featured Start --> */}
<div className="container-fluid pt-1">
<hr className="bg-primary" style={{height:5}} /><i class="fa fa-text-width text-bg-primary" aria-hidden="true"></i>
    <div className="row px-xl-5 ">
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="d-flex align-items-center bg-light border border-primary " style={{padding: 30}}>
                <i className="fa fa-check text-primary m-0 mx-3"/>
                <h5 className="font-weight-semi-bold m-0"> Quality Product</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="d-flex align-items-center bg-light border border-primary" style={{padding: 30}}>
                <i className="fa fa-shipping-fast text-primary m-0 mx-2"/>
                <h5 className="font-weight-semi-bold m-0"> Free Shipping</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="d-flex align-items-center bg-light border border-primary" style={{padding: 30}}>
                <i className="fas fa-exchange-alt text-primary m-0 mx-3"/>
                <h5 className="font-weight-semi-bold m-0"> 14-Day Return</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="d-flex align-items-center bg-light border border-primary" style={{padding: 30}}>
                <i className="fa fa-phone-volume text-primary m-0 mx-3"/>
                <h5 className="font-weight-semi-bold m-0"> 24/7 Support</h5>
            </div>
        </div>
    </div>
    <hr className="bg-primary" style={{height:10}} />

</div>

{/* <!-- Featured End --> */}
        </>
    )
    
    
}


export default Featured;