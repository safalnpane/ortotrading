import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function pizza() {
  return (
    <>
      <Head>
        <title>Orto | Menu </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative h-[200px] lg:h-[450px] w-full  flex items-center justify-center object-cover  ">
          <Image src="/pizza2.png" alt="aboutus" fill />
          <h1 className="font-century absolute mt-2 font-[700] text-[24px] md:text-[36px] text-white">
            Insalata
          </h1>
        </div>
        <div className="py-[50px] overflow-y-scroll no-scrollbar space-x-5 px-[20px] lg:px-[180px] w-full justify-between flex items-center lg:justify-around">
          <Link href="/menu/panini">
            <button className="hover:bg-primary   px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px]">
              Panini
            </button>
          </Link>
          <Link href="/menu/pasta">
            <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px] ">
              Pasta
            </button>
          </Link>
          <Link href="/menu/primi">
            <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px]">
              Primi
            </button>
          </Link>
          <Link href="/menu/insalata">
            <button className="hover:bg-primary bg-primary text-white  px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-primary font-[400] text-[14px] md:text-[16px]">
              insalata
            </button>
          </Link>
          <Link href="/menu/deserts">
            <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px]">
              Deserts
            </button>
          </Link>
        </div>
        <div className="lg:px-[100px] mb-[100px] flex items-center justify-center">
          <div className="bg-[#F3F3F3] md:px-[100px] lg:px-[50px] px-[20px] py-[25px] md:py-[50px] w-full border-gradientPrimary bg-opacity-50  max-w-[1240px] font-century ">
            <h1 className="text-center text-primary font-[700] text-[24px] leading-[29px] mb-[7px]">
              Orto
            </h1>
            <h3 className="text-center font-[700] text-[24px] md:text-[36px] leading-[44px]">
              Insalata
            </h3>
            <div className="flex items-center space-x-3 justify-between w-full  mt-[18px]">
              <div className="bg-gradient-to-r  from-white to-primary h-[3px]  w-[220px]"></div>
              <p className="font-[200] text-secondary text-[16px] md:text-[18px] text-center leading-[25px]">
                Available : Monday to Sunday{" "}
                <span className="text-primary">7:30 am</span> to{" "}
                <span className="text-primary">11:00 am</span>
              </p>
              <div className="bg-gradient-to-r from-primary to-white h-[3px]  w-[220px]"></div>
            </div>
            <div className="grid grid-cols-1  lg:grid lg:grid-cols-2  w-full mt-[50px] lg:gap-x-[40px] gap-y-[2rem] ">
              {/* left side */}

              <div className="flex items-start space-x-2">
                <div className="h-[5rem] w-[7rem] relative object-cover">
                  <Image
                    src="/linguini.jpg"
                    alt="menu"
                    fill
                    className="rounded-full "
                  />
                </div>

                <div className="flex flex-col gap-y-[13px] ">
                  <div className="flex items-center  justify-between md:space-x-5">
                    <h1 className="font-[700] text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-1">
                      Steamed greens
                    </h1>
                    <div className="flex items-center w-full space-x-[14px] flex-1">
                      <div className="h-[2px] bg-primary w-full md:w-[12rem] "></div>
                      <p className="text-primary">$10</p>
                    </div>
                  </div>
                  <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                    Sauteed in garlic lemon extra virgin olive oil{" "}
                    <b>(v)(vg)</b>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-[5rem] w-[7rem] relative object-cover">
                  <Image
                    src="/linguini.jpg"
                    alt="menu"
                    fill
                    className="rounded-full "
                  />
                </div>

                <div className="flex flex-col gap-y-[13px] ">
                  <div className="flex items-center  justify-between md:space-x-5">
                    <h1 className="font-[700] text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-1">
                      Rocket parmesan salad
                    </h1>
                    <div className="flex items-center w-full space-x-[14px] flex-1">
                      <div className="h-[2px] bg-primary w-full md:w-[12rem] "></div>
                      <p className="text-primary">$10</p>
                    </div>
                  </div>
                  <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                    Rocket parmesan lemon and extra virgin olive oil <b>(v)</b>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-[5rem] w-[7rem] relative object-cover">
                  <Image
                    src="/linguini.jpg"
                    alt="menu"
                    fill
                    className="rounded-full "
                  />
                </div>

                <div className="flex flex-col gap-y-[13px] ">
                  <div className="flex items-center  justify-between md:space-x-5">
                    <h1 className="font-[700] text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-1">
                      Fresh tomato and basil
                    </h1>
                    <div className="flex items-center w-full space-x-[14px] flex-1">
                      <div className="h-[2px] bg-primary w-full md:w-[12rem] "></div>
                      <p className="text-primary">$10</p>
                    </div>
                  </div>
                  <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                    Fresh tomato, basil, red onion, EVO, lemon juice
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
export default pizza;
