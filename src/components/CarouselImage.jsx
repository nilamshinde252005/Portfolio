import Carousel from 'react-bootstrap/Carousel';
import "../styles/Carousel.css";

function CarouselImage() {
  return (
    <div style={{marginTop:"5%"}}>
      <Carousel fade indicators={false} controls={true} interval={3000}>
      <Carousel.Item>
        <img
          className="custom-img"
          src="/Screenshot 2025-09-18 at 16.13.44.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>sign-in & sign-up</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 16.54.21.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Journey- Save & edit YOUR RULES</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/Screenshot 2025-09-18 at 16.13.22.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Journey- YOUR RULES with music </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/Screenshot 2025-09-18 at 16.12.58.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Journey- save & edit journal</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 16.58.24.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Journey- journal entry</h3>
        </Carousel.Caption>
      </Carousel.Item>




      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 16.11.51.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Books</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 16.11.29.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>To do List- save & edit </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 17.01.30.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Manifestation- overview</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 17.02.43.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Manifestation- 28 days challenges</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 16.12.33.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Manifestation- save & edit as per diff. 28 days challenges</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-img"
          src="/public/Screenshot 2025-09-18 at 16.10.55.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Manifestation- progress tracker</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}
export default CarouselImage;
