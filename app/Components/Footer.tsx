import React from "react";
import logo from "../../public/images/logo (1).png";
import instagram from "../../public/images/iconContainer (1).png";
import twitter from "../../public/images/iconContainer.png";

import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-black  px-8 py-4 grid gap-4 md:flex md:justify-between md:items-center">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="">
          <div className="flex sm:flex mb-2 md:justify-end">
            <div>
              <Image src={instagram} alt="instagram" className="h-10" />
            </div>
            <div>
              <Image src={twitter} alt="twitter" className="h-10" />
            </div>
          </div>
          <hr />
          <small className="text-white text-sm">
            &copy; 2024 Eduaid Solutions Limited. All right reserved{" "}
          </small>
        </div>
      </div>
      <a href="">REFRESH</a>
    </div>
  );
};

export default Footer;
