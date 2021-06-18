import React from "react";
import EventBar from "./EventBar";
import TimeLineBar from "./TimeLineBar";
import TagsArea from "./TagsArea";
import MainArea from "./MainArea";
import { FilterProvider } from "./context/Filters";
function ShowCase() {
  return (
    <div
      style={{
        margin: "5% 10%",
        height: "100%",
        height: "auto !important",
        minHeight: "100%",
      }}
    >
      <FilterProvider>
        <EventBar />
        <TimeLineBar />
        <div className='flex '>
          <MainArea />
          <TagsArea />
        </div>
      </FilterProvider>
    </div>
  );
}

export default ShowCase;
