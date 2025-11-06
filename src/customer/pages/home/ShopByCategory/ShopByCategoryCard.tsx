import React from 'react';
import './ShopByCategory.css';

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
        <img
          className="group-hover:scale-95 transition-transform transform-duration-700 object-cover rounded-full object-top h-full w-full"
          src="https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg"
          alt="boxing"
        />
      </div>
      <h1>Kitchen & Table</h1>
    </div>
  );
};

export default ShopByCategoryCard;
