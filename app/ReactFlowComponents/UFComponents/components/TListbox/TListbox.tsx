"use client"
import React from "react";
import { Listbox,  ListboxSection,  ListboxItem} from "@nextui-org/react";

const Tlistbox =()=>{
    return(
        
      <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
    

    )
}
export default Tlistbox