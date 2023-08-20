import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button"
const SmashedCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gray.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <h5>Smashed</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Learn more</Button>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gray.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Smashed</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Learn more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gray.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Smashed</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Learn more</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SmashedCarousel
