import { productionHouseList } from "../constant/data";

const ProductionHouse = () => {
  return (
    <div
      className="
        flex gap-3
        sm:gap-4
        md:gap-6
        px-4
        sm:px-6
        md:px-16
        py-4
        overflow-x-auto
        scrollbar-none
      "
    >
      {productionHouseList.map((item, index) => (
        <div
          key={index}
          className="
            relative
            min-w-[140px]
            sm:min-w-[180px]
            md:min-w-[220px]
            rounded-xl
            border border-gray-700
            bg-black
            shadow-lg shadow-gray-900
            cursor-pointer
            transition-transform
            duration-300
            hover:scale-105
            group
          "
        >
          {/* Video Preview */}
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="
              absolute inset-0
              w-full h-full
              object-cover
              rounded-xl
              opacity-0
              group-hover:opacity-60
              transition-opacity
              duration-300
              z-0
            "
          />

          {/* Image */}
          <img
            src={item.image}
            alt="Production House"
            className="
              w-full
              h-full
              object-cover
              rounded-xl
              relative
              z-10
            "
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
