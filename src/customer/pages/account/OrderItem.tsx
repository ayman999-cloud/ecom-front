import { ElectricBolt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { teal } from '@mui/material/colors';

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="">
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div className="">
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p className="">Arriving By Mon, 24 Nov</p>
        </div>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/Go_through_front.jpg"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold ">Hoodies for men </h1>
          <p>Tranquility in full bloom Oversized Hoodie</p>
          <p>
            <strong>Size: </strong>FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
