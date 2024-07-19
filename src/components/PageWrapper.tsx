import React from "react";
import { useSelector } from "react-redux";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const showMenu = useSelector((state: any) => state.menu.showMenu);
  console.log("showMenu: ", showMenu);
  return <div className={`${showMenu ? 'w-[86vw] lg:w-[86vw] 2xl:w-[90.5vw]' : 'w-[94vw] lg:w-[86vw] 2xl:w-[90.5vw]'} w-[85vw] h-[90vh]`} >{children}</div>;
};

export default PageWrapper;
