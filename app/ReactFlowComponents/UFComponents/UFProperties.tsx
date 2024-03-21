"use client";
import React, { useEffect } from "react";
// import { SketchPicker } from "react-color";
import { useState } from "react";
import { Button, Input, Modal } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
// import { JSONTree } from "react-json-tree";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import {
  setUFEditComponents,
  setUFNode,
} from "@/app/utilsFunctions/StateManage/UFStates";
export default function UFProperties() {
  const UFeditComponents = useSelector(
    (state: any) => state.UFStates.UFeditComponents
  );
  const allUFNode = useSelector((state: any) => state.UFStates.allUFNode);

  const disPatch = useDispatch();

  function handleChange(e: any) {
    disPatch(
      setUFEditComponents({
        ...UFeditComponents,
        property: {
          ...UFeditComponents.property,
          NavBarBrand: { Value: e.value },
        },
      })
    );
  }

  function changePosition(fromIndex, toIndex) {
    if (
      fromIndex < 0 ||
      fromIndex >= UFeditComponents.property.NavBarContent.Items.length ||
      toIndex < 0 ||
      toIndex >= UFeditComponents.property.NavBarContent.Items.length
    ) {
      console.error("Index out of bounds");
      return;
    }
    console.log(fromIndex, " - ", toIndex);

    const newArray = UFeditComponents.property.NavBarContent.Items.slice();
    const element = newArray.splice(fromIndex, 1)[0];
    newArray.splice(toIndex, 0, element);
    console.log(newArray);

    disPatch(
      setUFEditComponents({
        ...UFeditComponents,
        property: {
          ...UFeditComponents.property,
          NavBarContent: { Items: newArray },
        },
      })
    );

    console.log(UFeditComponents);
  }

  function deletePosition(delIndex) {
    if (
      delIndex < 0 ||
      delIndex >= UFeditComponents.property.NavBarContent.Items.length
    ) {
      console.error("Index out of bounds");
      return UFeditComponents.property.NavBarContent.Items;
    }
    const newArray = UFeditComponents.property.NavBarContent.Items.slice();

    newArray.splice(delIndex, 1);
    console.log(newArray);
    disPatch(
      setUFEditComponents({
        ...UFeditComponents,
        property: {
          ...UFeditComponents.property,
          NavBarContent: { Items: newArray },
        },
      })
    );
  }

  async function postProps() {
    const newProps = allUFNode.slice();
    const replacingID = newProps.findIndex(
      (ele: any) => ele.id == UFeditComponents.id
    );
    console.log(replacingID);
    if (replacingID >= 0) newProps.splice(replacingID, 1, UFeditComponents);
    console.log(allUFNode);
    console.log(newProps);
    disPatch(setUFNode(newProps));
  }

  return (
    <div className=" flex flex-col w-[310px] h-[90vh]  bg-gray-200 ">
      {UFeditComponents.type == "NavBar" ? (
        <div className="flex flex-col bg-gray-200   overflow-x-auto p-2 gap-3">
          <div>{UFeditComponents.id}</div>
          <div className="w-full h-9 bg-blue-500 flex justify-center items-center text-slate-200 text-[32px] rounded-lg">
            {UFeditComponents.type}
          </div>
          <div className="h-8 my-2">
            <Input
              // rounded
              // bordered
              label="Brand"
              // placeholder="LoGo"
              color="primary"
              name="Brand"
              onChange={(e) => handleChange(e.target)}
              value={UFeditComponents?.property?.NavBarBrand?.Value}
            />
          </div>
          {UFeditComponents.property.NavBarContent.Items.map(
            (ele: any, id: any) => (
              <div key={id} className="flex">
                <Input
                  type="email"
                  placeholder=""
                  labelPlacement="outside"
                  className="w-[200px]"
                  value={ele}
                  // onChange={() => {
                  //   changeName(topBarData.Items, id, ele);
                  // }}
                  // startContent={
                  //   ele + "sdfgsdfgsdfg"
                  //   // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                />
                <div className="flex justify-between items-center gap-2">
                  <FaChevronCircleUp
                    size={20}
                    onClick={() => changePosition(id, id - 1)}
                  />
                  <FaChevronCircleDown
                    size={20}
                    onClick={() => changePosition(id, id + 1)}
                  />
                  <TiDeleteOutline
                    size={20}
                    onClick={() => deletePosition(id)}
                  />
                </div>
              </div>
            )
          )}
          <div>
            <Button
              onClick={() => {
                postProps();
              }}
            >
              save
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-gray-200  w-[310px] h-[88vh] overflow-x-auto p-2">
          <div>Node : {UFeditComponents.type}</div>
          <div>Process</div>
        </div>
      )}
      {/* <div>
        <Button className="" onPress={onOpen} color="secondary">
          showJson
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                HI Great
              </ModalHeader>
              <ModalBody>
                <JSONTree data={UFeditComponents} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
}

// "use client";
// import React, { useEffect } from "react";
// import { SketchPicker } from "react-color";
// import { useState } from "react";
// import { Button, Input, Modal } from "@nextui-org/react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaChevronCircleUp } from "react-icons/fa";
// import { FaChevronCircleDown } from "react-icons/fa";
// import { TiDeleteOutline } from "react-icons/ti";
// import { setUFNodeNavBar, setTopBarData } from "../StateManage/UINodeSlice";
// import { JSONTree } from "react-json-tree";
// import {
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@nextui-org/react";
// import { readReddis, writeReddis } from "../utilsFunctions/apiCallUnit";
// export default function Properties() {
//   const selNodes = useSelector((state: any) => state.UFNodes.editComponents);

//   console.log(selNodes);

//   const disPatch = useDispatch();
//   const [editBrand, seteditBrand] = useState(
//     selNodes.property.NavBarBrand.Value
//   );

//   function handleChange(e: any) {
//     seteditBrand(e.value);
//   }
//   const AppNVersion = useSelector((state: any) => state.UFNodes.AppNVersion);

//   async function postProps() {}

//   return (
//     <div className=" border-[2px] flex flex-col">
//       {selNodes.type == "NavBar" ? (
//         <div className="flex flex-col bg-gray-200  w-[310px] h-[88vh] overflow-x-auto p-2 gap-3">
//           <div>{selNodes.id}</div>
//           <div className="w-full h-9 bg-blue-500 flex justify-center items-center text-slate-200 text-[32px] rounded-lg">
//             {selNodes.type}
//           </div>
//           <div className="h-8 my-2">
//             <Input
//               // rounded
//               // bordered
//               label="Brand"
//               // placeholder="LoGo"
//               color="primary"
//               name="Brand"
//               onChange={(e) => handleChange(e.target)}
//               value={editBrand}
//               // value={selNodes?.property?.NavBarBrand?.Value}
//             />
//           </div>
//           <div>
//             <Button
//               onClick={() => {
//                 postProps();
//               }}
//             >
//               save
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col bg-gray-200  w-[310px] h-[88vh] overflow-x-auto p-2">
//           <div>Node : {selNodes.type}</div>
//           <div>Process</div>
//         </div>
//       )}
//       {/* <div>
//         <Button className="" onPress={onOpen} color="secondary">
//           showJson
//         </Button>
//       </div>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 HI Great
//               </ModalHeader>
//               <ModalBody>
//                 <JSONTree data={selNodes} />
//               </ModalBody>
//             </>
//           )}
//         </ModalContent>
//       </Modal> */}
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { SketchPicker } from "react-color";
// import { useState } from "react";
// import { Button, Input, Modal } from "@nextui-org/react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaChevronCircleUp } from "react-icons/fa";
// import { FaChevronCircleDown } from "react-icons/fa";
// import { TiDeleteOutline } from "react-icons/ti";
// import { setTopBarData } from "../StateManage/UINodeSlice";
// import { JSONTree } from "react-json-tree";
// import {
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@nextui-org/react";
// export default function Properties() {
//   const selNodes = useSelector((state: any) => state.UFNodes.editComponents);
//   const topBarData = useSelector((state: any) => state.UFNodes.topBarData);
//   const [newElementToggle, setNewElementToggle] = useState(false);
//   const [newItem, setNewItem] = useState("");
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [color, setColor] = useState("#db0b0b");
//   const [showColorPicker, setShowColorPicker] = useState(false);

//   console.log(selNodes);

//   const disPatch = useDispatch();

//   function handleChange(e: any) {
//     disPatch(setTopBarData({ ...topBarData, [e.name]: e.value }));
//   }

//   function changePosition(array, fromIndex, toIndex) {
//     if (
//       fromIndex < 0 ||
//       fromIndex >= array.length ||
//       toIndex < 0 ||
//       toIndex >= array.length
//     ) {
//       console.error("Index out of bounds");
//       return array;
//     }

//     // Create a copy of the array
//     const newArray = array.slice();

//     // Remove the element from the 'fromIndex' position
//     const element = newArray.splice(fromIndex, 1)[0];

//     // Insert the element at the 'toIndex' position
//     newArray.splice(toIndex, 0, element);

//     disPatch(setTopBarData({ ...topBarData, Items: newArray }));
//   }

//   function deletePosition(array, delIndex) {
//     if (delIndex < 0 || delIndex >= array.length) {
//       console.error("Index out of bounds");
//       return array;
//     }

//     // Create a copy of the array
//     const newArray = array.slice();

//     newArray.splice(delIndex, 1);
//     console.log(newArray);

//     disPatch(setTopBarData({ ...topBarData, Items: newArray }));
//   }

//   function changeName(array, Index, ele) {
//     if (Index < 0 || Index >= array.length) {
//       console.error("Index out of bounds");
//       return array;
//     }
//     const newArray = array.slice();

//     newArray.splice(Index, 1, ele);
//     console.log(newArray);

//     disPatch(setTopBarData({ ...topBarData, Items: newArray }));
//   }

//   function addItems() {
//     const newArray = topBarData.Items.slice();

//     newArray.splice(newArray.length, 0, newItem);

//     disPatch(setTopBarData({ ...topBarData, Items: newArray }));
//   }
//   const handleButtonClick = () => {
//     setShowColorPicker(!showColorPicker);
//   };
//   const handleColorPickerChange = (color) => {
//     setColor(color.hex);
//     setShowColorPicker(false);
//   };

//   const textStyle = {
//     backgroundColor: color,
//     color: "white", // Or any other color for text contrast
//     padding: "5px 10px",
//     borderRadius: "4px",
//     border: "none",
//     marginBottom: "10px",
//   };
//   const handleOkButtonClick = () => {
//     setShowColorPicker(false);
//   };

//   return (
//     <div className=" border-[2px] flex flex-col">
//       {selNodes.type == "NavBar" ? (
//         <div className="flex flex-col bg-gray-200  w-[310px] h-[88vh] overflow-x-auto p-2 gap-3">
//           <div>{selNodes.id}</div>
//           <div className="w-full h-9 bg-blue-500 flex justify-center items-center text-slate-200 text-[32px] rounded-lg">
//             {selNodes.type}
//           </div>
//           <div className="h-8 my-2">
//             <Input
//               // rounded
//               // bordered
//               label="Brand"
//               placeholder="Primary"
//               color="primary"
//               name="Brand"
//               onChange={(e) => handleChange(e.target)}
//               value={topBarData.Brand}
//             />
//           </div>
//           <div className=" flex flex-col gap-2 py-2">
//             {topBarData.Items.map((ele: any, id: any) => (
//               <div key={id} className="flex">
//                 <Input
//                   type="email"
//                   placeholder=""
//                   labelPlacement="outside"
//                   className="w-[200px]"
//                   value={ele}
//                   onChange={() => {
//                     changeName(topBarData.Items, id, ele);
//                   }}
//                   // startContent={
//                   //   ele + "sdfgsdfgsdfg"
//                   //   // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   // }
//                 />
//                 <div className="flex justify-between items-center gap-2">
//                   <FaChevronCircleUp
//                     size={20}
//                     onClick={() => changePosition(topBarData.Items, id, id - 1)}
//                   />
//                   <FaChevronCircleDown
//                     size={20}
//                     onClick={() => changePosition(topBarData.Items, id, id + 1)}
//                   />
//                   <TiDeleteOutline
//                     size={20}
//                     onClick={() => deletePosition(topBarData.Items, id)}
//                   />
//                 </div>
//               </div>
//             ))}
//             {newElementToggle && (
//               <div>
//                 <Input
//                   type="email"
//                   placeholder=""
//                   labelPlacement="outside"
//                   className="w-[200px]"
//                   onChange={(e) => setNewItem(e.target.value)}
//                 />
//                 <Button onClick={() => addItems()}>Save</Button>
//               </div>
//             )}
//             <div>
//               <Button onClick={() => setNewElementToggle(true)}>add</Button>
//             </div>
//           </div>
//           <div>
//             <Button
//               style={{ backgroundColor: color }}
//               onClick={handleButtonClick}
//             >
//               {color}
//             </Button>
//             {showColorPicker && (
//               <div>
//                 <SketchPicker
//                   color={color}
//                   onChange={handleColorPickerChange}
//                 />
//               </div>
//             )}
//           </div>

//           {/* <div>
//           <Button onClick={() => handleSubmit()}>Submit</Button>
//         </div> */}
//         </div>
//       ) : (
//         <div className="flex flex-col bg-gray-200  w-[310px] h-[88vh] overflow-x-auto p-2">
//           <div>Node : {selNodes.type}</div>
//           <div>Process</div>
//         </div>
//       )}
//       <div>
//         <Button className="" onPress={onOpen} color="secondary">
//           showJson
//         </Button>
//       </div>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 HI Great
//               </ModalHeader>
//               <ModalBody>
//                 <JSONTree data={selNodes} />
//               </ModalBody>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }
