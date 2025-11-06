import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Divider } from '@mui/material';
import {
  LocalShipping,
  Shield,
  Wallet,
  WorkspacePremium,
} from '@mui/icons-material';

const ProductDetails = () => {
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://cdn.shopify.com/s/files/1/0708/2334/6451/files/20250716_1326_Traditional_Moroccan_Djellaba_remix_01k09k3fchf729xahqrr51661r.png"
                alt="Morrocan style"
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://cdn.shopify.com/s/files/1/0708/2334/6451/files/20250716_1326_Traditional_Moroccan_Djellaba_remix_01k09k3fchf729xahqrr51661r.png"
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
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
