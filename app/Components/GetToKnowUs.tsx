"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js for client-side navigation
import Image from "next/image";
import knowLady from "../../public/images/Ellipse 7.png.png"


const GetToKnowUs: React.FC = () => {
  return (
    <div>
      <div>
        <div className="px-6 py-10 grid grid-cols-1 text-center gap-10 md:px-20 py-5 md:grid-cols-2 md:gap-0 md:items-center md:text-left lg:px-20">
          <center>
          <div className="">
         
          <h1 className="text-3xl text-blue-400 font-bold mb-3 md:hidden">
              Get To Know Us
            </h1>
            </div>
            <Image
              src={knowLady} // Path to your image
              className="sm:px-3 "
              alt="hero-img" // Alt text for the image
              // width={350}
              // height={300}
            />
          </center>
          <div>
            <h1 className="hidden md:block text-3xl text-blue-400 font-bold ">
              Get To Know Us
            </h1>
            <p className="custom-gray text-sm mt-1 text-left">
              EduAid Solutions is a team of passionate educators, researchers,
              and writers committed to helping students succeed in their
              academic endeavors. With years of experience in academia and a
              deep understanding of student needs, we&apos;re here to provide
              personalized support and guidance every step of way.At EduAid
              Solutions, our mission is to empower students to excel
              academically by providing affordable and reliable assistance with
              their project research and coursework. We understand the
              challenges students face, and we&apos;re dedicated to supporting them
              in achieving their academic goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetToKnowUs;
