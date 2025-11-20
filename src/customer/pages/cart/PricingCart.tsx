import { Divider } from '@mui/material';
import React from 'react';

const PricingCart = () => {
  return (
    <>
      <div className="space-y-3 p-5 ">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>$899</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>$299</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>$29</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Platetform Fee</span>
          <span>Free</span>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center p-5 text-primary-color">
        <span>Total</span>
        <span>$1227</span>
      </div>
    </>
  );
};

export default PricingCart;
