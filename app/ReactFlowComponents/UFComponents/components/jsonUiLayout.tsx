import React from "react";
import NavigationBar from "./Navdata/navbar";
import TableItems from "./Tabledata/tableItem";
import { getWidth } from "./utils";
import FormComponent from "./Form/FormComponent";
import SideNavbar from "./SIdebar/SideNavbar";
import CustomBreadcrumbs from "./Breadcrumbs/breadCrumbs";
import Ttoolltip from "./Tooltipdata/Ttooltip";
import TAccordian from "./TAccordion/TAccordion";
import TAutocomplete from "./TAutocomplete/TAutocomplete";
import Tavatar from "./TAvatar/TAvatar";
import Tbadge from "./TBadge/TBadge";
import Tcard from "./Tcard/Tcard";
import Tcheckbox from "./TCheckbox/TCheckbox";
import TCheckboxGroup from "./TCheckboxGroup/TCheckboxGroup";
import Tchip from "./Tchip/TChip";
import TCircularprogress from "./TCircularprogress/TCircularprogress";
import Tcode from "./TCode/TCode";
import Tdivider from "./TDivider/TDivider";
const JsonUiLayout = ({ json, width, height, stateTrack }: any) => {
  const CalculatePercent = (x, y) => {
    return (x / y) * 100 + "%";
  };

  const RenderComp = ({ componentData, id }) => {
    const {
      Component: ComponentName,
      props = [],
      styles = [],
      events = [],
      functions = [],
      items = [],
      currentPage,
      setCurrentPage,
    } = componentData;
    switch (componentData.type) {
      case "NavBar":
        return (
          <NavigationBar
            id={id}
            height={componentData.height}
            // stateTrack={stateTrack}
          />
        );
      case "Table":
        return (
          <TableItems height={componentData.height} stateTrack={stateTrack} />
        );
      case "Form":
        return (
          <FormComponent
            height={componentData.height}
            width={componentData.width}
            // stateTrack={stateTrack}
          />
        );
      case "Sidebarnav":
        return (
          <SideNavbar
            height={componentData.height}
            width={componentData.width}
            // stateTrack={stateTrack}
          />
        );
      case "CustomBreadcrumbs":
        return (
          <CustomBreadcrumbs
            items={items}
            // height={componentData.height}
            // stateTrack={stateTrack}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            props={props}
            styles={styles}
            events={events}
            functions={functions}
          />
        );
      case "ToolTip":
        return (
          <Ttoolltip
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Accordian":
        return (
          <TAccordian
          // height={componentData.height}
          // width={componentData.width}
          // stateTrack={stateTrack}
          />
        );
      case "AutoComplete":
        return (
          <TAutocomplete
          // height={componentData.height}
          // width={componentData.width}
          // stateTrack={stateTrack}
          />
        );
      case "Avatar":
        return (
          <Tavatar
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Badge":
        return (
          <Tbadge
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Card":
        return (
          <Tcard
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Checkbox":
        return (
          <Tcheckbox
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "CheckboxGroup":
        return (
          <TCheckboxGroup
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Chip":
        return (
          <Tchip
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Circularprogress":
        return (
          <TCircularprogress
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Code":
        return (
          <Tcode
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Divider":
        return (
          <Tdivider
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      default:
        return <p>D E F A U L T</p>;
    }
  };

  return (
    <div className="h-screen relative" style={{ width: width }}>
      {json.map((item, index) => {
        return (
          <div
            style={{
              position: "absolute",
              left: CalculatePercent(item.position.x, width),
              top: item.position.y,
              width: CalculatePercent(item.width, width),
              height: item.height,
            }}
          >
            <RenderComp componentData={item} id={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default JsonUiLayout;
