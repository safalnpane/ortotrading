import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../public/ortoLogo.png";

function Footer() {
  return (
    <footer className="bg-[#98D1C9]  mt-[100px] bg-opacity-25 px-2 sm:px-[50px] md:px-[100px] grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 md:gird md:grid-cols-3 lg:grid lg:grid-cols-4  w-full space-y-5 sm:space-y-20 sm:space-x-20 py-[100px] text-center sm:text-start">
      <div className="space-y-[70px] mx-auto sm:mx-0">
        <div className="space-y-[25px] ">
          <div className=" h-[70px] w-[70px] object-contain relative mx-auto">
            <Image src={logo} alt="logo" fill />
          </div>
          <h3 className="font-[400] text-[16px] w-[216px]">
            The Perfect Restaurant For Pasta-Panini{" "}
          </h3>
        </div>
        <div className="space-y-[20px] flex-col  w-full  ">
          {/* logo */}
          <div className="flex items-center w-full justify-start flex-initial sm:-ml-5   ">
            <SocialIcon
              url="https://facebook.com/"
              bgColor="transparent"
              fgColor="black"
              style={{
                height: "3rem",
                width: "3rem",
              }}
            />
            <SocialIcon
              url="https://instagram.com/"
              bgColor="transparent"
              fgColor="black"
              style={{
                height: "3rem",
                width: "3rem",
              }}
            />
            <SocialIcon
              url="https://twitter.com/"
              bgColor="transparent"
              fgColor="black"
              style={{
                height: "3rem",
                width: "3rem",
              }}
            />
            <SocialIcon
              url="https://youtube.com/"
              bgColor="transparent"
              fgColor="black"
              style={{
                height: "3rem",
                width: "3rem",
              }}
            />
          </div>
          {/* contact us  */}
          <div>
            <button className="font-century border w-[10rem] mx-auto border-black rounded-xl hover:border-white p-3 text-secondary font-[400] text-[20px] hover:bg-white hover:shadow-2xl hover:text-secondary">
              {" "}
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[22px] ">
        <h1 className="font-[700] font-century text-[22px] leading-[27px]">
          Quick Links
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <li>Home</li>
          <li>About Us</li>
          <li>Gallery</li>
          <li>Book A Table</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-[22px] ">
        <h1 className="font-[700] font-century text-[22px] leading-[27px]">
          Menu
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <li>Pasta</li>
          <li>Panini</li>
          <li>Fish</li>
          <li>Burgers</li>
          <li>Drinks</li>
          <li>Appitizers</li>
          <li>Steaks</li>
          <li>Desserts</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-[22px] ">
        <h1 className="font-[700] font-century text-[22px] leading-[27px]">
          Join Our Team
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <li>Main Chef</li>
          <li>Waiter</li>
          <li>Reception</li>
        </ul>
      </div>
      <div></div>
      <div className="flex flex-col gap-y-[22px] ">
        <h1 className="font-[700] font-century text-[22px] leading-[27px]">
          Location
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <li>18-street China town</li>
          <li>Ireland-southeast</li>
          <li>England</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
