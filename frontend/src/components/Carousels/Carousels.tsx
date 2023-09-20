import './Carousels.css'
import Carousel from 'react-bootstrap/Carousel';

import SCC from '../../pictures/saas-concept-collage.jpg'
import GT from '../../pictures/GreenTech.jpg'
import hwg from '../../pictures/house-with-green-led-strip-that-says-smart-house.jpg'

export default function Carousels() {

    return(
        <div className={"carousel"}>
            <Carousel>
                <Carousel.Item interval={3000} >
                    <img
                        className="d-block w-100 carousel-image"
                        src={SCC}
                        alt="HQ"
                    />
                    <Carousel.Caption>
                        <h5>Future CloudGreen</h5>
                        <p>Image by <a href="https://www.freepik.com/free-photo/saas-concept-collage_26301279.htm#query=cloud%20tech&position=2&from_view=keyword&track=ais">Freepik</a></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000} >
                    <img
                        className="d-block w-100 carousel-image"
                        src={GT}
                        alt="HQ_Future"
                    />
                    <Carousel.Caption>
                        <h5>Green Tech</h5>
                        <p>Image by <a href="https://www.freepik.com/free-vector/technological-ecology-concept_6849678.htm#query=green%20technology&position=2&from_view=search&track=ais">Freepik</a></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={hwg}
                        alt="DoWhatIsGreat"
                    />
                    <Carousel.Caption>
                        <h5>Our Future</h5>
                        <a href="https://www.freepik.com/free-photo/house-with-green-led-strip-that-says-smart-house_41368739.htm#query=future%20city&position=49&from_view=search&track=ais">Image by chandlervid85</a> on Freepik
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}