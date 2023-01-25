import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function gallery() {
  const [toshow, setToshow] = React.useState("Gallery");
  return (
    <>
      <Head>
        <title>Orto | Gallery </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative  h-[450px] w-full flex items-center justify-center  ">
          <Image src="/gallerybg.png" alt="aboutus" fill />
          <h1 className="font-century absolute mt-2 font-[700] text-[36px] text-white">
            {toshow}
          </h1>
        </div>
        <div className="py-[50px] px-10 w-full overflow-scroll no-scrollbar lg:px-[180px] flex items-center justify-center space-x-5">
          <button
            onClick={() => setToshow("Gallery")}
            className={`${
              toshow == "Gallery"
                ? "bg-primary text-white border-primary"
                : "  hover:bg-primary hover:text-white border-black text-secondary hover:border-primary"
            } border px-5 py-3  font-century rounded-[18px]   font-[400]  text-[16px] `}
          >
            All
          </button>

          <button
            onClick={() => setToshow("Photo Gallery")}
            className={`${
              toshow == "Photo Gallery"
                ? "bg-primary text-white border-primary"
                : "  hover:bg-primary hover:text-white border-black text-secondary hover:border-primary"
            } border px-5 py-3  font-century rounded-[18px]   font-[400]  text-[16px] `}
          >
            Photo Gallery
          </button>

          <button
            onClick={() => setToshow("Video Gallery")}
            className={`${
              toshow == "Video Gallery"
                ? "bg-primary text-white border-primary"
                : "  hover:bg-primary hover:text-white border-black text-secondary hover:border-primary"
            } border px-5 py-3  font-century rounded-[18px]   font-[400]  text-[16px] `}
          >
            Video Gallery
          </button>
        </div>
        {/* gallery */}
        <div className=" lg:px-[100px]  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[10px] ">
          <div className="relative object-contain w-full h-[200px] ">
            <Image src="/contactbg.png" alt="img" fill />
          </div>
          <div className="relative md:row-span-2 h-full object-contain w-full  ">
            <Image src="/menubg.png" alt="img" fill />
          </div>
          <div className="relative object-contain w-full h-[200px] ">
            <Image src="/contactbg.png" alt="img" fill />
          </div>
          <div className="relative md:row-span-2 object-contain w-full h-full ">
            <Image src="/contactbg.png" alt="img" fill />
          </div>
          <div className="relative object-contain w-full h-[200px] ">
            <Image src="/contactbg.png" alt="img" fill />
          </div>
          <div className="relative object-contain w-full h-[200px] ">
            <Image src="/contactbg.png" alt="img" fill />
          </div>
          <div className="relative md:row-span-2 object-contain w-full h-full ">
            <Image src="/contactbg.png" alt="img" fill />
          </div>
        </div>
      </section>
    </>
  );
}

export default gallery;
