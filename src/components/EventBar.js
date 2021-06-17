import React, {  useContext, useState } from "react";
import { FilterContext } from "./context/Filters";

import Event from "./subComp/Event";

const EventBar = () => {
  const [selectedEv, updateSelEvent] = useState("");
  const [Filter, updateFilters] = useContext(FilterContext);

  const toggleSelectEvent = (evAPIString, evName, isSelected) => {
    var Ename = Filter.event;
    if (isSelected) {
      Ename = evAPIString;
    } else {
      Ename = "";
    }
    updateFilters((prevFilters) => ({
      ...prevFilters,
      event: Ename,
    }));
    updateSelEvent(evName);
    console.log(Ename);
  };

  return (
    <div className='flex justify-evenly pt-2 pb-2 bg-green-500 overflow-x-auto  overflow-y-hidden whitespace-nowrap w-50'>
      <Event
        
        name='Activities'
        apiString='ACTIVITIES'
        icon='calendar'
        isSelected={toggleSelectEvent}
      />

      <Event
        name='Coding'
        icon='code'
        apiString='CODING_EVENT'
        isSelected={toggleSelectEvent}
      />

      <Event
        name='Webinars'
        icon='web'
        apiString='WEBINAR'
        isSelected={toggleSelectEvent}
      />

      <Event
        name='BootCamp'
        icon='academic'
        apiString='BOOTCAMP_EVENT'
        isSelected={toggleSelectEvent}
      />

      <Event
        name='Workshop'
        icon='desktop'
        apiString='WORKSHOP'
        isSelected={toggleSelectEvent}
      />
    </div>
  );
};

export default EventBar;
