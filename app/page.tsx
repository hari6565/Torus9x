"use client";
import React from "react";
import UFMain from "./ReactFlowComponents/UFComponents/UFMain";
import { useSelector } from "react-redux";

import DFMain from "./ReactFlowComponents/DFComponents/DFMain";
import PFMain from "./ReactFlowComponents/PFComponents/PFMain";
const Page = () => {
  const sideState = useSelector((state: any) => state.MainStates.sideState);

  return (
    <div className="flex flex-col w-full h-full">
      {(() => {
        switch (sideState) {
          case "UF":
            return <UFMain />;
          case "DF":
            return <DFMain />;
          case "PF":
            return <PFMain />;
          default:
            return (
              <div className="flex justify-center items-center h-full w-full">
                ...on Process {sideState}
              </div>
            );
        }
      })()}
    </div>
  );
};

export default Page;
