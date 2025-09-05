import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white p-2">
      <div id="social_media">
        <div className="flex justify-center pt-3 gap-3">
          <a
            href=""
            className="bg-white rounded-full text-gray-600 h-[2.2rem] w-[2.2rem] flex justify-center items-center "
          >
            <Facebook />
          </a>
          <a
            href=""
            className="bg-white rounded-full text-gray-600 h-[2.2rem] w-[2.2rem] flex justify-center items-center "
          >
            <Instagram />
          </a>
          <a
            href=""
            className="bg-white rounded-full text-gray-600 h-[2.2rem] w-[2.2rem] flex justify-center items-center "
          >
            <Linkedin />
          </a>
        </div>
      </div>

      <div id="info" className="py-4">
        <div className="grid grid-cols-4 place-items-center">
          <div className="text-start text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            corporis ipsam corrupti, placeat enim ullam expedita repellat fugiat
            excepturi amet officia aliquid! .
          </div>
          <div className="flex flex-col space-y-2 text-xl">
            <a href=""> Bus Availability </a>
          </div>

          <div className="flex flex-col space-y-2 text-xl">
            <a href=""> Profil </a>
          </div>

          <div className="flex flex-col space-y-2 text-xl">
            <a href=""> Help </a>
          </div>
        </div>
      </div>

      <div id="copyright" className="text-center pb-1 ">
        &copy; 2024 Powered by
        <span className="text-blue-500">Inno-Air</span>
      </div>
    </div>
  );
};

export default Footer;
