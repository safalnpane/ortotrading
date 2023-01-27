import Head from "next/head";
import Image from "next/image";
import React from "react";

function contactus() {
  return (
    <>
      <Head>
        <title>Orto | Contact Us </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <div className="relative h-[200px] md:h-[450px] w-full object-cover aspect-square flex items-center justify-center  ">
          <Image src="/contactbg.png" alt="contactus" fill />
          <h1 className="font-century absolute mt-2 font-[700] text-[24px] md:text-[36px] text-white">
            CONTACT US
          </h1>
        </div>

        <div className="xl:px-[215px] lg:px-[100px] px-[25px] py-[50px] md:py-[100px] flex items-center flex-col gap-y-16 lg:flex-row  w-full lg:justify-between ">
          {/* form */}
          <div className="h-[512px]  max-w-[528px] rounded-[8px] shadow-2xl px-5 lg:px-[55px] flex-1 py-[50px]">
            <h1 className="font-[700] text-[20px] sm:text-[26px] text-primary leading-[31px]">
              Write Us A Message
            </h1>
            <form className="mt-[30px] flex flex-col gap-y-[20px]">
              <div className="flex items-center justify-between space-x-[10px]">
                <div className="flex flex-col gap-y-2">
                  <p className="font-[400] text-[16px] leading-[20px] text-secondary">
                    First Name
                  </p>
                  <input
                    type="text"
                    className="h-[40px] w-full px-[20px] py-[14px] outline-none border rounded-[7px] bg-[#F7F8FF] border-[#C7C7C7] placeholder:font-[400] placeholder:text-[14px]"
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-[400] text-[16px] leading-[20px] text-secondary">
                    Last Name
                  </p>
                  <input
                    type="text"
                    className="h-[40px] w-full px-[20px] py-[14px] outline-none border rounded-[7px] bg-[#F7F8FF] border-[#C7C7C7] placeholder:font-[400] placeholder:text-[14px]"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between space-x-[10px]">
                <div className="flex flex-col gap-y-2">
                  <p className="font-[400] text-[16px] leading-[20px] text-secondary">
                    Email Address
                  </p>
                  <input
                    type="email"
                    className="h-[40px] w-full px-[20px] py-[14px] outline-none border rounded-[7px] bg-[#F7F8FF] border-[#C7C7C7] placeholder:font-[400] placeholder:text-[14px]"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-[400] text-[16px] leading-[20px] outline-none text-secondary">
                    Address
                  </p>
                  <input
                    type="text"
                    className="h-[40px] w-full px-[20px] py-[14px] outline-none border rounded-[7px] bg-[#F7F8FF] border-[#C7C7C7] placeholder:font-[400] placeholder:text-[14px]"
                    placeholder="Enter Your Address"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <p className="font-[400] text-[16px] leading-[20px] text-secondary">
                  Message
                </p>
                <textarea
                  className="h-[100px] w-full px-[20px] py-[14px] outline-none border rounded-[7px] bg-[#F7F8FF] border-[#C7C7C7] placeholder:font-[400] placeholder:text-[14px]"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <button className="bg-primary text-white hover:text-primary h-[40px] w-[97px] px-5  hover:bg-white font-century rounded-[18px] border-primary border  font-[400] hover:shadow-xl  text-[16px] ">
                Send
              </button>
            </form>
          </div>
          {/* location */}
          <div className="flex flex-col gap-y-[50px] px-5 font-century ">
            <div className="flex items-center justify-between space-x-[25px]">
              <div className="md:w-[85px] md:h-[85px] h-[50px] w-[50px] rounded-full flex items-center justify-center hover:text-primary hover:bg-white hover:shadow-2xl hover:cursor-pointer bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:w-10 md:h-10 h-6 w-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-[700] text-[20px] md:text-[26px] text-primary">
                  Address
                </h1>
                <p className="font-[700] text-[16px] md:text-[18px] text-secondary">
                  Sydney,Australia
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-[25px]">
              <div className="md:w-[85px] md:h-[85px] h-[50px] w-[50px] hover:text-primary hover:bg-white hover:shadow-2xl hover:cursor-pointer rounded-full flex items-center justify-center bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:w-10 md:h-10 h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-[700] text-[20px] md:text-[26px] text-primary">
                  Address
                </h1>
                <p className="font-[700] text-[16px] md:text-[18px] text-secondary">
                  Sydney,Australia
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-[25px]">
              <div className="md:w-[85px] md:h-[85px] h-[50px] w-[50px] hover:text-primary hover:bg-white hover:shadow-2xl hover:cursor-pointer  rounded-full flex items-center justify-center bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:w-10 md:h-10 h-6 w-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div>
                <h1 className="font-[700] text-[20px] md:text-[26px] text-primary">
                  Email
                </h1>
                <p className="font-[700] text-[16px] md:text-[18px] text-secondary">
                  info@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div className=" w-full h-[300px] relative object-cover  ">
          <Image src="/map.png" alt="map" fill />
        </div>
        {/* newsletter */}
        <section className="lg:px-[100px]  w-full my-[1rem]  ">
          <div className=" bg-[#EBEBEB] rounded-[20px] px-[25px] flex flex-col gap-y-[25px] text-center font-century py-[50px]">
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
            <div className="flex flex-col gap-y-5 md:flex-row items-center w-full justify-between max-w-xl mx-auto space-x-[10px]">
              <input
                type="email"
                className="flex-1 h-[60px] p-5 w-full outline-none text-[#7B7E86] placeholder:text-[#7B7E86]"
                placeholder="Enter Your Email Address"
              />
              <button className="bg-black text-primary hover:bg-white h-[60px] px-6 py-3 ">
                Subscribe{" "}
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default contactus;
