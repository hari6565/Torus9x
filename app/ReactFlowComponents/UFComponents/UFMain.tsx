import React from "react";
import { UFDashboard } from "./UFDashboard";
import UIFabric from "./UIFabric";
import UFProperties from "./UFProperties";

const UFMain = () => {
  return (
    <div className="flex w-full h-full">
      <div>
        <UIFabric />
      </div>
      <div className="w-full h-full">
        <UFDashboard />
      </div>
      <div className="h-full">
        <UFProperties />
      </div>
    </div>
  );
};

export default UFMain;
