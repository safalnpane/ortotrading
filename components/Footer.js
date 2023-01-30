import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../public/ortoLogo.png";

function Footer() {
  return (
    <footer className="bg-[#98D1C9]  mt-[100px] bg-opacity-25 px-2 sm:px-[50px] md:px-[100px] justify-items-stretch xl:flex xl:items-start xl:justify-center py-[100px] grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-y-10 md:grid md:grid-cols-3 md:gap-y-10 mx-auto  ">
      <div className="space-y-[70px] text-center ">
        <div className="space-y-[25px] ">
          <div className=" h-[70px] w-[70px] object-contain relative mx-auto ">
            <Image src={logo} alt="logo" fill />
          </div>
          <h3 className="font-[400] text-[16px] w-full">
            The Perfect Restaurant For Pasta-Panini{" "}
          </h3>
        </div>
        <div className="space-y-[20px] flex-col  w-full  ">
          {/* logo */}
          <div className="flex items-center w-full justify-center flex-initial  mx-auto   ">
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
          <div className="mx-auto">
            <Link href="/contactus">
              <button className="font-century border w-[10rem] mx-auto border-black rounded-xl hover:border-white p-3 text-secondary font-[400] text-[20px] hover:bg-white hover:shadow-2xl hover:text-secondary">
                {" "}
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[22px] w-full text-center">
        <h1 className="font-[700] font-century text-[22px] leading-[27px]">
          Quick Links
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About Us</li>
          </Link>
          <Link href="/gallery">
            <li>Gallery</li>
          </Link>
          <li>Book A Table</li>
          <li>Services</li>
          <Link href="/contactus">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-y-[22px] w-full text-center">
        <h1 className="font-[700] font-century text-[22px] leading-[27px]">
          Menu
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <Link href="/menu/pasta">
            <li>Pasta</li>
          </Link>
          <Link href="/menu/panini">
            <li>Panini</li>
          </Link>
          <Link href="/menu/insalata">
            <li>Insalata</li>
          </Link>
          <Link href="/menu/primi">
            <li>Primi</li>
          </Link>
          <Link href="/menu/deserts">
            <li>Desserts</li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-y-[22px] w-full text-center">
        <h1 className="font-[700] font-century text-[22px] leading-[27px] ">
          Join Our Team
        </h1>
        <ul className="flex flex-col gap-y-[22px] font-[400] text-[16px] leading-[20px] text-secondary">
          <li>Main Chef</li>
          <li>Waiter</li>
          <li>Reception</li>
        </ul>
      </div>
      <div></div>
      <div className="flex flex-col gap-y-[22px] w-full text-center">
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
