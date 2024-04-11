
"use client";
import React from "react";
import olajuwon from "../../public/images/Ellipse 4.png";
import aisha from "../../public/images/Ellipse 4 (1).png";
import moses from "../../public/images/Ellipse 4 (2).png";
import star1 from "../../public/images/Star 1.png";
import star5 from "../../public/images/Star 5.png";
import Image from "next/image";
// In your component or _app.tsx/js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Reviews: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // console.log(window.innerWidth)
  return (
    <div>
      <div className="mt-4 mb-4  px-5 py-10 lg:px-35">
        <center>
          <h1 className="text-blueG text-2xl font-bold">Clients Review</h1>
        </center>

        <div className="hidden md:grid my-7 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-blue-100 p-4 rounded ">
            <div className="flex items-center">
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />

              <Image src={star5} alt="star" className="h-4 w-5" />
            </div>

            <p className="mt-2 mb-6 leading-none">
              <small className="text-sm ">
                Their expertise in the college admissions process was evident
                throughout. They guided me through every step, from choosing the
                right universities to crafting compelling essays and preparing
                for interviews. I particularly appreciated their feedback on my
                essays; their suggestions helped me refine my ideas and present
                myself in the best possible light.
              </small>
            </p>

            <div className="flex items-center gap-2">
              <Image src={olajuwon} alt="review-img" />
              <h4 className="text-blueG font-bold">Olajuwon Adesanya </h4>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded  ">
            <div className="flex items-center">
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />

              <Image src={star5} alt="star" className="h-4 w-5" />
            </div>

            <p className="mt-2 mb-6 leading-none">
              <small className="text-sm ">
                I recently had the pleasure of using Edu Aid Services for
                assistance with my college applications, and I couldn&apos;t be more
                satisfied with the results. From start to finish, the team at
                Edu Aid was incredibly professional, knowledgeable, and
                supportive.
              </small>
            </p>

            <div className="flex items-center gap-2">
              <Image src={aisha} alt="review-img" />
              <h4 className="text-blueG font-bold">Aisha Mohammed </h4>
            </div>
          </div>

          <center>
            <div className="bg-blue-100 p-4 rounded text-left">
              <div className="flex items-center">
                <Image src={star1} alt="star" className="h-4 w-5" />
                <Image src={star1} alt="star" className="h-4 w-5" />
                <Image src={star1} alt="star" className="h-4 w-5" />
                <Image src={star1} alt="star" className="h-4 w-5" />

                <Image src={star5} alt="star" className="h-4 w-5" />
              </div>

              <p className="mt-2 mb-6 leading-none">
                <small className="text-sm ">
                  One aspect that stood out to me was their attention to detail.
                  They took the time to understand my academic background,
                  extracurricular activities, and career goals, crafting
                  personalized application strategies for each college I applied
                  to. This individualized approach gave me the confidence that
                  my applications truly reflected who I am as a student and a
                  person.
                </small>
              </p>

              <div className="flex items-center gap-2">
                <Image src={moses} alt="review-img" />
                <h4 className="text-blueG font-bold">Moses Chibuzor </h4>
              </div>
            </div>
          </center>
        </div>

        <div className="px-4 md:hidden"><Slider {...settings} className="">
        <div className="bg-blue-100 p-4 rounded ">
            <div className="flex items-center">
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />

              <Image src={star5} alt="star" className="h-4 w-5" />
            </div>

            <p className="mt-2 mb-6 leading-none">
              <small className="text-sm ">
                Their expertise in the college admissions process was evident
                throughout. They guided me through every step, from choosing the
                right universities to crafting compelling essays and preparing
                for interviews. I particularly appreciated their feedback on my
                essays; their suggestions helped me refine my ideas and present
                myself in the best possible light.
              </small>
            </p>

            <div className="flex items-center gap-2">
              <Image src={olajuwon} alt="review-img" />
              <h4 className="text-blueG font-bold">Olajuwon Adesanya </h4>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded ">
            <div className="flex items-center">
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />
              <Image src={star1} alt="star" className="h-4 w-5" />

              <Image src={star5} alt="star" className="h-4 w-5" />
            </div>

            <p className="mt-2 mb-6 leading-none">
              <small className="text-sm ">
                I recently had the pleasure of using Edu Aid Services for
                assistance with my college applications, and I couldn&apos;t be more
                satisfied with the results. From start to finish, the team at
                Edu Aid was incredibly professional, knowledgeable, and
                supportive.Edu Aid was incredibly professional, knowledgeable, and
                supportive.knowledgeable, and
                supportive.
              </small>
            </p>

            <div className="flex items-center gap-2">
              <Image src={aisha} alt="review-img" />
              <h4 className="text-blueG font-bold">Aisha Mohammed </h4>
            </div>
          </div>

            <div className="bg-blue-100 p-4 rounded ">
              <div className="flex items-center">
                <Image src={star1} alt="star" className="h-4 w-5" />
                <Image src={star1} alt="star" className="h-4 w-5" />
                <Image src={star1} alt="star" className="h-4 w-5" />
                <Image src={star1} alt="star" className="h-4 w-5" />

                <Image src={star5} alt="star" className="h-4 w-5" />
              </div>

              <p className="mt-2 mb-6 leading-none">
                <small className="text-sm ">
                  One aspect that stood out to me was their attention to detail.
                  They took the time to understand my academic background,
                  extracurricular activities, and career goals, crafting
                  personalized application strategies for each college I applied
                  to. This individualized approach gave me the confidence that
                  my applications truly reflected who I am as a student and a
                  person.
                </small>
              </p>

              <div className="flex items-center gap-2">
                <Image src={moses} alt="review-img" />
                <h4 className="text-blueG font-bold">Moses Chibuzor </h4>
              </div>
            </div>
         
        </Slider></div>
      </div>
    </div>
  );
};

export default Reviews;
