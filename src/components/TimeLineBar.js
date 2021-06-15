import React from "react";
import SubCat from "./subComp/SubCat"
function TimeLineBar() {
  return (
    <div className='flex justify-around pt-2 pb-2 bg-blue-300'>
      

      <SubCat name="Upcoming" icon = "future"/>


      <SubCat name="Archived" icon = "past"/>


      <SubCat name="All Time" icon = "fav"/>


    </div>
  );
}

export default TimeLineBar;
