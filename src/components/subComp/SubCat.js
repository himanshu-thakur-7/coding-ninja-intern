import React, { useEffect, useState, useContext } from "react";
import { FilterContext } from "../context/Filters";

import {
  RewindIcon,
  FastForwardIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const SubCat = (props) => {
  const [Filters, updateFilters] = useContext(FilterContext);
  const [isSelected, setStatus] = useState(false);
  const subCat = Filters.timeLine;

  useEffect(() => {
    setStatus(subCat === props.apiString);
  }, [Filters]);

  const renderIcon = (icon) => {
    switch (icon) {
      case "future":
        return <FastForwardIcon className='pl-3' style={{ height: "20px" }} />;

      case "past":
        return <RewindIcon className='pl-3' style={{ height: "20px" }} />;

      case "fav":
        return <HeartIcon className='pl-3' style={{ height: "20px" }} />;
    }
  };

  const toggleSelection = () => {
    let setVal = true;
    if (isSelected) {
      setVal = false;
    }
    setStatus(setVal);
    updateFilters((prevFilters) => ({
      ...prevFilters,
      timeLine: props.apiString,
    }));
  };

  return (
    <div className='flex items-center cursor-pointer' onClick={toggleSelection}>
      <p
        style={{
          color: isSelected ? "rgb(250,115,40)" : "rgb(158,158,158)",
        }}
      >
        {props.name}
      </p>
      <div
        style={{
          color: isSelected ? "rgb(250,115,40)" : "rgb(158,158,158)",
        }}
      >
        {" "}
        {renderIcon(props.icon)}
      </div>
    </div>
  );
};
export default SubCat;
