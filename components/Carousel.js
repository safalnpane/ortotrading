import Image from "next/image";
import React from "react";

function Carousel({ img, text1, text2, alt }) {
  return (
    <div className="flex items-center justify-between w-full font-century">
      {/* words */}
      <div className="px-2 flex-1 flex-col space-y-[20px]">
        <div className="flex space-x-[16px]">
          <div className="bg-primary w-[5px] rounded-[2px] "></div>
          <div className=" flex-col space-y-[15px]">
            <div className="flex flex-col py-5 gap-y-5">
              <h1 className=" font-[700] text-[36px] leading-[24px]">
                {text1}
              </h1>
              <h1 className="font-[700] text-[36px] leading-[24px]">
                {text2}{" "}
              </h1>
            </div>
            <h2 className="font-[400] text-[24px] leading-[24px] text-primary">
              Book Your Table Now
            </h2>
          </div>
        </div>
        {/* button */}
        <div className="flex space-x-[16px]">
          <div className="w-[5px] rounded-[2px] h-[86.42px] bg-primary "></div>
          <div className="flex items-center  space-x-5">
            <button className="px-[30px] py-[15px] bg-primary text-white rounded-[18px] font-[400] text-[20px] hover:bg-white hover:shadow-xl hover:text-primary">
              View Menu
            </button>
            <button className="px-[30px] py-[15px] bg-primary text-white rounded-[18px] font-[400] text-[20px] hover:bg-white hover:shadow-xl hover:text-primary">
              Book A Table
            </button>
          </div>
        </div>
      </div>

      {/* picture */}
      <div
        className={`relative object-contain ${
          alt === "panini" ? "w-[650px]" : "w-[800px]"
        } h-[600px] `}
      >
        <Image src={img} alt={alt} fill priority />
      </div>
    </div>
  );
}

export default Carousel;
