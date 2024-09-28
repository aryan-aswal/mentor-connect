import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const imageUrls = [
  'https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7d0f2123f5d_Google.png?d=208x70',
  'https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7d0d3c318e3_Airtel.png?d=120x120',
  'https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5d130645eec88_uber.jpg?d=160x160',
  'https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a7d5d2d4ed_Asian_Paints.png?d=120x120',
  'https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo.png',
  'https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a83fcaf7f9_tata-group.png?d=160x147',
  'https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7537d5d36c3_capgemini_logo.png?d=240x60',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/610e1bbbede1d_768px-EY_logo_2019.svg.png?d=120x120'
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
    <div className="flex items-center w-full py-5">
      {/* Left section with text */}
      <div className="w-1/6 text-left pl-10">
        <h2 className="text-lg font-semibold">Mentors from</h2>
        <h3 className="text-xl font-bold">Top Companies:</h3>
      </div>

      {/* Right section with carousel */}
      <div className="w-3/4 relative overflow-hidden mr-10">
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
              <img 
                src={url} 
                className="w-full h-10 md:h-8 lg:h-8 object-contain" 
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;