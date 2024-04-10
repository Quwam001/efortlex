import React from "react";

const GetStarted: React.FC = () => {
  return (
    <div>
      <div className="mt-4 mb-4  px-5 py-5 lg:px-28">
        <center>
          <h1 className="text-orange text-2xl font-bold">Get Started </h1>
        </center>

        <div className="grid md:grid md:grid-cols-2 mt-5">
          <div className="text-white bg-blackBackground px-5 py-12 rounded">
            <i className="text-2l text-orange ">
              Ready to Transform Your Business?
            </i>
            <div className="mb-4">
             
              <small className="text-xm ">
                Whether you&apos;re  seeking expert engineering solutions, advanced
                GIS/Mapping services, or cutting-edge IT solutions, Baftha is
                here to help. Contact us today to discuss your project and
                discover how we can drive your success.
              </small>
            </div>

            <div>
              <div className="mb-4">
                <div>
                  <small className="text-orange text-xm "> Email </small>
                </div>
                <small className="text-xm "> info@baftha.com </small>
              </div>

              <div className="mb-4">
                <div>
                  <small className="text-orange text-xm">Phone Number </small>
                </div>
                <small className="text-xm ">+2349091337547</small>
              </div>

              <div>
                <div>
                  <small className="text-orange text-xm">Address </small>
                </div>
                <small className=" text-xm ">
                  Nigeria Agege, Lagos, 23401 NG
                </small>
              </div>
            </div>
          </div>

          <div className="p-5 rounded border sm: mt-5 md:mt-0">
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
                  className="border px-3 py-2 rounded text-xm w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address "
                  className="mb-4 border px-3 py-2 rounded text-xm w-full"
                />
              </div>

              <div>
                <textarea
                  name=""
                  id=""
                  placeholder="message"
                  rows={10}
                  cols={20}
                  className="mb-4 border px-3 py-2 rounded text-xm w-full"></textarea>
              </div>
              <div>
                <button className="font-light px-4 py-2 rounded font-size-2 text-sm text-white bg-black mt-6">
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
