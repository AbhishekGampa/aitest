import React from "react";
import { useSelector } from "react-redux";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const showMenu = useSelector((state: any) => state.menu.showMenu);
  console.log("showMenu: ", showMenu);
  return <div className="w-[85vw] h-[90vh]" style={{ width: showMenu ? "85vw" : "95vw",}}>{children}</div>;
};

export default PageWrapper;
