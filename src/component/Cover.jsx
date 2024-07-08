import Carousel from 'react-bootstrap/Carousel';
import cover1 from '../static/product/img/carousel-1.jpg'
import cover2 from '../static/product/img/carousel-11.jpg'
import cover3 from '../static/product/img/carousel-22.jpg'


function Cover() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <div className="row">
        <img
          className="d-block w-50 "
          src={cover1}
          alt="Second slide"
        />
        <img
          className="d-block w-50"
          src={cover3}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h5 className=' text-primary fs-1'>Best Selling</h5>
          <p className=' text-primary fs-4'>Want the best with a discount ?  tap on the read more.</p>
          <div className="btn btn-outline-success ">Read More</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row">
        <img
          className="d-block w-50 ali"
          src={cover3}
          alt="Second slide"
        />
        <img
          className="d-block w-50"
          src={cover1}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
        <h5 className=' text-primary fs-1'>Best Selling</h5>
          <p className=' text-primary fs-4'>Want the best with a discount ?  tap on the read more.</p>
          <div className="btn btn-outline-success ">Read More</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
        <img
          className="d-block w-50"
          src={cover1}
          alt="Second slide"
        />
        <img
          className="d-block w-50"
          src={cover2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
        <h5 className=' text-primary fs-1'>Best Selling</h5>
          <p className=' text-primary fs-4'>Want the best with a discount ?  tap on the read more.</p>
          <div className="btn btn-outline-success ">Read More</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Cover;