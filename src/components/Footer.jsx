import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side - Copyright Text */}
        <p className="text-sm mt-4 sm:mt-0">
          &copy; 2025
          <span className="border px-5 ml-2 rounded-full border-red-400 py-[3px]">
            / Yunus
          </span>
        </p>

        {/* Right Side - Social Icons */}
        <div className="flex gap-5 mt-3 sm:mt-0">
          {[
            {
              href: "https://www.facebook.com/yunus.sheikh.509",
              icon: <BsFacebook />,
            },
            {
              href: "https://www.linkedin.com/in/muhammad-yunus-sheikh/",
              icon: <BsLinkedin />,
            },
            {
              href: "https://discord.com/yunus.sheikh",
              icon: <FaDiscord />,
            },

            { href: "https://github.com/yunusmy", icon: <BsGithub /> },
            {
              href: "mailto:mys.yunus.sheikh@gmail.com",
              icon: <MdOutlineEmail />,
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-400 transition-all duration-300 focus:outline-none focus:ring focus:ring-gray-500 rounded"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
