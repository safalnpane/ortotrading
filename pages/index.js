import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Carousel from "../components/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

import desertsbg from "../public/cannoli_preview.png";
import pastabg from "../public/rigatoni_norma.png";
import pasta from "../public/gamberi.png";
import homemade_porchetta from "../public/homemade_porchetta.png";
import panini from "../public/sicillian_boss.png";
import primi from "../public/antipasto.png"
import salad from "../public/tomato.png"
import ortobg from "../public/outside.png";
import Link from "next/link";

import FoodMenu from "../components/FoodMenu";

import Testimonials from "../components/Testimonials";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Head>
        <title>Orto | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <section>
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            speed={2000}
            loop={true}
          >
            <SwiperSlide>
              <div className=" h-auto w-full xl:bg-white   sm:pl-[25px]   lg:pl-[100px]">
                <Carousel
                  img={pasta}
                  text1="Home Is Where"
                  text2="The Pasta Is"
                  alt="pasta"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:bg-white h-auto   w-full sm:pl-[25px] lg:pl-[100px]">
                <Carousel
                  img={homemade_porchetta}
                  text1="Home made Porchetta"
                  text2={"come and  \"pig\" out."}
                  alt="pizza"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:bg-white h-auto  w-full sm:pl-[25px] lg:pl-[100px]">
                <Carousel
                  img={panini}
                  text1="All You Need Is Love And"
                  text2="A Tasty Sandwich"
                  alt="panini"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* about us */}
        <section className="lg:h-[550px] w-full font-century flex flex-col lg:flex-row mt-[50px] md:mt-[100px] mx-auto item-center  md:px-[100px]">
          <div className="lg:w-[630px] w-full bg-primary flex flex-col justify-center p-10 text-center space-y-[25px]">
            <h1 className="text-secondary font-[400] text-[26px] leading-[32px]">
              ABOUT US
            </h1>
            <div className=" flex flex-col">
              <div>
                <h1 className="font-[700] text-[36px] leading-[44px]">ORTO</h1>
                <h1 className="font-[700] text-[36px] leading-[44px] ">
                  PASTA-PANINI BAR
                </h1>
              </div>
              <div className="w-[5px] h-[50px] bg-black mx-auto mt-[-1rem] rotate-90"></div>
            </div>
            <div className="font-century text-secondary">
              <p className="font-[400] text-[20px]  leading-[24px] ">
                We are the Italian based restaurant. Pasta and
              </p>
              <p className="font-[400] text-[20px]  leading-[24px] ">
                Panini are our special items. These are things
              </p>
              <p className="font-[400] text-[20px]  leading-[24px] ">
                you eat that you find yourself running out each
              </p>
              <p className="font-[400] text-[20px]  leading-[24px] ">
                week to have it again.
              </p>
            </div>
            <Link href="/about">
              <button className="font-century border w-[10rem] mx-auto border-black rounded-xl hover:border-white p-3 text-secondary font-[400] text-[20px] hover:bg-white hover:shadow-2xl hover:text-secondary">
                {" "}
                Read More
              </button>
            </Link>
          </div>
          <div className="lg:h-full h-[550px] w-full lg:w-[610px] relative object-cover xl:object-contain">
            <Image src={ortobg} alt="orto" fill />
          </div>
        </section>
        {/* menu */}

        <section className=" font-century flex flex-col justify-center space-y-[25px] py-[100px]">
          <h1 className="text-primary text-[36px] font-[700] leading-[44px] text-center ">
            Our Menu
          </h1>
          <div className="flex flex-wrap items-center justify-center w-full  space-y-[20px]">
            <Link href="/menu/pasta">
              <FoodMenu background={pastabg} name="Pasta" />
            </Link>
            <Link href="/menu/panini">
              <FoodMenu background={panini} name="Panini" />
            </Link>
            <Link href="/menu/insalata">
              <FoodMenu background={salad} name="Insalata" />
            </Link>
            <Link href="/menu/primi">
              <FoodMenu background={primi} name="Primi" />
            </Link>
            <Link href="/menu/deserts">
              <FoodMenu background={desertsbg} name="Deserts" />
            </Link>
          </div>
        </section>

        {/* testimonials
        <section className="  xl:px-[160px] py-[50px] font-century flex flex-col justify-center space-y-[50px] mb-[50px] ">
          <h1 className="text-[36px] font-[700] leading-[44px] text-center">
            What Our Customers Say About Us
          </h1>
          <div className="px-6 lg:px-[25px]  w-full  justify-between items-center flex flex-col gap-y-10 lg:space-x-20 lg:flex-row h-full ">
            <Testimonials fullName="sijan" />
            <Testimonials fullName="sijan" />
            <Testimonials fullName="sijan" />
          </div>
        </section> */}
        {/* newsletter */}
        {/* <section className="md:px-[100px] ">
          <div className=" bg-[#EBEBEB] rounded-[20px] px-4  flex flex-col gap-y-[25px] text-center font-century py-[50px]">
            <div className="flex flex-col ">
              <h1 className="font-[700] text-[36px] mb-[15px]">Subscribe</h1>
              <div className="w-[100px] h-[3px] bg-black mx-auto"></div>
            </div>
            <div>
              <p className="max-w-xl font-[400] text-[18px] mx-auto">
                Sign up for our newsletter and be the first to know about
                exclusive promotions,new menu items, and upcoming events at our
                restaurant!
              </p>
            </div>
            <div className="flex flex-col gap-y-4 sm:flex-row items-center w-full justify-between max-w-xl mx-auto space-x-[10px]">
              <input
                type="email"
                className="flex-1 h-[60px] p-5 w-full sm:w-auto  outline-none text-[#7B7E86] placeholder:text-[#7B7E86]"
                placeholder="Enter Your Email Address"
              />
              <button className="bg-black text-primary hover:bg-white h-[60px] px-6 py-3 ">
                Subscribe{" "}
              </button>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
