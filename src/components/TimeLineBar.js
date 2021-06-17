import React, {  useContext } from "react";
import SubCat from "./subComp/SubCat";
import { FilterContext } from "./context/Filters";

const TimeLineBar = () => {
  const [Filter, updateFilters] = useContext(FilterContext);

  const toggleTimeLineEntry = (tlName, isSelected) => {
    let TLine = Filter.timeLine;
    if (isSelected) {
      TLine = tlName;
    } else {
      TLine = "";
    }
    updateFilters((prevFilters) => ({
      ...prevFilters,
      timeLine: TLine,
    }));
    console.log(TLine);
  };

  return (
    <div className='flex justify-around pt-2 pb-2 bg-blue-300'>
      <SubCat
        name='Upcoming'
        icon='future'
        apiString='Upcoming'
        isSelected={toggleTimeLineEntry}
      />

      <SubCat
        name='Archived'
        icon='past'
        apiString='Archived'
        isSelected={toggleTimeLineEntry}
      />

      <SubCat
        name='All Time'
        icon='fav'
        apiString='All Time Favorites'
        isSelected={toggleTimeLineEntry}
      />
    </div>
  );
};

export default TimeLineBar;
