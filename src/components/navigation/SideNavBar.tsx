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
  return (
    <div
      className={`flex flex-col p-5 gap-5 h-full transition-all duration-150  ${
        showMenu ? "w-[190px] " : "w-[75px]"
      } max-md:w-[10vw]`}
      style={{ backgroundColor: "#F9F9FA" }}
    >
      <div className=" flex flex-row gap-3 w-max max-md:w-[10vw]">
        <Image src={logo} alt="logo" />
        <div className="hidden lg:flex gap-3 w-max">
          {showMenu ? <Image src={vectorline} alt="vector" width={3} /> : null}
          {showMenu ? <Image src={companylogo} alt="companylogo" /> : null}
        </div>
      </div>
      {navLinks.map((nav: any) => (
        <div
          key={nav.text}
          className="flex flex-row gap-3 cursor-pointer hover:bg-gray-200 rounded-lg p-2"
          onClick={(e) => handleNavbarClick(e, nav.text)}
        >
          <Image src={nav.icon} alt={nav.alt} />
          <div className="md:w-1/4 hidden md:flex">
            {showMenu ? <h5>{nav.text}</h5> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavBar;
