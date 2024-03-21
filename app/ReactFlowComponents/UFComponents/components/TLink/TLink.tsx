"use client"
import React from "react";
import {Link,Button} from "@nextui-org/react";
const Tlink =()=>{
    return(
        <Button
      href="https://github.com/nextui-org/nextui"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
    >
      Button Link
    </Button>

    )
}
export default Tlink