import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from '@mui/icons-material';
import { useState } from 'react';
import SimilarProducts from './SimilarProducts';
import ReviewCard from '../review/ReviewCard';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[
              'https://ae01.alicdn.com/kf/Sa1d923ede78b45ad98b2da114670f8beP.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzK6ICdEn0cKzaUruOywHRwsqpDKRTXLNWWrZNOw9vwYgdkbJUZ5kBXXnsejc4HqMh8Pk&usqp=CAU',
              'https://ae01.alicdn.com/kf/Sd5b330c7bee14ad787fe454f7ea5beb6X.jpg',
              'https://ae01.alicdn.com/kf/S0693dd00d2f546b3bd851c2c3063bf3dE.jpg',
              'https://ae01.alicdn.com/kf/S0693dd00d2f546b3bd851c2c3063bf3dE.jpg',
            ].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt="Morrocan style"
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://ae-pic-a1.aliexpress-media.com/kf/Sf320f9f52559498897f95530fbbe1461t.jpg"
              alt="Morrocan style"
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">Bz Clothing</h1>
          <p className="text gray-500 font-semibold">
            Female Moroccan Product style Djellaba
          </p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: '17px' }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span className="">50 ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">$400</span>
              <span className="line-through text-gray-400">$999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm">
              Inclusive of all taxes. Free Shipping above 1500$
            </p>
          </div>
          <div className="mt-7 space-y-3 ">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p className=""> Authentic & Quality Assured</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p className=""> 100% money back guarantee</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p className=""> Free Shipping & Returns</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p className=""> Pay On Delivery Might Be Available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1 className="">QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: '1rem' }}
            >
              Add to Bag
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: '1rem' }}
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus atque eius possimus, esse modi eaque, cum aliquid
              dignissimos cumque id alias iste, placeat perspiciatis perferendis
              voluptates quibusdam rerum? Delectus, quasi.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5">
          <SimilarProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
