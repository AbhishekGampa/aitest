import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={`pl-5 overflow-x-auto`}>{children}</div>;
};

export default PageWrapper;
