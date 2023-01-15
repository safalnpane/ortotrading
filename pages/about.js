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
        <div className="relative  h-[450px] w-full flex items-center justify-center  ">
          <Image src={bg} alt="aboutus" fill />
          <h1 className="font-century absolute  font-[700] text-[36px] text-white">
            ABOUT US
          </h1>
        </div>
        <div className=" flex items-center p-[100px] w-full justify-between space-x-10">
          <div className="flex flex-col space-y-[25px] flex-1 mx-auto">
            <div className="text-center">
              <div className="mb-[10px]">
                <h1 className="font-[700] text-[32px] font-century leading-[40px]">
                  Welcome To{" "}
                </h1>
                <h1 className="font-[700] text-[32px] font-century leading-[40px]">
                  {" "}
                  Orto Pasta-Panin Bar
                </h1>
              </div>
              <div className="h-[5px] bg-primary  w-[50px] mx-auto"></div>
            </div>
            <div className="font-[400] text-[20px] text-secondary text-center">
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
          <div className="relative object-contain h-[500px] w-[600px] flex-1">
            <Image src="/ortobg.png" alt="ortobg" fill />
          </div>
        </div>
        <div className=" flex items-center px-[100px] py-[175px] w-full justify-between space-x-10">
          <div className="relative object-contain h-[400px] w-[600px] flex-1">
            <Image src="/ortobg.png" alt="ortobg" fill />
          </div>
          <div className="flex flex-col space-y-[25px] flex-1">
            <div className="text-center">
              <div className="mb-[10px]">
                <h1 className="font-[700] text-[32px] font-century leading-[40px]">
                  Why Us
                </h1>
              </div>
              <div className="h-[5px] bg-primary  w-[50px] mx-auto"></div>
            </div>
            <div className="font-[400] text-[20px] text-secondary text-center">
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
        <div className="bg-[#F2F2F2] h-[365px] w-full mb-[100px] px-[100px] flex items-center justify-between ">
          <div className="flex flex-col gap-y-[25px]">
            <h1 className="font-[700] text-[26px] font-century "> Our Chef</h1>
            <h4 className="max-w-2xl font-[400] text-[18px] text-secondary font-century leading-[22px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incidition ullam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incidition ullamco laboris
              nisi ut aliquip ex ea commodo condor consectetur adipiscing elit.
            </h4>
            <Link href="/menu">
              <button className="rounded-[18px] w-[180px] font-century  h-[50px] px-5 py-3 bg-primary text-white hover:bg-white hover:text-primary hover:shadow-xl ">
                View Our Menu
              </button>
            </Link>
          </div>
          <div className="h-[365px] w-[356px] relative object-contain">
            <Image src="/chef.png" alt="chef" fill />
          </div>
        </div>
      </section>
    </>
  );
}

export default aboutUs;
