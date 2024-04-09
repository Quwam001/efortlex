import Image from "next/image";
import React from "react";
import engineer from "../../public/images/img8.png";
import map from "../../public/images/uiw_map.png";
import info from "../../public/images/img6.png";
import environs from "../../public/images/img5.png";
import hat from "../../public/images/img4.png";
import general from "../../public/images/img3 (2).png";
import note from "../../public/images/img1.png";

const Service: React.FC = () => {
  return (
    <div className="mt-4 mb-4  px-5 py-5 lg:px-40" id="service">
      <center>
        <h1 className="text-2xl text-black font-bold">Services</h1>
        <p className="text-services text-sm">Our Comprehensive Offerings</p>
      </center>
      <div className="text-white mt-10 mb-10">
        <div className="grid justify-center  grid cols-1 md:grid-cols-2 md:justify-center lg:grid-cols-3 gap-6  ">
          <div className="bg-custom-gray rounded p-5 line-height: 0.5">
            <Image
              src={engineer}
              className="mb-4"
              alt="hero-img" // Alt text for the image
            />
            <h5 className="text-orange mb-1">Engineering </h5>
            <p>
              From design to implementation, we engineer success at every stage
              of your project.
            </p>
          </div>

          <div className="bg-custom-gray rounded p-5 line-height: 0.5">
            <Image
              src={map}
              className="mb-4"
              alt="hero-img" // Alt text for the image
            />
            <h5 className="text-orange mb-1">Gi5/Mapping Services </h5>
            <p>Mapping the future with precision and accuracy.</p>
          </div>

          <div
            style={{ backgroundImage: "url('./')" }}
            className="bg-custom-gray rounded p-5 line-height: 0.5">
            <Image
              src={info}
              className="mb-4"
              alt="hero-img" // Alt text for the image
            />

            <h5 className="text-orange mb-1">
              Information Technology Solutions{" "}
            </h5>
            <p>
              Leveraging technology to streamine operations and drive efficiency
            </p>
          </div>

          <div className="bg-custom-gray rounded p-5 line-height: 0.5">
            <Image
              src={environs}
              className="mb-4"
              alt="hero-img" // Alt text for the image
            />
            <h5 className="text-orange mb-1">Environmental Solutions </h5>
            <p>Protecting the internet while advancing your goals</p>
          </div>

          <div className="bg-custom-gray rounded p-5 line-height: 0.5">
            <Image
              src={hat}
              className="mb-4"
              alt="hero-img" // Alt text for the image
            />
            <h5 className="text-orange mb-1">Farming/Agriculture Solutions</h5>
            <p>Sustainable goals in the agricultural sector</p>
          </div>

          <div className="bg-custom-gray rounded p-5 line-height: 0.5 ">
            <Image
              src={general}
              className="mb-4"
              alt="hero-img" // Alt text for the image
            />
            <h5 className="text-orange mb-1">General Supply </h5>
            <p>
              Sourcing and delivering essential supplies for your operations
            </p>
          </div>

          <div
            style={{ backgroundImage: "url('./')" }}
            className="bg-custom-gray rounded p-5 line-height: 0.5 text-white mt-6 lg:inline-block">
            <Image
              src={note}
              className="mb-4"
              alt="note-img" // Alt text for the image
            />
            <h5 className="text-orange mb-1 ">General Contract </h5>
            <p>Trusted partners in construction and project management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
