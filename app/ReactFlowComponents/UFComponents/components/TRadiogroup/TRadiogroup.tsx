"use client"
import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";
const Tradiogroup=()=>{
    return(
        <RadioGroup
      label="Select your favorite city"
    >
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
    </RadioGroup>


    )
}
export default Tradiogroup