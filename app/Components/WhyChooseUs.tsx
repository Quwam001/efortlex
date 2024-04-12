import React from "react";
import afford from "../../public/images/game-icons_cash.png";
import grommet from "../../public/images/grommet-icons_user-expert.png";

import Image from "next/image";
import book from "../../public/images/unsplash_9DaOYUYnOls.png";
import confidential from "../../public/images/mdi_confidential-mode.png";
import fluent from "../../public/images/fluent_person-support-24-filled.png";


// import { Bokor } from "next/font/google";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="px-6 py-10 md:px-20 py-14">
      <div className="text-center md:text-left">
        <h1 className="text-blueG font-bold text-2xl">Why Choose Us </h1>
      </div>

      <div className=" gap-4 items-end lg:flex ">
        <div className="grid gap-8 mt-10 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <Image
              src={afford}
              //   className="sm:px-3 "
              alt="hero-img"
            />
            <div>
              <h1 className="text-blueG text-sm">Affordability </h1>
              <p>
                <small className="text-px mt-0 mb-0">
                  We understand the financial constraints students face, which
                  is why we offer competitive pricing and flexible payment
                  options to make our services accessible to all. As low as $50
                </small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={grommet}
              //   className="sm:px-3 "
              alt="hero-img"
            />
            <div>
              <h1 className="text-blueG text-sm">Expertise </h1>
              <p>
                <small className="text-px">
                  Our team comprises highly qualified professionals with
                  advanced degrees and extensive experience in academia,
                  research, and writing
                </small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={confidential}
              //   className="sm:px-3 "
              alt="hero-img"
            />
            <div>
              <h1 className="text-blueG text-sm">Confidentiality </h1>
              <p>
                <small className="text-px">
                  Students can trust us to deliver high-quality work on time and
                  with strict confidentiality, respecting their privacy and
                  academic integrity.
                </small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={fluent}
              //   className="sm:px-3 "
              alt="hero-img"
            />
            <div>
              <h1 className="text-blueG text-sm">Customer Satisfaction </h1>
              <p>
                <small className="text-px">
                  We prioritize customer satisfaction and strive to exceed our
                  client&apos;s expectations by providing exceptional service, prompt
                  communication, and ongoing support.
                </small>
              </p>
            </div>
          </div>
        </div>

        <center className="lg:w-full"><Image src={book} alt="book-img" className="lg:w-full" /></center>
      </div>
    </div>
  );
};

export default WhyChooseUs;
