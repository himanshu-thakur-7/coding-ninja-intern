import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../context/Filters";

import {
  CalendarIcon,
  DesktopComputerIcon,
  CodeIcon,
  AcademicCapIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

const Event = (props) => {
  const [isSelected, setStatus] = useState(false);
  const [Filters, updateFilters] = useContext(FilterContext);
  const event = Filters.event;
  useEffect(() => {
    setStatus(event === props.apiString);
  }, [Filters]);
  const renderIcon = (icon) => {
    switch (icon) {
      case "calendar":
        return (
          <CalendarIcon className='ht-6 pr-3' style={{ height: "20px" }} />
        );

      case "desktop":
        return (
          <DesktopComputerIcon
            className='ht-6 pr-3'
            style={{ height: "20px" }}
          />
        );
      case "code":
        return <CodeIcon className='ht-6 pr-3' style={{ height: "20px" }} />;
      case "academic":
        return (
          <AcademicCapIcon className='ht-6 pr-3' style={{ height: "20px" }} />
        );
      case "web":
        return (
          <GlobeAltIcon className='ht-6 pr-3' style={{ height: "20px" }} />
        );

      default:
        break;
    }
  };

  const toggleSelect = (e) => {
    let setVal = true;
    if (isSelected) {
      setVal = false;
    }

    setStatus(setVal);

    updateFilters((prevFilters) => ({
      ...prevFilters,
      event: props.apiString,
    }));
  };

  return (
    <div
      className='sm:pl-4 pr-4 flex items-center cursor-pointer'
      onClick={toggleSelect}
      style={{
        padding: "0px 20px",
      }}
    >
      <div
        style={{
          color: isSelected ? "rgb(250,115,40)" : "rgb(158,158,158)",
        }}
      >
        {renderIcon(props.icon)}
      </div>
      <p
        style={{
          color: isSelected ? "rgb(250,115,40)" : "rgb(158,158,158)",
        }}
      >
        {props.name}
      </p>
    </div>
  );
};

export default Event;

// {
//   this.props.name;
// }
