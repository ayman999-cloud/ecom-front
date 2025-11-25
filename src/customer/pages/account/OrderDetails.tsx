import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';
import { Payment } from '@mui/icons-material';

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/Go_through_front.jpg"
          alt=""
          className="w-[100px]"
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Bz Order Details</h1>
          <p>Men Hoodies for sport and outdoor</p>
          <p>
            <strong>Size: </strong>M
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/5/create`)}>
            Write Review
          </Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus="SHIPPED" />
      </section>
      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>Bz House</p>
            <Divider flexItem orientation="vertical" />
            <p>07 61 93 54 49</p>
          </div>

          <p>95 Rue Cambronne, 75015, Paris</p>
        </div>
      </div>

      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You Saved{' '}
              <span className="text-green-500 font-medium text-xs">$1.22 </span>
              on this item
            </p>
          </div>
          <p className="font-medium">$2.55</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payment />
            <p>Pay On Delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold By:</strong>Bz Ecomm
          </p>
        </div>
        <div className="p-10">
          <Button
            disabled={false}
            color="error"
            sx={{ py: '0.7rem' }}
            className=""
            variant="outlined"
            fullWidth
          >
            CANCEL ORDER
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
