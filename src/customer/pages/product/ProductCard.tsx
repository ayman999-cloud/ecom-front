import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
  'https://img.freepik.com/premium-photo/confident-businessman-blazer-with-sunglasses-studio-corporate-fashion-clothes-pride-employee-eyewear-work-with-pose-professional-style-classy-outfit-by-white-background_590464-487371.jpg?semt=ais_hybrid&w=740&q=80',
  'https://img.freepik.com/free-photo/young-handsome-hipster-man-standing_285396-1515.jpg',
  'https://www.pngall.com/wp-content/uploads/5/Fashion-Model-Man-PNG-Image.png',
  'https://www.pngall.com/wp-content/uploads/5/Cool-Model-Man-PNG-Images.png',
  'https://www.pngmart.com/files/1/Mens-Fashion-PNG-Transparent-Image.png',
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="group px-4 relative">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((item, index) => (
          <img
            className="card-media object-top"
            src={item}
            alt=""
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`,
            }}
          />
        ))}

        {isHovered && (
          <div className="indicator flex flex-col items-center space-y-2">
            <div className="flex gap-3">
              <Button variant="contained" color="secondary">
                <Favorite sx={{ color: teal[500] }} />
              </Button>
              <Button variant="contained" color="secondary">
                <ModeComment sx={{ color: teal[500] }} />
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
        <div className="name">
          <h1>Niky</h1>
          <p>Blue Shirt</p>
        </div>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800">$400</span>
          <span className="thin-line-through text-gray-400">$999</span>
          <span className="text-primary-color font-semibold">60%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
