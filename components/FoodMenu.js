import Image from "next/image";
import React from "react";

function FoodMenu({ background, name }) {
  return (
    <section
      className={` h-[200px] ${
        name == "Drinks" || name == "Steaks" ? "w-[230px]" : "w-[300px]"
      }  relative object-contain mr-[20px]`}
    >
      <Image src={background} alt="background" fill />
      <h1 className=" absolute z-20 right-0 left-0 top-20 bottom-0 flex items-center justify-center text-white font-[700] text-[22px] leading-[24px] font-century">
        {name}
      </h1>
    </section>
  );
}

export default FoodMenu;
