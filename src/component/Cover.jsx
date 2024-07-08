import Carousel from 'react-bootstrap/Carousel';
import logo from '../logo.svg';
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
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Cover;