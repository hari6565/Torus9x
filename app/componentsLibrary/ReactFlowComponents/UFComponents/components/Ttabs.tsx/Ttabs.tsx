"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function Ttabs({height , width , stateTrack}) {
  const data = [
    {
      tabsTitle : "Pictures",
      cardData : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
    },
    {
      tabsTitle : "Videos",
      cardData : "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"    },
    {
      tabsTitle : "Music",
      cardData : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
    },
    {
      tabsTitle : "Library",
      cardData : "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
    },
    {
      tabsTitle : "Documents",
      cardData : " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return (
    <div className="flex w-full flex-col" style={{height : height , width:width}}>
      <Tabs aria-label="Options">
      {data.map((item , index) => (
          <Tab key={index} title={item.tabsTitle}>
            <Card>
              <CardBody>{item.cardData}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>  
  );
}
