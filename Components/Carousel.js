import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DesiredCarousel = () => {
  return(
    <Carousel autoPlay centerMode={true} stopOnHover={true} >
        <div>
            <img alt="SEVENHILLS TIRUPATI" src="../../static/images/SV3.jpg" />
            <p className="legend">SEVENHILLS TIRUPATI</p>
        </div>
        <div>
            <img alt="SEVENHILLS TIRUPATI" src="../../static/images/SV1.jpg" />
            <p className="legend">SEVENHILLS TIRUPATI</p>
        </div>
        <div>
            <img alt="SEVENHILLS TIRUPATI" src="../../static/images/SV2.jpg" />
            <p className="legend">SEVENHILLS TIRUPATI</p>
        </div>
    </Carousel>
);
  }
export default DesiredCarousel
