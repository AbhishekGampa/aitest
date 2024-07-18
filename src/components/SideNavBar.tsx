import { navLinks } from "@/utils/constants";
import logo from "../Images/logo.svg";
import vectorline from "../Images/Vector.svg";
import companylogo from "../Images/companylogo.svg";
import Image from "next/image";
import React from "react";

type SideNavBarProps = {
  showMenu: boolean;
  handleNavbarClick: (event: any, screen: string) => void;
};

const SideNavBar = ({ showMenu, handleNavbarClick }: SideNavBarProps) => {
  return (
    <div
      className="flex flex-col p-5 gap-5"
      style={{ backgroundColor: "#F9F9FA", width: showMenu ? "24vw" : "5vw" }}
    >
      <div className=" flex flex-row gap-3">
        <Image src={logo} alt="logo" />
        {showMenu ? <Image src={vectorline} alt="vector" width={3} /> : null}
        {showMenu ? <Image src={companylogo} alt="companylogo" /> : null}
      </div>
      {navLinks.map((nav: any) => (
        <div
          key={nav.text}
          className="flex flex-row gap-3 cursor-pointer"
          onClick={(e) => handleNavbarClick(e, nav.text)}
        >
          <Image src={nav.icon} alt={nav.alt} />
          {showMenu ? <h5>{nav.text}</h5> : null}
        </div>
      ))}
    </div>
  );
};

export default SideNavBar;
