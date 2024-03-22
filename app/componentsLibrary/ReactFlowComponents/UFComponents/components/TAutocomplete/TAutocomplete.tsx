"use client";
import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const animals = [
  { value: "cat", label: "Cat" },
  { value: "dog", label: "Dog" },
  { value: "bird", label: "Bird" },
];

const Tautocomplete = (props) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete label="Select an animal" className="max-w-xs">
        {animals.map((animal) => (
          <AutocompleteItem key={animal.value} value={animal.value}>
            {animal.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        label="Favorite Animal"
        placeholder="Search an animal"
        className="max-w-xs"
        defaultItems={animals}
      >
        {(item) => (
          <AutocompleteItem key={item.value} value={item.value}>
            {item.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default Tautocomplete;
