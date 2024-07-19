import React from "react";
import { useSelector } from "react-redux";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const showMenu = useSelector((state: any) => state.menu.showMenu);
  console.log("showMenu: ", showMenu);
  return <div className={`${showMenu ? 'w-[87vw] 2xl:w-[90.5vw]' : 'w-[94vw]'} w-[85vw] h-[90vh] 2xl:w-[96vw]`} >{children}</div>;
};

export default PageWrapper;
