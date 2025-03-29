import React from "react";
import Image from 'next/image';

const images = Array.from({ length: 9 }, (_, i) => ({
  src: `/spacefest/${i + 1}.jpg`,
  alt: `SpaceFest Event Image ${i + 1}`,
}));

export default function Gallery() {
  return (
    <div className="mt-8">
      <h4 className="text-xl font-semibold mb-4">Gallery</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-75 transition-opacity hover:scale-105 duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              loading={index < 4 ? "eager" : "lazy"}
              quality={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
