import './Carousels.css'
import Carousel from 'react-bootstrap/Carousel';

import HQ from '../../pictures/HQ.jpg'
import HQ_Future from '../../pictures/HQ_Future.jpg'
import DoWhatIsGreat from '../../pictures/DoWhatIsGreat.jpg'

export default function Carousels() {

    return(
        <div>
            <Carousel >
                <Carousel.Item interval={5000} >
                    <img
                        className="d-block w-100 carousel-image"
                        src={HQ}
                        alt="HQ"
                    />
                    <Carousel.Caption>
                        <h5>Headquarter</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} >
                    <img
                        className="d-block w-100 carousel-image"
                        src={HQ_Future}
                        alt="HQ_Future"
                    />
                    <Carousel.Caption>
                        <h5>Headquarters of the future</h5>
                        <p>This is what our sustainable future together looks like.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={DoWhatIsGreat}
                        alt="DoWhatIsGreat"
                    />
                    <Carousel.Caption>
                        <h5>DWIG</h5>
                        <p>Do what is great!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}