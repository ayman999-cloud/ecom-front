const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://www.ericfavre.com/lifestyle/wp-content/uploads/2020/05/femmes-entrainement.jpg"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://www.fitadium.com/conseils/wp-content/uploads/2020/05/programme-musculation-prise-masse-femme.jpg"
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://d1vm2cqeqrcath.cloudfront.net/_import/blog/articles/2025/06-20_muskelaufbau-als-frau/32660/image-thumb__32660__hero-blog-img/Frau-die-Muskeln-aufbaut.f1b24985.jpg"
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://5livres.fr/wp-content/uploads/2024/03/8-livres-de-reference-pour-debuter-la-musculation-sur-de-bonnes-bases-1000x500.jpg"
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://media.lactualite.com/2022/09/ah_endurancephysique-vfr-1200x675.jpg"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://www.dravelnutrition.fr/img/cms/4-jours-programme-split.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
