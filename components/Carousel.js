import Image from "next/image";
import React from "react";

function Carousel({ img, text1, text2, alt }) {
  return (
    <div className="flex flex-row items-center py-[25px] md:py-[50px]  lg:h-[600px]  justify-between w-full font-century">
      {/* words */}
      <div className="px-2 sm:px-[25px] w-full flex-1 md:flex-1 lg:flex-2 flex-col space-y-[10px]  sm:space-y-[15px] md:space-y-[20px]   z-10 xl:z-0 ">
        <div className="flex space-x-[10px]  sm:space-x-[16px]">
          <div className="bg-primary w-[5px] rounded-[2px] "></div>
          <div className=" flex-col   md:space-y-[15px]">
            <div className="flex flex-col py-5 sm:gap-y-1 md:gap-y-5">
              <h1 className=" font-[700]  flex-wrap text-[20px]  md:text-[36px] gap-y-2 md:leading-[35px] lg:leading-[24px] leading-[24px] text-black">
                {text1}
              </h1>
              <h1 className="font-[700] text-[20px]   md:text-[36px] md:leading-[35px] lg:leading-[24px] leading-[24px] text-black">
                {text2}{" "}
              </h1>
            </div>
            <h2 className="font-[400] text-[16px] md:text-[24px]  leading-[24px] text-primary">
              Book Your Table Now
            </h2>
          </div>
        </div>

        {/* button */}
        <div className="flex space-x-[10px] sm:space-x-[16px]">
          <div className="w-[5px] rounded-[2px] h-[86.42px] bg-primary "></div>
          <div className="flex items-center  space-x-5">
            <button className="sm:px-[30px] px-[5px] py-[8px] sm:py-[15px] bg-primary text-white rounded-[18px] font-[400] text-[12px] md:text-[16px] xl:text-[20px] hover:bg-white hover:shadow-xl hover:text-primary">
              View Menu
            </button>
            <button className="sm:px-[30px] px-[10px] py-[10px] sm:py-[15px] bg-primary text-white rounded-[18px] font-[400] text-[12px] md:text-[16px] xl:text-[20px] hover:bg-white hover:shadow-xl hover:text-primary">
              Book A Table
            </button>
          </div>
        </div>
      </div>

      {/* picture */}

      <div
        className={`relative flex-0.5  sm:flex-0.5  object-contain ${
          alt === "panini"
            ? "xl:w-[650px] w-[150px] sm:w-[350px] "
            : "xl:w-[700px] w-[150px] sm:w-[400px]"
        } h-[182px] md:h-[400px]  lg:h-[500px]   -z-10 xl:z-0 `}
      >
        <Image src={img} alt={alt} fill priority />
      </div>
    </div>
  );
}

export default Carousel;
