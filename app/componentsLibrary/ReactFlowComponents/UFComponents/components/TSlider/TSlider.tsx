import React from "react";
import {Slider} from "@nextui-org/react";

const Tslider =()=>{
    return(

        <Slider 
      label="Temperature" 
      step={0.01} 
      maxValue={1} 
      minValue={0} 
      defaultValue={0.4}
      className="max-w-md"
    />
    )
}
export default Tslider