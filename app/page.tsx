"use client";
import React from "react";
import UFMain from "./componentsLibrary/ReactFlowComponents/UFComponents/UFMain";
import { useSelector } from "react-redux";
// import useAuth from "./hooks/useAuth";
// import DFMain from "./componentsLibrary/ReactFlowComponents/DFComponents/DFMain";

const Page = () => {
  const sideState = useSelector((state: any) => state.MainStates.sideState);
  return (
    <div className="flex flex-col w-full h-full">
      {(() => {
        switch (sideState) {
          case "UF":
            return <UFMain />;
          case "DF":
            return <div>df</div>;
          case "PF":
            return <div>PF</div>;
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
