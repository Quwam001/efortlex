"use client";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const GetStarted: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event:string) => {
    setValue(event);
    console.log(value);
  };

  const handleSUbmit = () => {
    if (value == "") {
      console.log("please fill the input");
    }
  };
  return (
    <div>
      <div className="mt-4 mb-4  px-5 py-5 lg:px-28">
        <center>
          <h1 className="text-blueG text-2xl font-bold">Get In Touch </h1>
        </center>

        <div className="grid md:grid md:grid-cols-2 mt-5">
          <div className="text-white bg-blackBackground px-5 py-12 rounded grid justify-center">
            <div>
              {" "}
              <h1 className="text-2xl text-blueG ">
                Ready to elevate your academic performance?
              </h1>
              <div className="mb-4 mt-4">
                <small className="text-xm ">
                  Contact EduAid Solutions today to learn more about how we can
                  support you in achieving your academic goals.
                </small>
              </div>
              <div>
                <div className="mb-4">
                  <div>
                    <small className="text-blueG text-xm "> Email </small>
                  </div>
                  <small className="text-xm "> info@baftha.com </small>
                </div>

                <div className="mb-4">
                  <div>
                    <small className="text-blueG  text-xm">Phone Number </small>
                  </div>
                  <small className="text-xm ">+2349091337547</small>
                </div>

                <div>
                  <div>
                    <small className="text-blueG  text-xm">Address </small>
                  </div>
                  <small className=" text-xm ">
                    Nigeria Agege, Lagos, 23401 NG
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-blue-50 rounded border sm: mt-5 md:mt-0">
            <h2 className="text-message text-1xl font-bold">
              {" "}
              Send us a message
            </h2>
            <small className="text-we text-xm mb-4">
              We look forward to hearing from you. send us an email or fill out
              the contact form and our team will get back to you.
            </small>

            <form action="" className="mt-5">
              <div className="mb-4 mt-2">
                <input
                  type="text"
                  placeholder="Full name "
                  className="border px-3 py-2 rounded text-xm "
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address "
                  className="mb-4 border px-3 py-2 rounded text-xm"
                />
              </div>
              

              <div>
                <PhoneInput
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  value={value}
                  defaultCountry="US"
                  className=" mb-4 border px-3 py-2 bg-white"
                />
              </div>

              <div>
                <select
                  id="educationLevel"
                  name="educationLevel "
                  className="mb-4 border px-3 py-2 rounded text-sm ">
                  <option className="text-sm" value="">Level of education </option>
                  <option className="text-xm" value="noHighSchool">No High School Diploma</option>
                  <option className="text-sm" value="highSchool">High School Diploma</option>
                  <option className="text-sm" value="someCollege">Some College, No Degree</option>
                  <option className="text-sm" value="associates">Associate Degree</option>
                  <option className="text-sm" value="bachelors">Bachelor&apos;s Degree</option>
                  <option className="text-sm" value="masters">Master&apos;s Degree</option>
                  <option className="text-sm" value="doctorate">Doctorate</option>
                </select>
              </div>

              {/* <div>
                <select
                  id="institution"
                  name="institution"
                  className="mb-4 border px-3 py-2 rounded text-xm ">
                  <option value="">Select an institution</option>
                  <option value="harvard">Harvard University</option>
                  <option value="mit">
                    Massachusetts Institute of Technology (MIT)
                  </option>
                  <option value="stanford">Stanford University</option>
                  <option value="caltech">
                    California Institute of Technology (Caltech)
                  </option>
                  <option value="princeton">Princeton University</option>
                  <option value="yale">Yale University</option>
                  <option value="columbia">Columbia University</option>
                </select>
              </div> */}

              <div>
                <textarea
                  name=""
                  id=""
                  placeholder="message"
                  rows={10}
                  cols={20}
                  className="mb-4 border px-3 py-2 rounded text-xm "></textarea>
              </div>
              <div>
                <button
                  className="font-light px-4 py-2 rounded font-size-2 text-sm text-white bg-black mt-6"
                  onClick={() => {
                    handleSUbmit();
                  }}>
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
