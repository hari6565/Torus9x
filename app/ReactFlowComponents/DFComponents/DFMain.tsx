"use client";
import React, { useState } from "react";
import { UFDashboard } from "./DFDashboard";
import DFSideNavBar from "./DFSideNavBar";

const DFMain = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex w-full h-full">
      <div>
        <DFSideNavBar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="w-full h-full">
        <UFDashboard />
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default DFMain;
