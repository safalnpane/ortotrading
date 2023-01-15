import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function menu() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Orto | Menu </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative  h-[450px] w-full flex items-center justify-center  ">
          <Image src="/menubg.png" alt="aboutus" fill />
          <h1 className="font-century absolute mt-2 font-[700] text-[36px] text-white">
            MENU/ PASTA
          </h1>
        </div>
        <div className="py-[50px] px-[180px] flex items-center justify-around">
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400]  text-[16px] ">
            Pasta
          </button>
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[16px]">
            Fish
          </button>
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[16px]">
            Burgers
          </button>
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[16px]">
            Drinks
          </button>
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[16px]">
            Appitizers
          </button>
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[16px]">
            Steaks
          </button>
          <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[16px]">
            Deserts
          </button>
        </div>
        <div className="px-[100px] mb-[100px]">
          <div className="bg-[#F3F3F3] px-[100px] py-[50px]  border-gradientPrimary bg-opacity-50 w-full font-century ">
            <h1 className="text-center text-primary font-[700] text-[24px] leading-[29px] mb-[7px]">
              Orto
            </h1>
            <h3 className="text-center font-[700] text-[36px] leading-[44px]">
              PASTA
            </h3>
            <div className="flex items-center justify-between w-full  mt-[18px]">
              <div className="bg-gradient-to-r from-white to-primary h-[3px] w-[220px]"></div>
              <p className="font-[200] text-secondary text-[18px] leading-[25px]">
                Available : Monday to Sunday{" "}
                <span className="text-primary">7:30 am</span> to{" "}
                <span className="text-primary">11:00 am</span>
              </p>
              <div className="bg-gradient-to-r from-primary to-white h-[3px] w-[220px]"></div>
            </div>
            <div className=" flex items-start justify-between mt-[5rem] space-x-[40px]">
              {/* left side */}
              <div className="flex flex-col gap-y-[2rem] flex-1">
                <div className="flex flex-col gap-y-[13px]">
                  <div className="flex items-center justify-between space-x-3">
                    <h1 className="font-[700] text-[20px] text-secondary leading-[24px]">
                      Linguini Prawans
                    </h1>
                    <div className="flex items-center space-x-[14px]">
                      <div className="h-[2px] bg-primary w-[12rem] "></div>
                      <p className="text-primary">$20</p>
                    </div>
                  </div>
                  <p className="font-[400] text-[16px] text-secondary leading-[20px]">
                    Rocket, Cherry tomatoes, garlic, chill & Olives
                  </p>
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col gap-y-[2rem] flex-1">
                <div className="flex flex-col gap-y-[13px]">
                  <div className="flex items-center justify-between space-x-3">
                    <h1 className="font-[700] text-[20px] text-secondary leading-[24px]">
                      Tortellini
                    </h1>
                    <div className="flex items-center space-x-[14px]">
                      <div className="h-[2px] bg-primary w-[12rem] "></div>
                      <p className="text-primary">$20</p>
                    </div>
                  </div>
                  <p className="font-[400] text-[16px] text-secondary leading-[20px]">
                    Rocket, Cherry tomatoes, garlic, chill & Olives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default menu;
