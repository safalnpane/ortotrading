import Head from "next/head";
import Image from "next/image";
import React from "react";

function Gallery() {
  const [toshow, setToshow] = React.useState("Gallery");
  return (
    <>
      <Head>
        <title>Orto | Gallery </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative h-[200px] md:h-[450px] w-full flex items-center justify-center  ">
          <Image src="/gallerybg.png" alt="aboutus" fill />
          <h1 className="font-century absolute mt-2 font-[700] text-[24px] md:text-[36px] text-white">
            {toshow}
          </h1>
        </div>
        <div className="py-[50px] px-[25px] w-full overflow-scroll no-scrollbar lg:px-[180px] flex items-center justify-center space-x-5">
          <button
            onClick={() => setToshow("Gallery")}
            className={`${
              toshow == "Gallery"
                ? "bg-primary text-white border-primary"
                : "  hover:bg-primary hover:text-white border-black text-secondary hover:border-primary"
            } border px-5 py-3  font-century rounded-[18px]   font-[400]   text-[14px] md:text-[16px] `}
          >
            All
          </button>

          <button
            onClick={() => setToshow("Photo Gallery")}
            className={`${
              toshow == "Photo Gallery"
                ? "bg-primary text-white border-primary"
                : "  hover:bg-primary hover:text-white border-black text-secondary hover:border-primary"
            } border px-2 md:px-5 py-3  font-century rounded-[18px]   font-[400]   text-[14px] md:text-[16px] `}
          >
            Photo Gallery
          </button>

          <button
            onClick={() => setToshow("Video Gallery")}
            className={`${
              toshow == "Video Gallery"
                ? "bg-primary text-white border-primary"
                : "  hover:bg-primary hover:text-white border-black text-secondary hover:border-primary"
            } border px-2 md:px-5 py-3  font-century rounded-[18px]   font-[400]  text-[16px] `}
          >
            Video Gallery
          </button>
        </div>
        {/* gallery */}
        <div className="h-auto md:px-[100px]  grid grid-cols-3 grid-flow-rows gap-[5px] grid-flow-dense auto-rows-auto   ">
          <div className="object-cover relative   w-full  align-middle h-full flex items-center justify-center">
            <Image src="/img1.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full row-span-2  align-middle h-full flex items-center justify-center">
            <Image src="/img5.png" alt="" fill />
          </div>
          <div className="object-cover relative  w-full h-[100px]  align-middle lg:h-[200px] flex items-center justify-center">
            <Image src="/aboutusbg.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full h-[100px] align-middle lg:h-full flex items-center justify-center">
            <Image src="/img3.png" alt="" fill />
          </div>
          <div className="object-cover relative  w-full h-[100px] align-middle lg:h-full flex items-center justify-center">
            <Image src="/img2.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full h-[100px]  align-middle lg:h-full flex items-center justify-center">
            <Image src="/burgersbg.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full h-[100px] align-middle lg:h-[200px] flex items-center justify-center">
            <Image src="/img4.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full h-full row-span-2 align-middle flex items-center justify-center">
            <Image src="/img3.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full h-[100px]  align-middle lg:h-[200px] flex items-center justify-center">
            <Image src="/img2.png" alt="" fill />
          </div>
          <div className="object-cover relative w-full h-[100px]  align-middle lg:h-[200px] flex items-center justify-center">
            <Image src="/burgersbg.png" alt="" fill />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
