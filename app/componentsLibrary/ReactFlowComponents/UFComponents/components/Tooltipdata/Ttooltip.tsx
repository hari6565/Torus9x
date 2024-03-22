import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

export default function Ttooltip(props) {
  return (
    <React.Fragment>
      <Tooltip content="I am a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </React.Fragment>
  );
}
