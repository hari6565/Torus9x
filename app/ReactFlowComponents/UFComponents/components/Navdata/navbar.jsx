"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logbutton from "./button";

import { useDispatch, useSelector } from "react-redux";

const NavigationBar = ({ id = null, height = "", json = [] }) => {
  const disPatch = useDispatch();
  const allUFNode = useSelector((state) => state.UFStates.allUFNode);
  console.log(allUFNode);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (json.length > 0) {
      console.log("json data called");
      console.log(json);

      const ddd = json.findIndex((ele) => ele.id == id && ele.type == "NavBar");
      console.log(ddd);
      setData(Number(ddd));
    } else if (allUFNode.length > 0) {
      console.log("all data called");
      console.log(allUFNode);
      const ddd = allUFNode.findIndex(
        (ele) => ele.id == id && ele.type == "NavBar"
      );
      console.log(ddd);
      setData(Number(ddd));
    }
  }, []);

  return (
    <React.Fragment>
      <div
        className="w-full flex justify-center items-center"
        style={{ height: "100%" }}
      >
        {typeof data == "number" && (
          <Navbar
            style={{ height: "100%" }}
            className="flex justify-center items-center bg-indigo-500 rounded-md shadow-lg shadow-indigo-500/50"
          >
            <NavbarBrand className="text-white font-bold">
              <span>{allUFNode[data].property.NavBarBrand.Value}</span>
            </NavbarBrand>

            <NavbarContent className="flex justify-center items-center">
              {allUFNode[data].property.NavBarContent.Items.map((item, id) => (
                <NavbarItem className="list-none flex justify-center items-center">
                  <Link
                    className="px-2 py-5 text-white font-semibold gap-3"
                    href="#"
                  >
                    <div>{item}</div>
                  </Link>
                </NavbarItem>
              ))}
              <NavbarItem className="list-none flex justify-center items-center">
                <div className="profile_tag">
                  <div className="flex justify-center items-center">
                    <Logbutton />
                  </div>
                </div>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        )}
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default NavigationBar;
