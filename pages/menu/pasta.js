import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function pasta() {
  return (
    <>
      <Head>
        <title>Orto | Pasta </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative h-[200px] lg:h-[450px] w-full object-fill flex items-center justify-center  ">
          <Image src="/menubg.png" alt="aboutus" fill />
          <h1 className="font-century absolute mt-2 font-[700] text-[24px] md:text-[36px] text-white">
            PASTA
          </h1>
        </div>
        <div className="py-[50px] overflow-y-scroll no-scrollbar space-x-5 px-[20px] lg:px-[180px] w-full justify-between flex items-center lg:justify-around">
          <Link href="/menu/panini">
            <button className="hover:bg-primary   text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px]">
              Panini
            </button>
          </Link>
          <Link href="/menu/pasta">
            <button className="bg-primary text-white px-5 py-3 hover:text-white font-century rounded-[18px] border-primary border font-[400] text-[14px] md:text-[16px] ">
              Pasta
            </button>
          </Link>
          <Link href="/menu/primi">
            <button className="hover:bg-primary text-secondary  px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px]">
              Primi
            </button>
          </Link>
          <Link href="/menu/insalata">
            <button className="hover:bg-primary text-secondary px-5 py-3 hover:text-white font-century rounded-[18px] hover:border-primary border border-secondary font-[400] text-[14px] md:text-[16px]">
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
              PASTA
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
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/rigatoni_norma.png"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Rigatoni Norma
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$16</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Eggplant, cherry tomato, fresh basil, ricotta cheese{" "}
                  <b>(v)</b>
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/sample_pasta.jpg"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Ravioli spinach ricotta
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$17</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Tomato salsa, roasted capsicum, fresh riotta, touch of cream{" "}
                  <b>(v)</b>
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/rigatoni_salmone.png"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Rigatoni Sallmone
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$18</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Smoked salmon, roasted capsicum, red onion, capers, pink sauce
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/gamberi.png"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Linguini Gamberi
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$19</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  King prawns, cherry tomato, rocket, black olives, capers,
                  chilli, garlic
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/malfade.png"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Malfade chi Sarde
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$17</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Tomato salsa, sardines, anchovies, raisins, panngrattato,
                  pinenuts
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/sample_pasta.jpg"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Mushroom Ragu Linguini
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$16</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  4-hour slow cooked rich mushroom ragu <b>(v)(vg)</b>
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/sample_pasta.jpg"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Pappardelle Beef Bolognese
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$16</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  6-hour slow cooked beef ragu
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/carbonara.png"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Spaghetti Carbonara
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$17</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Guanciale, egg, parmesan, black pepper
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/sample_pasta.jpg"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Porcini Risotto
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$19</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Truffle oil, pecorino cheese, fresh ricotta, basil <b>(v)</b>
                </p>
              </div>
              <div className="flex flex-col gap-y-[10px] ">
                <div className="h-[10rem] w-[15rem] relative object-cover mx-auto">
                  <Image
                    src="/sample_pasta.jpg"
                    alt="menu"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center w-full  justify-between space-x-5 ">
                  <h1 className="font-[700] font-century text-[16px] sm:text-[20px] text-secondary leading-[24px] flex-2">
                    Gnocchi
                  </h1>
                  <div className="flex items-center  space-x-[14px] ">
                    <div className="h-[2px] bg-primary w-10 sm:w-20 flex-1"></div>
                    <p className="text-primary">$17</p>
                  </div>
                </div>
                <p className="font-[400] text-[14px] sm:text-[16px] text-secondary leading-[20px]">
                  Burnt butter and sage, truffled ricotta, parmesan <b>(v)</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default pasta;
