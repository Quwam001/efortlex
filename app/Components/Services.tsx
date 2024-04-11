import Image from "next/image";
import React from "react";
import engineer from "../../public/images/🦆 illustration _Quality Check_.png";
import switch1 from "../../public/images/🦆 icon _switch course book_.png";
import edit from "../../public/images/🦆 emoji _edit_.png";
import consult from "../../public/images/🦆 illustration _Consulting_.png";

const Service: React.FC = () => {
  return (
    <div className="mt-4 mb-4  px-5 py-10 lg:px-40 bg-blue-100" id="service">
      <center>
        <h1 className="text-2xl text-black font-bold">Services</h1>
        <p className="text-services text-sm">Our Comprehensive Offerings</p>
      </center>
      <div className="text-white mt-10 mb-10">
        <div className="grid justify-center  grid cols-1 md:grid-cols-2 md:justify-center lg:grid-cols-2 gap-8  ">
          <div className="bg-black rounded p-8 line-height: 0.5">
            <center>
              <Image
                src={engineer}
                className="mb-4"
                alt="hero-img" // Alt text for the image
              />
            </center>
            <h5 className="mb-1 text-blueG">Project Research Assistance</h5>
            <p className="text-sm">
              Our team of research experts can help students gather relevant
              resources, conduct literature reviews, and develop robust research
              methodologies tailored to their specific project requirements
            </p>
          </div>
          <div className="bg-black rounded p-8 line-height: 0.5">
            <center>
              <Image
                src={switch1}
                className="mb-4"
                alt="switch-img" // Alt text for the image
              />
            </center>
            <h5 className="mb-1 text-blueG">Coursework Support</h5>
            <p className="text-sm">
              From essays and presentations to lab reports and case studies, our
              skilled writers can assist students in crafting well-written and
              thoroughly researched coursework that meets academic standards
            </p>
          </div>
          <div className="bg-black rounded p-8 line-height: 0.5">
            <center>
              <Image
                src={edit}
                className="mb-4"
                alt="switch-img" // Alt text for the image
              />
            </center>
            <h5 className="mb-1 text-blueG">Editing and Proofreadinge</h5>
            <p className="text-sm">
              Our experienced editors ensure that student&apos;s work is polished,
              error-free, and meets the highest standards of clarity, coherence,
              and academic integrity
            </p>
          </div>
          <div className="bg-black rounded p-8 line-height: 0.5">
            <center>
              <Image
                src={consult}
                className="mb-4"
                alt="switch-img" // Alt text for the image
              />
            </center>
            <h5 className="mb-1 text-blueG">Consultation and Mentoring</h5>
            <p className="text-sm">
              We offer personalized consultation sessions to provide students
              with guidance, feedback, and support, helping them navigate the
              academic writing process with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
