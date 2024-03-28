"use client";
import React from "react";
import UFMain from "./componentsLibrary/ReactFlowComponents/UFComponents/UFMain";
import {useSelector } from "react-redux";
import { RootState } from "./utilsFunctions/Store/store";
import ApplicationSelector from "./componentsLibrary/applicationSelectionWindow/ApplicationSelector";

const Page = () => {
  const fabric = useSelector(
    (state: RootState) => state.MainStates.fabric
  );
  const applicationName = useSelector(
    (state: RootState) => state.MainStates.applicationName
  );
  return (
    <div className="flex flex-col w-full h-full">
      {applicationName ? (
        (() => {
          switch (fabric) {
            case "UF":
              return <UFMain />;
            case "DF":
              return <div>df</div>;
            case "PF":
              return <div>PF</div>;
            default:
              return (
                <div className="flex justify-center items-center h-full w-full">
                  ...on Process {fabric}
                </div>
              );
          }
        })()
      ) : (
        <ApplicationSelector />
      )}
    </div>
  );
};

export default Page;
