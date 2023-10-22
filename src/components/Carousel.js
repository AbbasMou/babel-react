// Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';


const CarouselComponent = () => {
  return (
    <Carousel showArrows={false} showThumbs={false} autoPlay>
      <div>
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Carousel>
  );
};

export default CarouselComponent;