import Image from "next/image";
import React from "react";

function Testimonials({ scale, name, title }) {
  return (
    <section
      className={` ${scale} border-2 border-primary w-[320px] h-[320px] transition duration-300 ease-in-out
     shadow-xl rounded-[12px] space-y-[25px] px-3 py-5 flex-col font-century`}
    >
      {/* head */}
      <div className="flex items-center ">
        <div className="w-[60px] h-[60px] relative rounded-full aspect-[4/3] overflow-hidden objecct-cover">
          <Image
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="man"
            fill
          />
        </div>
        <div className="flex flex-col ml-[12px]">
          <h1 className="font-[700] text-[18px]">{name}</h1>
          <p className="font-[400] text-[12px]">Food Vlogger</p>
        </div>
      </div>
      {/* body section */}
      <div className="flex flex-col text-center space-y-[20px]">
        <h1 className="font-[700] text-[16px]">{title}</h1>
        <p className="font-[400] text-[12px] text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
