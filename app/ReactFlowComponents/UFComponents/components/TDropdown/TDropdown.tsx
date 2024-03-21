import React from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem,Button} from "@nextui-org/react";
import { PiNotepadDuotone } from "react-icons/pi";
const Tdropdown =()=>{
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    
    return(
        <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
      <DropdownSection title="Actions" showDivider>  
        <DropdownItem
            key="new"
            shortcut="⌘N"
            description="Create a new file"
            startContent={<PiNotepadDuotone className={iconClasses} />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            shortcut="⌘C"
            description="Copy the file link"
            startContent={<PiNotepadDuotone className={iconClasses} />}
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            shortcut="⌘⇧E"
            description="Allows you to edit the file"
            startContent={<PiNotepadDuotone className={iconClasses} />}
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">  
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
            startContent={<PiNotepadDuotone className={(iconClasses)} />}
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
        

    )
}
export default Tdropdown