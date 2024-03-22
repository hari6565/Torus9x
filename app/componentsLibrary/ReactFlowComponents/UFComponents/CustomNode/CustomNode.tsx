import { Handle, Position, NodeResizer, useReactFlow } from "reactflow";
import { useCallback, useContext, useState } from "react";
// import kafka from "../../img/kafka-icon.svg";
// import { DarkmodeContext } from "../context/DarkmodeContext";
import { VscCode } from "react-icons/vsc";
import { TbLayoutNavbar } from "react-icons/tb";
import { TbBoxModel } from "react-icons/tb";
import { CiViewTable } from "react-icons/ci";
import { memo } from "react";
import NavigationBar from "../components/Navdata/navbar";
import TableItems from "../components/Tabledata/tableItem";
import FormComponent from "../components/Form/FormComponent";
import SideNavbar from "../components/SIdebar/SideNavbar";
import Ttooltip from "../components/Tooltipdata/Ttooltip";
import TAccordion from "../components/TAccordion/TAccordion";
import TAvatar from "../components/TAvatar/TAvatar";
import Tbadge from "../components/TBadge/TBadge";
import Tcard from "../components/Tcard/Tcard";
import Tcheckbox from "../components/TCheckbox/TCheckbox";
import TCheckboxGroup from "../components/TCheckboxGroup/TCheckboxGroup";
import Tchip from "../components/Tchip/TChip";
import Tcode from "../components/TCode/TCode";
import Tdivider from "../components/TDivider/TDivider";
import Tautocomplete from "../components/TAutocomplete/TAutocomplete";
import TCircularprogress from "../components/TCircularprogress/TCircularprogress";

export const NavBar = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <NavigationBar id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});

// export const Modal = memo(({ data, isConnectable, selected }) => {
//   // const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);
//   return (
//     <div className="custom-node-img">
//       {/* <NodeResizer
//         color="#ff0071"
//         isVisible={selected}
//         minWidth={100}
//         minHeight={30}
//       /> */}
//       <div
//         className="custom-node"
//         style={{
//           border: "1px solid" + data.nodeColor,
//           // backgroundColor: darkmode ? "transparent" : "#F1EFEF",
//           // boxShadow: `  0 0 10px 1px ${data.nodeColor}`,
//         }}
//       >
//         {
//           <span
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: data.label !== "" ? "3px" : "",
//               marginBottom: data.label !== "" ? "-5px" : "",
//             }}
//           >
//             <TbBoxModel color={data.nodeColor} size={60} />
//           </span>
//         }
//         <Handle
//           type="source"
//           position={Position.Right}
//           isConnectable={isConnectable}
//           className="custom-node-handle"
//           style={{
//             // transform: "translate(0px,-1px) ",
//             position: "absolute",
//             // width: "1px",
//             // height: "40%",
//             borderRadius: "50%",
//             backgroundColor: data.nodeColor,
//           }}
//         />
//         <Handle
//           type="target"
//           position={Position.Left}
//           id="a"
//           className="custom-node-handle"
//           style={{
//             // transform: "translate(0px,-1px) ",
//             position: "absolute",
//             // width: "1px",
//             // height: "40%",
//             borderRadius: "50%",
//             backgroundColor: data.nodeColor,
//           }}
//           isConnectable={isConnectable}
//         />
//         <div
//           style={{
//             width: "80%",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             color: "black",
//             textAlign: "center",
//           }}
//         >
//           <label
//             title={data.label}
//             style={{
//               fontSize: "8px",
//               color: "black",
//               fontFamily: "monospace",
//             }}
//             htmlFor=""
//           >
//             {data.label}
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// });

export const Table = memo(({ data, isConnectable, selected }: any) => {
  // const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={400}
      />
      <div>
        <TableItems />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});

export const Form = memo(({ data, isConnectable, selected }: any) => {
  // const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={300}
        minHeight={150}
      />
      <div>
        <FormComponent />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});

export const Sidebarnav = memo(({ data, isConnectable, selected }: any) => {
  // const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={300}
        minHeight={150}
      />
      <div>
        <SideNavbar />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});

export const TextUpdaterNode = memo(({ data, isConnectable }: any) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
});

export const Accordian = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <TAccordion id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});

