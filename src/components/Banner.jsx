import React from 'react';
import { Carousel } from 'flowbite-react';

export const Banner = ({ rockets }) => {
  return (
    <div className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-128 2xl:h-160">
      <Carousel>
        {rockets?.map((data) => (
          <img
            className="w-full h-full object-cover"
            src={data.flickr_images[1]}
            alt={data.id}
            key={data.id}
            style={{ imageRendering: 'pixelated' }}
          />
        ))}
      </Carousel>
    </div>
  );
};
