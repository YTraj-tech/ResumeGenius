

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CardFlip = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    // Sample images - replace with your actual image paths
    const images = [
        "/img1.avif",
        "/img2.png",
        "/img3.avif",
        "/Link1.png",
        "/main01.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            // Start the flip animation
            setIsFlipping(true);

            // Change to the next image after half the animation time
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 1000);

            // Reset the flip state after the full animation
            setTimeout(() => {
                setIsFlipping(false);
            }, 2000);
        }, 4000); // Total time between flips

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col items-center justify-center  p-6">
          

            <div className="relative w-80 h-96 perspective-1000">
                {/* Main flipping card */}
                <div className={`relative w-full h-full transition-transform duration-2000 transform-style-preserve-3d ${isFlipping ? 'rotate-y-180' : ''
                    }`}>
                    {/* Front side - current image */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl ">
                        <img
                            src={images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            className=" object-cover w-full h-full"
                        />
                       
                    </div>

                    {/* Back side - next image (initially hidden) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src={images[(currentIndex + 1) % images.length]}
                            alt={`Image ${((currentIndex + 1) % images.length) + 1}`}
                            className="w-full h-full object-cover"
                        />
                      
                    </div>
                </div>
            </div>

         

           

            <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transition-transform {
          transition: transform 2s;
        }
      `}</style>
        </div>
    );
};

export default CardFlip;