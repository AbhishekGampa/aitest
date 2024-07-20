import { navLinks } from "@/utils/constants";
import logo from "@/Images/logo.svg";
import vectorline from "@/Images/Vector.svg";
import companylogo from "@/Images/companylogo.svg";
import Image from "next/image";
import React from "react";

type SideNavBarProps = {
  showMenu: boolean;
  handleNavbarClick: (event: any, screen: string) => void;
};

const SideNavBar = ({ showMenu, handleNavbarClick }: SideNavBarProps) => {
  console.log("showMenu: ", showMenu);
  return (
    <div
      className={`flex flex-col p-5 gap-5 h-full transition-all duration-150   ${
        showMenu ? "w-[220px] " : "w-[70px] items-center"
      } `}
      style={{ backgroundColor: "#F9F9FA" }}
    >
      <div
        className={`flex flex-row gap-3 w-full p-1.5`}
      >
        <Image src={logo} alt="logo" />
        <div className=" flex gap-3 w-max">
          <Image
            src={vectorline}
            alt="vector"
            width={3}
            className={`${showMenu ? "" : "hidden"}`}
          />

          <h1 className={`${showMenu ? "" : "hidden"} font-bold text-black whitespace-nowrap text-ellipsis`}>
            CyberPod AI
          </h1>
        </div>
      </div>
      {navLinks.map((nav: any) => (
        <div
          key={nav.text}
          className={`w-full cursor-pointer hover:bg-gray-200 rounded-lg p-1.5 h-8`}
          onClick={(e) => handleNavbarClick(e, nav.text)}
        >
          <div className="flex items-center gap-3">
            {showMenu ? (
              <Image src={nav.icon} alt={nav.alt} />
            ) : (
              <Image src={nav.icon} alt={nav.alt} className="!size-5 object-cover" />
            )}
            <h5 className={`${showMenu ? "" : "hidden"}`}>{nav.text}</h5>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavBar;
