import Image from "next/image";
import React from "react";
import handsomeMan from "../../public/images/handsome-young-businessman-suit_273609-6513 1.png";
const About: React.FC = () => {
  return (
    <div>
      <div className="py-20 px-8">
        <center>
          <h1 className="text-4xl text-primary font-extrabold">About Us </h1>
        </center>
        <div
          className="grid items-center justify-center py-5 gap-6 md:grid-cols-1 lg:grid-cols-[1fr,1.5fr] "
          id="about">
          <center>
          
            <div>
              <Image
                src={handsomeMan} // Path to your image
                // className="sm:px-3"
                alt="hero-img" // Alt text for the image
                // width={350}
                // height={300}
              />
            </div>
          </center>

          <div className="gap-6 grid md:grid-cols-2">
            <div className="mb-0 bg-gray-50 py-4 px-3 sm:mb-6 rounded ">
              <h1 className="text-2xl text-primary font-bold mb-4">
                Our Company{" "}
              </h1>
              <p className="text-secondary text-sm">
                At Baftha Solution Ltd, we are a trailblazing Nigeria-based
                technology and consulting company that stands as the foremost
                source for innovative solutions. We are a dynamic and
                forward-thinking Engineering, Information, and Communication
                Technology (ICT), and General Contracting firm.
              </p>
            </div>
            <div className="bg-gray-50 py-4 px-3 rounded ">
              <h1 className="text-2xl text-primary font-bold mb-4">
                Our Vision{" "}
              </h1>
              <p className="text-secondary text-sm">
                Our vision is to be a leading provider of integrated
                engineering, ICT, and general contracting services, recognized
                for our unwavering commitment to quality, innovation, and client
                satisfaction. We aspire to contribute significantly to the
                development and advancement of the industries we serve.
              </p>
            </div>
            <div className="bg-gray-50 py-4 px-3 rounded ">
              <h1 className="text-2xl text-primary font-bold mb-4">
                Our Mission{" "}
              </h1>
              <p className="text-secondary text-sm">
                Baftha Solutions Limited is driven by the mission to deliver
                cutting-edge engineering solutions, innovative ICT services, and
                comprehensive general contracting expertise. We are committed to
                exceeding client expectations by combining technical excellence
                with a client-centric approach, ensuring sustainable and
                successful project outcomes.
              </p>
            </div>
            <div className="bg-gray-50 py-4 px-3 rounded ">
              <h1 className="text-2xl text-primary font-bold mb-4">
                Our Story{" "}
              </h1>
              <p className="text-secondary text-sm">
                Founded with a passion for transforming ideas into reality,
                Baftha Solutions Limited emerged from a vision to create a
                company that seamlessly integrates engineering, ICT, and general
                contracting services. Our journey began in 2021 with a dedicated
                team of professionals who shared common goal to build a company
                that would redefine standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-400 py-16 px-16 grid items-center justify-center md:py-20">
        <div>
          <h1 className="text-white text-2xl mb-4">
            Building Trust, Delivering Excellence.
          </h1>
          <p className="text-white px-38 text-sm ">
            At Baftha, we pride ourselves on our track record of success and
          </p>
          <p className="text-white px-38 text-sm ">
            client satisfaction. With a commitment to quality, reliability, and
            innovation,
          </p>
          <p className="text-white px-38 text-sm ">
            
            we&apos;ve earned the trust of leading organizations across industries.
            Explore
          </p>
          <p className="text-white px-38 text-sm ">
            
            our testimonials and see why we&apos;re the partner of choice for
            businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
