"use client"
import React from "react";
import {Kbd} from "@nextui-org/react";
const Tkbd =()=>{
    return(
        
    <div className="flex gap-4">
      <Kbd keys={["command"]}>K</Kbd>
      <Kbd keys={["command", "shift"]}>N</Kbd>
      <Kbd keys={["option", "command"]}>P</Kbd>
    </div>  
  );
}


    
export default Tkbd