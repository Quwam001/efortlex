"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js for client-side navigation
import logo from "../../public/images/logo (1).png";
import Image from "next/image";
// Define the NavBar component

const NavBar: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
       const show = window.scrollY > 170;
       setIsScrolled(show);
     };
 
     document.addEventListener('scroll', handleScroll);
     return () => {
       document.removeEventListener('scroll', handleScroll);
     };
  }, []);

  return (
    <div>
      <nav
        className={ 
          
          isScrolled
            ? "hidden md:flex md:items-center md:justify-between md:px-20 py-5 bg-white md:fixed left-0 right-0 duration-[300ms]"
            : " hidden md:flex md:items-center md:justify-between md:px-20 py-5 bg-white duration-[300ms]"
        }>
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" />{" "}
        </Link>

        <ul className="flex gap-6 md:items-center md:justify-between">
          <li>
            <Link className="font-bold" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-bold" href="#service">
              Services
            </Link>
          </li>

          <li>
            <Link href="#getStarted">
              <button className="font-light px-8 py-2 rounded font-size-2 font-bold text-white bg-black ">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="px-6 py-8 gap-4 md:hidden">
        <nav className="flex items-center justify-between">
          <Link href="/">
            {" "}
            <Image src={logo} alt="logo" />
          </Link>
          {showNav ? (
            <div
              className="grid gap-1"
              onClick={() => {
                toggleNav();
              }}>
              <div className="h-1 w-5 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
            </div>
          ) : (
            ""
          )}
          {showNav ? (
            ""
          ) : (
            <div
              className="font-bold text-3xl text-white z-10"
              onClick={() => {
                toggleNav();
              }}>
              x
            </div>
          )}
        </nav>

        <ul
          className={
            showNav
              ? "grid gap-6 md:items-center py-4 text-white bg-black px-6 absolute right-0 left-0 top-[-190px] h-1.5/2 duration-[300ms]"
              : "grid gap-6 md:items-center py-10 text-white bg-black px-8 absolute right-0 left-0 top-[-16px]  h-2/2 duration-[300ms]"
          }>
          <li>
            <Link className="font-bold" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-bold" href="#service">
              Services
            </Link>
          </li>
          <li>
            {" "}
            <button className="font-light px-8 py-2 rounded font-size-2 font-bold text-black font-bold bg-white shadow-lg">
              Get Started
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
