import header from '../assets/images/header/defaut.avif'
import Carousel from 'react-bootstrap/Carousel'
const Home = () => {
  return (
    <>
    <div>
       <div>
            <img src={header} alt="loading" className="p-10 mt-5 "/>
        </div>
    </div>
    <div className="container mt-5">

      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1018/1200/500"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is first image</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1015/1200/500"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is second image</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1019/1200/500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is third image</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
    </>
  )
}

export default Home