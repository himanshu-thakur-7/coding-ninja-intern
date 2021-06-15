import React from "react";
import EventBar from "./EventBar";
import TimeLineBar from "./TimeLineBar";
import TagsArea from "./TagsArea";
import MainArea from "./MainArea";

function ShowCase() {
  return (
    <div
      style={{
        margin: "5% 10%",
        backgroundColor: "rgb(255,0,0)",
        height: "100%",
        height: "auto !important",
        minHeight: "100%",
      }}
    >
      <EventBar />
      <TimeLineBar />
      <div className='flex '>
        <MainArea />
        <TagsArea />
      </div>
    </div>
  );
}

export default ShowCase;
