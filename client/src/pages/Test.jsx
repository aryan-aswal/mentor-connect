import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const imageUrls = [
  'url-to-image1',
  'url-to-image2',
  'url-to-image3',
  'url-to-image4',
  'url-to-image5',
  // Add more image URLs
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 40, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageCarousel = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={0}
        transitionDuration={10000}
        customTransition="transform 10s linear"
        partialVisible={true}
        arrows={false}
        containerClass="carousel-container"
      >
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full transform transition-transform">
            <img src={url} alt={`Carousel image ${index + 1}`} className="w-full h-auto object-contain" />
          </div>
        ))}
      </Carousel>

      {/* Edge Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
      </div>
    </div>
  );
};

export default ImageCarousel;
