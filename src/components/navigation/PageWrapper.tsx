import React from "react";
import { useSelector } from "react-redux";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const showMenu = useSelector((state: any) => state.menu.showMenu);
  console.log("showMenu: ", showMenu);
  return <div className={`pl-5 overflow-x-auto`} >{children}</div>;
};

export default PageWrapper;