export const TAutocomplete = memo(
  ({ id, data, isConnectable, selected }: any) => {
    return (
      <div className="custom-node-img" style={{ height: "100%" }}>
        <NodeResizer
          // lineStyle={{ border: "2px solid #ff0071" }}
          color="#ff0071"
          isVisible={selected}
          minWidth={700}
          minHeight={70}
        />
        <Tautocomplete id={id} />
        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
          className="custom-node-handle"
          style={{
            // transform: "translate(0px,-1px) ",
            position: "absolute",
            // width: "1px",
            // height: "40%",
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        />

        <Handle
          type="target"
          position={Position.Left}
          id="a"
          className="custom-node-handle"
          style={{
            // transform: "translate(0px,-1px) ",
            position: "absolute",
            // width: "1px",
            // height: "40%",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
          isConnectable={isConnectable}
        />
        <div
          style={{
            width: "80%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "black",
            textAlign: "center",
          }}
        >
          <label
            title={data.label}
            style={{
              // width:"100%",
              textAlign: "center",
              fontSize: "8px",
              color: "black",
              fontFamily: "monospace",
            }}
            htmlFor=""
          >
            {data.label}
          </label>
        </div>
      </div>
    );
  }
);
export const Avatar = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <TAvatar />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const Badge = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Tbadge id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const Card = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Tcard id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const Checkbox = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Tcheckbox id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const CheckboxGroup = memo(
  ({ id, data, isConnectable, selected }: any) => {
    return (
      <div className="custom-node-img" style={{ height: "100%" }}>
        <NodeResizer
          // lineStyle={{ border: "2px solid #ff0071" }}
          color="#ff0071"
          isVisible={selected}
          minWidth={700}
          minHeight={70}
        />
        <TCheckboxGroup id={id} />
        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
          className="custom-node-handle"
          style={{
            // transform: "translate(0px,-1px) ",
            position: "absolute",
            // width: "1px",
            // height: "40%",
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        />

        <Handle
          type="target"
          position={Position.Left}
          id="a"
          className="custom-node-handle"
          style={{
            // transform: "translate(0px,-1px) ",
            position: "absolute",
            // width: "1px",
            // height: "40%",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
          isConnectable={isConnectable}
        />
        <div
          style={{
            width: "80%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "black",
            textAlign: "center",
          }}
        >
          <label
            title={data.label}
            style={{
              // width:"100%",
              textAlign: "center",
              fontSize: "8px",
              color: "black",
              fontFamily: "monospace",
            }}
            htmlFor=""
          >
            {data.label}
          </label>
        </div>
      </div>
    );
  }
);
export const Chip = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Tchip id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const Circularprogress = memo(
  ({ id, data, isConnectable, selected }: any) => {
    return (
      <div className="custom-node-img" style={{ height: "100%" }}>
        <NodeResizer
          // lineStyle={{ border: "2px solid #ff0071" }}
          color="#ff0071"
          isVisible={selected}
          minWidth={700}
          minHeight={70}
        />
        <TCircularprogress id={id} />
        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
          className="custom-node-handle"
          style={{
            // transform: "translate(0px,-1px) ",
            position: "absolute",
            // width: "1px",
            // height: "40%",
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        />

        <Handle
          type="target"
          position={Position.Left}
          id="a"
          className="custom-node-handle"
          style={{
            // transform: "translate(0px,-1px) ",
            position: "absolute",
            // width: "1px",
            // height: "40%",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
          isConnectable={isConnectable}
        />
        <div
          style={{
            width: "80%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "black",
            textAlign: "center",
          }}
        >
          <label
            title={data.label}
            style={{
              // width:"100%",
              textAlign: "center",
              fontSize: "8px",
              color: "black",
              fontFamily: "monospace",
            }}
            htmlFor=""
          >
            {data.label}
          </label>
        </div>
      </div>
    );
  }
);
export const Code = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Tcode id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const Divider = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Tdivider id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
export const ToolTip = memo(({ id, data, isConnectable, selected }: any) => {
  return (
    <div className="custom-node-img" style={{ height: "100%" }}>
      <NodeResizer
        // lineStyle={{ border: "2px solid #ff0071" }}
        color="#ff0071"
        isVisible={selected}
        minWidth={700}
        minHeight={70}
      />
      <Ttooltip id={id} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="custom-node-handle"
        style={{
          // transform: "translate(0px,-1px) ",
          position: "absolute",
          // width: "1px",
          // height: "40%",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
          textAlign: "center",
        }}
      >
        <label
          title={data.label}
          style={{
            // width:"100%",
            textAlign: "center",
            fontSize: "8px",
            color: "black",
            fontFamily: "monospace",
          }}
          htmlFor=""
        >
          {data.label}
        </label>
      </div>
    </div>
  );
});
