import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { PiSidebarDuotone } from "react-icons/pi";
import { TbLayoutNavbar } from "react-icons/tb";
import { TbBoxModel } from "react-icons/tb";
import { CiViewTable } from "react-icons/ci";
import { ScrollShadow } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
const data = [
  {
    label: "navbar",
    icons: TbLayoutNavbar,
    name: "navbar",
    type: "NavBar",
    description: "Typically containing links to different sections or pages.",
  },

  {
    icons: CiViewTable,
    label: "Table",
    name: "Table",
    type: "Table",
    description:
      "Data organized in to rows and columns for easy reference and analysis.",
  },
  {
    icons: FaWpforms,
    label: "Form",
    name: "Form",
    type: "Form",
    description:
      "A form is a user interface component used to collect and submit data.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Sidebarnav",
    name: "Sidebarnav",
    type: "Sidebarnav",
    description: "Providing navigation or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "ToolTip",
    name: "ToolTip",
    type: "ToolTip",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Accordian",
    name: "Accordian",
    type: "Accordian",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "AutoComplete",
    name: "AutoComplete",
    type: "AutoComplete",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Badge",
    name: "Badge",
    type: "Badge",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Card",
    name: "Card",
    type: "Card",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Checkbox",
    name: "Checkbox",
    type: "Checkbox",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "CheckboxGroup",
    name: "CheckboxGroup",
    type: "CheckboxGroup",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Chip",
    name: "Chip",
    type: "Chip",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Circularprogress",
    name: "Circularprogress",
    type: "Circularprogress",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Code",
    name: "Code",
    type: "Code",
    description: "Providing ToolTip or supplementory content.",
  },
  {
    icons: PiSidebarDuotone,
    label: "Divider",
    name: "Divider",
    type: "Divider",
    description: "Providing ToolTip or supplementory content.",
  },
  // {
  //   icons: PiSidebarDuotone,
  //   label: "Sidebarnav",
  //   name: "TextUpdaterNode",
  //   type: "TextUpdaterNode",
  //   description: "Providing navigation or supplementory content",
  // },
];

const UIFabric = () => {
  const [search, setSearch] = useState("");
  const onDragStart = (
    event,
    nodeType,
    nodeName = "start"
    // rolesColor,
    // roles
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/name", nodeName);
    // event.dataTransfer.setData("application/roleColor", rolesColor);
    // event.dataTransfer.setData("application/roles", roles);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="w-[15vw] h-[90vh] overflow-y-auto bg-slate-600 saturate-200  ">
      <div className="flex flex-col gap-2">
        <Input
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
          classNames={{
            base: " mb-3 w-[100%] h-8   ",
            mainWrapper: "h-full  ",
            input: "text-small text-gray-200 ",

            inputWrapper:
              "h-full font-normal focus: active: rounded-lg text-gray-300  hover:bg-gray-600 ",
          }}
          className="text-gray-300    "
          placeholder="search..."
          size="sm"
          startContent={<FiSearch size={16} className="text-gray-500" />}
          isClearable={false}
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {/* <ScrollShadow size={20} color="black" className="flex flex-col gap-2"> */}
        {data
          .filter(
            (item) =>
              item.label.includes(search) ||
              item.label.toLowerCase().includes(search)
          )
          .map((item, index) => {
            return (
              <Card
                key={index}
                onDragStart={(event) => {
                  onDragStart(event, item.type, item.name);
                }}
                draggable
                isFooterBlurred
                radius="lg"
                className=" flex flex-col items-start  gap-2 bg-white border-2 border-gray-600/40"
              >
                <div className="flex flex-row justify-start items-center gap-2 w-full ">
                  {React.createElement(item.icons, {
                    size: 25,
                    color: "gray",
                  })}
                  <p>{item.label}</p>

                  {/* <div className="text-white w-[70%] "> */}
                  {/* {clickToEdit === index ? (
                    <Input
                      style={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                      className="text-white text-sm "
                      variant={"bordered"}
                      label={index ? " " : "Click to add name"}
                      defaultValue={item.label}
                      size="sm"
                      onChange={(e) => {
                        item.label = e.target.value;
                      }}
                      onKeyDown={(e) => {
                        console.log("event", e.key);
                        if (e.key === "Enter") {
                          e.preventDefault();
                          e.stopPropagation();

                          setClickToEdit(null);
                        }
                      }}
                    />
                  ) : (
                    <label onClick={() => setClickToEdit(index)}>
                      {item.label || "click to add name"}
                    </label>
                  )} */}
                  {/* </div> */}
                </div>
                <div className="flex justify-center items-center">
                  <CardFooter
                    className=" text-gray-700/80 text-sm justify-between before:bg-white/10
border-gray-600/30 border-1 overflow-hidden  
rounded-lg bottom-1
shadow-small  gap-2 p-1"
                  >
                    <p className="text-xs">{item.description}</p>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        {/* </ScrollShadow> */}
      </div>
    </div>
  );
};

export default UIFabric;
