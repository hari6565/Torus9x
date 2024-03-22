"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";

export default function Tsidebar({height="" , width="100px"}) {
  const data = [
    {title : "file" , color :"default"},
    {title : "link" , color :"primary"},
    {title : "data" , color :"success"},
    {title : "docs" , color :"primary"},
    {title : "edit" , color :"warning"},
    {title : "delete" , color :"danger"},
]
  return (
      <Listbox
        aria-label="Actions"
        className={`w-[${width}]`}
        onAction={(key) => alert(key)}
      >
        {data.map((item)=>(
          <ListboxItem key={item.title}>{item.title}</ListboxItem>
        ))}
      </Listbox>
  );
}
