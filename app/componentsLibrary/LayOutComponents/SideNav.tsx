"use client";

import React, { useState } from "react";
import { LuListTree } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";

import { LiaElementor } from "react-icons/lia";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

import { useDispatch, useSelector } from "react-redux";
import { setState } from "@/app/utilsFunctions/Store/Reducers/MainSlice";

const Icons = [
  {
    id: 0,
    icon: LiaElementor,
    tooltip: "UF",
  },
  {
    id: 1,
    icon: LuListTree,
    tooltip: "DF",
  },
  {
    id: 2,
    icon: FaRegNewspaper,
    tooltip: "PF",
  },
];

export default function SideNav() {
  const disPatch = useDispatch();
  const sideState = useSelector((state: any) => state.MainStates.sideState);
  console.log(sideState);
  return (
    <div className="h-[90vh]">
      <Listbox
        onAction={(e: any) => {
          disPatch(setState(e));
        }}
        variant="faded"
        aria-label="Listbox menu with icons"
        className="flex flex-col justify-between gap-9 h-full bg-slate-100 pt-2"
      >
        {Icons.map((item: any) => (
          <ListboxItem textValue={item.tooltip} key={item.tooltip}>
            {/* <Tooltip content={item.tooltip} key={item.id} placement="right-end"> */}
            <div>
              {React.createElement(item.icon, {
                size: 20,
              })}
            </div>
            {/* </Tooltip> */}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
}
