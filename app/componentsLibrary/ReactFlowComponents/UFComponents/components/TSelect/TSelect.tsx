import React from "react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
const animals = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
    { value: "bird", label: "Bird" },
  ];
const Tselect=()=>{


    
        return (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Select 
                label="Select an animal" 
                className="max-w-xs" 
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Favorite Animal"
                placeholder="Select an animal"
                className="max-w-xs"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          );

    
}
export default Tselect