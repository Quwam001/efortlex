import Image from "next/image";
import React from "react";
import heroImg from "../../public/images/Ellipse 6.png";

const Hero: React.FC = () => {
  return (
    <div>
      <div>
        <div className="px-2 py-10 grid grid-cols-1 text-center gap-10 md:px-20 md:grid-cols-2 md:gap-0 md:items-center md:text-left lg:px-25">
          <div>
            <h1 className="text-4xl font-bold md:text-2xl lg:text-4xl">
              Empowering Innovation
            </h1>
            <h1 className="text-4xl font-bold md:text-2xl lg:text-4xl">
              Across Industries
            </h1>
            <p className="mt-3">
              Leading Solutions in Engineering, Gis/Mapping IT and More{" "}
            </p>

            <button className="font-light px-4 py-2 rounded font-size-2 text-sm text-white bg-black mt-6">
              Explore Our Services{" "}
            </button>
          </div>

          <div>
            <Image
              src={heroImg} // Path to your image
              className="sm:px-3"
              alt="hero-img" // Alt text for the image
              // width={350}
              // height={300}
            />
          </div>
        </div>

        {/* usual 
    
      entry
      grief
      vivid
      easy
      shaft

      fruit
      carry
      zero
      cactus
      rain
      jelly */}

        <div className="mt-4 mb-4 text-white px-8 py-5 grid cols-1 md:grid-cols-2 md:justify-center  lg:grid-cols-3 px-20 gap-10 ">
          <div className="bg-black rounded p-5 line-height: 0.5 bg-[url('/images/Rectangle 1.png')]">
            <h5 className="text-yellow-500 mb-4 ">Partners </h5>
            <p>
              Baftha Solution Limited strategic partnership enhance our ability
              to provide exceptional solutions
            </p>
          </div>
          <div className="bg-black rounded p-5 line-height: 0.5">
            <h5 className="text-yellow-500 mb-4">Team</h5>
            <p>
              At Baftha Solution Limited we are more than a team we are a
              collective force driven by passion, innovation and a shared
              commitment to excellence
            </p>
          </div>

          <div
            style={{ backgroundImage: "url('./')" }}
            className="bg-black rounded p-5 line-height: 0.5">
            <h5 className="text-yellow-500 mb-4">Partners </h5>
            <p>
              Baftha Solution Limited strategic partnership enhance our ability
              to provide exceptional solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
