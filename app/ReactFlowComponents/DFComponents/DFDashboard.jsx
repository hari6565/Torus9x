"use client";
import React, { useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import {
  // useNodesState,
  ReactFlow,
  ReactFlowProvider,
  Controls,
  Background,
  MiniMap,
  // useEdgesState,
  // addEdge,
  // updateEdge,
  // MarkerType,
} from "reactflow";

// import ReactFlowProvider from "reactflow";
// import ReactFlow from "reactflow";
// import { ContextMenu } from "../ReactFlowComponents/UFComponents/context/ContextMenu";

// import {
//   NavBar,
//   Table,
//   Form,
//   Sidebarnav,
//   TextUpdaterNode,
//   ToolTip,
//   Accordian,
//   TAutocomplete,
//   Avatar,
//   Badge,
//   Card,
//   Checkbox,
//   CheckboxGroup,
//   Chip,
//   Circularprogress,
//   Code,
//   Divider,
// } from "../ReactFlowComponents/UFComponents/CustomNode/CustomNode";
// // import MenuDetailsComponent from "./layout/ProcessFolwMenuDetails";
// import { useRef } from "react";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import "reactflow/dist/style.css";
// // import { Builder } from "./Customui/Builder";
// // import { getWidth } from "./components/utils";
// import { VscPreview } from "react-icons/vsc";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setEditComponents,
//   setNode,
//   setNodeNavBar,
//   setStateTrack,
// } from "../utilsFunctions/StateManage/UINodeSlice";
// import {
//   setPreView,
//   setPropsOpen,
// } from "../utilsFunctions/StateManage/NextUISlice";

// import { readReddis, writeReddis } from "../utilsFunctions/apiCallUnit";

// import { applyNodeChanges } from "reactflow";

export const UFDashboard = () => {
  // const disPatch = useDispatch();
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // const AppNVersion = useSelector((state) => state.UFNodes.AppNVersion);

  // const allNode = useSelector((state) => state.UFNodes.allNode);

  // async function GetJson() {
  //   try {
  //     const res = await readReddis("testUI").then((res) => JSON.parse(res));
  //     console.log(res);
  //     if (res) {
  //       setEdges(res?.[AppNVersion.appName]?.[AppNVersion.Version]?.edges);
  //       disPatch(
  //         setNode(res?.[AppNVersion.appName]?.[AppNVersion.Version]?.nodes)
  //       );
  //       console.log(allNode);
  //     }
  //   } catch (err) {
  //     console.log("error");
  //     disPatch(setNode([]));
  //   }
  // }

  // useEffect(() => {
  //   GetJson();
  // }, []);
  // const reactFlowWrapper = useRef(null);
  // const onNodesChange = (changes) => {
  //   disPatch(setNode(applyNodeChanges(changes, allNode)));
  // };

  // const [menu, setMenu] = useState(false);

  // const onDragOver = useCallback((event) => {
  //   event.preventDefault();
  //   event.dataTransfer.dropEffect = "move";
  //   console.log(event, "drag");
  // }, []);

  // const navigate = useRouter();

  // const NODE_TYPE = {
  //   NavBar: NavBar,
  //   Table: Table,
  //   Form: Form,
  //   Sidebarnav: Sidebarnav,
  //   newNode: TextUpdaterNode,
  //   ToolTip: ToolTip,
  //   Accordian: Accordian,
  //   AutoComplete: TAutocomplete,
  //   Avatar: Avatar,
  //   Badge: Badge,
  //   Card: Card,
  //   Checkbox: Checkbox,
  //   CheckboxGroup: CheckboxGroup,
  //   Chip: Chip,
  //   Circularprogress: Circularprogress,
  //   Code: Code,
  //   Divider: Divider,
  // };

  // const onNodeDragStop = (event, node) => console.log("drag stop", node);

  // const onDrop = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
  //     const type = event.dataTransfer.getData("application/reactflow");
  //     const name = event.dataTransfer.getData("application/name");
  //     // const roles = event.dataTransfer.getData("application/roles");
  //     // const rolesColor = event.dataTransfer.getData("application/roleColor");

  //     const position = reactFlowInstance.project({
  //       x: event.clientX - reactFlowBounds.left,
  //       y: event.clientY - reactFlowBounds.top,
  //     });
  //     const nodeDetails = type;

  //     if (nodeDetails == "NavBar") {
  //       const newNode = {
  //         id: uuidv4(),
  //         type: nodeDetails,
  //         position,
  //         parentId: [],
  //         data: {
  //           label: "",
  //           // nodeColor: rolesColor,
  //           // role: roles,
  //           height: "",
  //           width: "",
  //         },
  //         property: {
  //           name: "",
  //           description: "",
  //           nodeType: nodeDetails,
  //           NavBarBrand: {
  //             Value: "LOGO",
  //           },
  //           NavBarContent: {
  //             Items: ["home", "contacts"],
  //           },
  //         },
  //       };
  //       disPatch(setNode(allNode.concat(newNode)));
  //     } else {
  //       const newNode = {
  //         id: uuidv4(),
  //         type: nodeDetails,
  //         position,
  //         parentId: [],
  //         data: {
  //           label: "",
  //           // nodeColor: rolesColor,
  //           // role: roles,
  //           height: "",
  //           width: "",
  //         },
  //         property: {
  //           name: "",
  //           description: "",
  //           nodeType: nodeDetails,
  //         },
  //       };
  //       disPatch(setNode(allNode.concat(newNode)));
  //     }

  //     // disPatch(setNode(newNode));
  //   },
  //   [reactFlowInstance, allNode]
  // );

  // const onNodeContextMenu = useCallback(
  //   (event, node) => {
  //     event.preventDefault();
  //     const pane = reactFlowWrapper.current.getBoundingClientRect();

  //     setMenu({
  //       id: node.id,
  //       top: event.clientY < pane.height - 200 && event.clientY - 80,
  //       left: event.clientX < pane.width - 200 && event.clientX - 80,
  //       right:
  //         event.clientX >= pane.width - 200 && pane.width - event.clientX + 80,
  //       bottom:
  //         event.clientY >= pane.height - 200 &&
  //         pane.height - event.clientY + 80,
  //     });
  //   },
  //   [setMenu]
  // );
  // const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  // const settoggle = async () => {
  //   // disPatch(setStateTrack());
  //   console.log(AppNVersion);

  //   try {
  //     const Data = {
  //       [AppNVersion.appName]: {
  //         [AppNVersion.Version]: {
  //           nodes: allNode,
  //           edges,
  //           width: window.innerWidth,
  //           height: window.innerHeight,
  //         },
  //       },
  //     };
  //     console.log(JSON.stringify(Data));
  //     const res = await writeReddis("testUI", Data);
  //   } catch (err) {
  //     alert("error");
  //     return;
  //   }
  //   // return;
  //   navigate.push("/Builder");
  // };

  // const onNodeDrag = (e, node) => {
  //   if (node.position.x < 0) {
  //     node.position.x = 0;
  //   }
  //   if (node.position.y < 0) {
  //     node.position.y = 0;
  //   }
  //   let rightpos = node.position.x + node.width;
  //   if (rightpos >= window.innerWidth) {
  //     node.position.x = window.innerWidth - node.width;
  //   }

  //   const updatedElements = allNode.map((element) => {
  //     if (element.id === node.id) {
  //       return { ...element, position: node.position };
  //     }
  //     return element;
  //   });
  //   disPatch(setNode(updatedElements));
  // };

  // const deleteNode = (id, node) => {
  //   const oldNodes = allNode.slice();
  //   const index = allNode.findIndex((ele) => ele.id == id);
  //   if (index >= 0) {
  //     oldNodes.splice(index, 1);
  //     disPatch(setNode(oldNodes));
  //   }
  //   setMenu(null);
  // };

  // const isPreView = useSelector((state) => state.counter.isPreView);
  // const isPropsOpen = useSelector((state) => state.UFNodes.isPropsOpen);

  // function editNode(id, node) {
  //   disPatch(
  //     // setEditComponents(
  //     //   nodes.filter((node) => {
  //     //     if (node.id == id) {
  //     //       return node.type;
  //     //     }
  //     //   })
  //     // )
  //     setEditComponents(node)
  //   );
  //   if (!isPropsOpen) disPatch(setPropsOpen());
  //   console.log(node);
  //   setMenu(null);
  // }

  // // console.log(allNode);

  return (
    <ReactFlowProvider className="h-full w-full">
      <ReactFlow
        className="h-full w-full"
        style={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
        // onNodeDragStop={onNodeDragStop}
        // // onConnect={onConnect}
        // onlyRenderVisibleElements={false}
        // panOnDrag={false}
        // panOnScroll={true}
        // zoomOnScroll={false}
        // preventScrolling={false}
        // zoomOnPinch={false}
        // // ref={reactFlowWrapper}
        // nodes={allNode}
        // // edges={edges}
        // autoPanOnNodeDrag={false}
        // deleteNode={deleteNode}
        // onInit={setReactFlowInstance}
        // onDrop={onDrop}
        // onDragOver={onDragOver}
        // nodeTypes={NODE_TYPE}
        // deleteKeyCode={["Backspace", "Delete"]}
        // // selectKeyCode={["ctrl"]}
        // menu={menu}
        // onNodeContextMenu={onNodeContextMenu}
        // onPaneClick={onPaneClick}
        // // snapGrid={[15, 15]}
        // // snapToGrid={true}
        // // nodesDraggable={true}
        // onNodeDrag={onNodeDrag}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // // onEdgeUpdate={onEdgeUpdate}
        // // connectionLineStyle={connectionLineStyle}
      >
        {/* <div className="flex flex-row ">
              <div
                className=" absolute right-[70px] top-1 mt-1 p-1 bg-gray-400  hover:bg-gray-600
                  border-2 border-gray-400 text-white rounded w-15 text-center cursor-pointer z-50"
                onClick={settoggle}
              >
                <VscPreview color="white" />
              </div>
            </div>
            <Controls /> */}

        {/* {menu && (
              <ContextMenu
                node={allNode}
                onClick={onPaneClick}
                deleteNode={deleteNode}
                editNode={editNode}
                {...menu}
                setMenu={setMenu}
                // updatedNodeConfig={updatedNodeConfig}
              />
            )} */}
        <Background variant="dots" color="black" gap={25} size={2} />
        {/* <MiniMap /> */}
      </ReactFlow>
    </ReactFlowProvider>
  );
};
