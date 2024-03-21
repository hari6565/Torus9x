import React from "react";
import { User } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function SideNavbar({ height = "", width = "" }) {
  const navItem = [
    "HOME",
    "ABOUT US",
    "CONTACT US",
    "SERVICES",
    "BOOK SESSION",
  ];

  return (
    <React.Fragment>
      <div
        className="flex flex-col justify-between items-center rounded-lg py-7 px-6 shadow-md bg-slate-500"
        style={{
          width: width,
          height: height,
        }}
      >
        <div className="flex flex-col justify-evenly items-start">
          <div className="pt=[10%]">
            <User name="TORUS" description=" product design tool"></User>
          </div>
          <div className="pt-[20%]">
            {navItem.map((item) => (
              <h5>{item}</h5>
            ))}
          </div>
        </div>

        <div>
          <Button>Log out</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
