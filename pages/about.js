import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "../public/aboutusbg.png";

function aboutUs() {
  return (
    <>
      <Head>
        <title>Orto | About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative h-[200px]  md:h-[450px] w-full flex items-center justify-center  ">
          <Image src={bg} alt="aboutus" fill />
          <h1 className="font-century absolute  font-[700] text-[24px] md:text-[30px] sm:text-[36px] text-white">
            ABOUT US
          </h1>
        </div>
        <div className=" flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row items-center py-[50px] md:py-[100px] px-[20px] sm:px-[100px] w-full lg:justify-between lg:space-x-10">
          <div className="flex flex-col space-y-[25px] lg:flex-1 lg:mx-auto w-full ">
            <div className="lg:text-center">
              <div className="mb-[10px] text-center">
                <h1 className="font-[700] text-[25px] sm:text-[32px] font-century leading-[40px]">
                  Welcome To{" "}
                </h1>
                <h1 className="font-[700] text-[25px] sm:text-[32px] font-century leading-[40px]">
                  {" "}
                  Orto Pasta-Panin Bar
                </h1>
              </div>
              <div className="h-[5px] bg-primary  w-[50px] mx-auto"></div>
            </div>
            <div className="font-[400] text-[18px] sm:text-[20px] text-secondary text-center">
              <p className="max-w-md mx-auto leading-[24.5px] font-century">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
                commodo condor consectetur adipiscing elit, sed do eiusmod
                tempor incidition ullam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incidition ullamco
                laboris nisi ut aliquip ex ea commodo condor consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
          <div className="relative object-contain  w-full h-[400px] lg:w-[600px] lg:flex-1">
            <Image src="https://orto-media.s3.ap-southeast-2.amazonaws.com/ortobg.png" alt="ortobg" fill />
          </div>
        </div>
        <div className=" flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center px-[20px] sm:px-[100px] py-[50px] md:py-[100px] w-full lg:justify-between lg:space-x-10">
          <div className="relative object-contain h-[400px] w-full lg:w-[600px] lg:flex-1">
            <Image src="https://orto-media.s3.ap-southeast-2.amazonaws.com/ortobg.png" alt="ortobg" fill />
          </div>
          <div className="flex flex-col space-y-[25px] lg:flex-1">
            <div className="text-center">
              <div className="mb-[10px]">
                <h1 className="font-[700] text-[25px] sm:text-[32px] font-century leading-[40px]">
                  Why Us
                </h1>
              </div>
              <div className="h-[5px] bg-primary  w-[50px] mx-auto"></div>
            </div>
            <div className="font-[400] text-[18px] lg:text-[20px] text-secondary text-center">
              <p className="max-w-md leading-[24.5px] mx-auto font-century">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
                commodo condor consectetur adipiscing elit, sed do eiusmod
                tempor incidition ullam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incidition ullamco
                laboris nisi ut aliquip ex ea commodo condor consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F2F2]  gap-y-10 lg:gap-y-0 lg:flex-row lg:h-[365px] w-full mb-[100px] px-[20px] py-[50px] lg:py-0 sm:px-[100px] flex flex-col items-center lg:justify-between ">
          <div className="flex flex-col gap-y-[25px] mx-auto lg:mx-0">
            <h1 className="font-[700] text-[26px] font-century text-center lg:text-left">
              {" "}
              Our Chef
            </h1>
            <h4 className="max-w-2xl font-[400] text-[18px] text-secondary font-century text-center lg:text-left leading-[22px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incidition ullam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incidition ullamco laboris
              nisi ut aliquip ex ea commodo condor consectetur adipiscing elit.
            </h4>
            <Link href="/menu">
              <button className=" mx-auto lg:mx-0 w-full rounded-[18px] lg:w-[180px] font-century  h-[50px] px-5 py-3 bg-primary text-white hover:bg-white hover:text-primary hover:shadow-xl ">
                View Our Menu
              </button>
            </Link>
          </div>
          <div className="h-[365px] w-full sm:w-[356px] relative object-contain">
            <Image src="https://orto-media.s3.ap-southeast-2.amazonaws.com/chef.png" alt="chef" fill />
          </div>
        </div>
      </section>
    </>
  );
}

export default aboutUs;
