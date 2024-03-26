"use client";
import React, { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { readReddis } from "@/app/utilsFunctions/apiCallUnit";
import JsonUiLayout from "./components/jsonUiLayout";

const Builder = () => {
  const disPatch = useDispatch();

  const allUFNode = useSelector((state: any) => state.UFStates.allUFNode);
  console.log(allUFNode, "state");
  const navigate = useRouter();

  const [json, setJson] = useState([]);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const UFAppNVersion = useSelector(
    (state: any) => state.UFStates.UFAppNVersion
  );
  async function GetJson() {
    try {
      const res = await readReddis("testUI").then((res) => JSON.parse(res));
      console.log(res);
      console.log(UFAppNVersion);

      if (res) {
        setJson(res?.[UFAppNVersion.appName]?.[UFAppNVersion.Version]?.nodes);

        setHeight(
          res?.[UFAppNVersion.appName]?.[UFAppNVersion.Version]?.height
        );
        setWidth(res?.[UFAppNVersion.appName]?.[UFAppNVersion.Version]?.width);
      }
    } catch (err) {
      console.log("error");
    }
  }

  useEffect(() => {
    GetJson();
  }, []);
  console.log(json, "bbb");

  const handleClick = () => {
    console.log("clicked");
    navigate.push("/");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="fixed top-4 left-4 py-3 px-3
       bg-gray-500 m-10 text-white rounded w-10 text-center hover:bg-gray-700 cursor-pointer z-50"
      >
        <TiArrowBackOutline />
      </button>
      <JsonUiLayout json={json} height={height} width={width} />
    </div>
  );
};

export default Builder;
