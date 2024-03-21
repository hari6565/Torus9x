import React from "react";
import { useReactFlow } from "reactflow";

export const ContextMenu = ({
  id,
  top,
  left,
  right,
  bottom,
  deleteNode,
  editNode,
}) => {
  const { getNode } = useReactFlow();
  const node = getNode(id);
  return (
    <div
      style={{ top, left, right, bottom }}
      className="bg-white w-40 flex flex-col gap-3 absolute z-10 border-2 border-[#ccc] rounded-xl"
    >
      {/* nodename */}
      <div
        className={`p-2 ${
          node?.type ? "border-b-2 border-gray-300  " : "mt-[-40px]"
        }`}
      >
        <span
          className={"text-base font-semibold capitalize mb-3  text-gray-700"}
        >
          {node?.type}
        </span>
      </div>

      {/* contextmenu-menu */}
      <div className="flex flex-col gap-3 mb-4 ">
        {/* <div
          className={"  hover:bg-gray-300 text-black rounded-2xl  "}
          id="divbtn "
        >
          <button>
            <span className={`text-base ${"text-black"} ml-2`}>
              Configuration
            </span>
          </button>
        </div> */}
        {/* <div
          className={
            " context-menu-button-div hover:bg-gray-300 text-black rounded-xl  "
          }
        >
          <button>
            <span className={`text-base ${"text-black"} ml-2`}>WorkFlow</span>
          </button>
        </div> */}
        {/* <div
          className={
            " context-menu-button-div hover:bg-gray-300 text-black rounded-xl  "
          }
        >
          <button className=" text-base text-gray-500 cursor-pointer">
            <span className={`text-base ${"text-black"} ml-2`}>
              Custom Code
            </span>
          </button>
        </div> */}

        {/* <div
          className={
            " context-menu-button-div hover:bg-gray-300 text-black rounded-xl  "
          }
        >
          <button
            className={`cursor-${"text-base text-gray-500 hover:text-black"}`}
          >
            <span className={`text-base ${"text-black"} ml-2`}>Edit Node</span>
          </button>
        </div> */}
        <div
          className={
            " context-menu-button-div p-2 m-2 hover:bg-gray-300 text-black rounded-xl  "
          }
          onClick={() => {
            deleteNode(id, node);
          }}
        >
          <button>
            <span className={`text-base ${"text-black"} ml-2`}>Delete</span>
          </button>
        </div>
        <div
          className={
            " context-menu-button-div p-2 m-2 hover:bg-gray-300 text-black rounded-xl  "
          }
          onClick={() => {
            editNode(id, node);
          }}
        >
          <button>
            <span className={`text-base ${"text-black"} ml-2`}>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
