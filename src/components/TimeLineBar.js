import React from "react";
import SubCat from "./subComp/SubCat";

const TimeLineBar = () => {
  return (
    <div
      className='flex lg:justify-evenly overflow-auto  overflow-y-hidden whitespace-nowrap w-full p-4 text-2xl'
      style={{
        backgroundColor: "rgb(242,242,242)",
        borderBottom: "solid 2px rgb(235,235,235)",
      }}
    >
      <SubCat name='Upcoming' icon='future' apiString='Upcoming' />

      <SubCat name='Archived' icon='past' apiString='Archived' />

      <SubCat name='All Time' icon='fav' apiString='All Time Favorites' />
    </div>
  );
};

export default TimeLineBar;
