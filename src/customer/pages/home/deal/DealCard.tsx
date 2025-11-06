const DealCard = () => {
  return (
    <div className="w-[15rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top"
        src="https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048"
        alt="smart watch"
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Smart Watch</p>
        <p className="text-2xl font-bold">20% off</p>
        <p className="text-balance text-lg">shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
