import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../public/ortoLogo.png";

function Navbar() {
  const router = useRouter();

  return (
    <nav
      className={`${
        router.pathname == "/"
          ? "bg-white text-black sticky top-0 z-50"
          : "bg-black  absolute left-0 right-0 top-0 bg-opacity-10 text-white z-50"
      }  flex items-center justify-between px-2 md:px-[90px]   py-5 h-[100px] font-century `}
    >
      <div className="relative h-[100px] w-[100px] object-contain">
        <Image src={logo} alt="logo" fill />
      </div>
      <div>
        <ul className=" hidden font-[400] text-[20px] leading-[25px] lg:inline-flex items-center justify-between space-x-10 ">
          <Link href="/">
            <li
              className={`${
                router.pathname == "/" ? "text-primary" : ""
              } hover:text-primary  cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                router.pathname == "/about" ? "text-primary" : ""
              } hover:text-primary  cursor-pointer`}
            >
              About Us
            </li>
          </Link>

          <Link href={`/menu/${123}`}>
            <li
              className={`${
                router.pathname == "/menu" ? "text-primary" : ""
              } hover:text-primary  cursor-pointer`}
            >
              Menu
            </li>
          </Link>
          <Link href="/gallery">
            <li
              className={`${
                router.pathname == "/gallery" ? "text-primary" : ""
              } hover:text-primary  cursor-pointer`}
            >
              Gallery
            </li>
          </Link>
          <Link href="/contactus">
            <li
              className={`${
                router.pathname == "/contactus" ? "text-primary" : ""
              } hover:text-primary  cursor-pointer`}
            >
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
      <div className="lg:hidden mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
