import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../public/ortoLogo.png";

function Navbar() {
  const router = useRouter();
  const [show, setShow] = React.useState(false);

  return (
    <nav
      className={`${
        router.pathname == "/"
          ? "bg-white text-black sticky top-0 z-50"
          : "bg-black absolute left-0 right-0 top-0 bg-opacity-10 text-white z-50"
      }  flex items-center justify-between px-2 md:px-[90px]   py-5 h-[50px] md:h-[100px] font-century `}
    >
      <Link href="/">
        <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px] object-contain">
          <Image src={logo} alt="logo" fill />
        </div>
      </Link>
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

          <Link href="/menu/pizza">
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
      <div
        className="lg:hidden mx-2 cursor-pointer"
        onClick={() => setShow(!show)}
      >
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
      {show ? (
        <div
          className={` ${
            router.pathname == "/"
              ? "bg-white text-black bg-opacity-50"
              : "bg-black  bg-opacity-30 text-white "
          } absolute top-20 h-[400px]   w-[200px] right-0 shadow-2xl px-5 py-[50px] lg:hidden transition-all ease-in-out`}
        >
          <ul className="text-center font-[500] text-[20px] font-century ">
            <Link href="/">
              <li
                className="cursor-pointer py-3 border-b-2 border-primary"
                onClick={() => setShow(false)}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className="cursor-pointer py-3 border-b-2 border-primary"
                onClick={() => setShow(false)}
              >
                About
              </li>
            </Link>
            <Link href="/menu/pizza">
              <li
                className="cursor-pointer py-3 border-b-2 border-primary"
                onClick={() => setShow(false)}
              >
                Menu
              </li>
            </Link>
            <Link href="/gallery">
              <li
                className="cursor-pointer py-3 border-b-2 border-primary"
                onClick={() => setShow(false)}
              >
                Gallery
              </li>
            </Link>
            <Link href="/contactus">
              <li
                className="cursor-pointer py-3 border-b-2 border-primary"
                onClick={() => setShow(false)}
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
