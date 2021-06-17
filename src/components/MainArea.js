import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "./context/Filters";


const MainArea = () => {
  const [Filter, _] = useContext(FilterContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let API = " https://api.codingninjas.com/api/v3/events?";
        const Event = Filter.event;
        const TimeLine = Filter.timeLine;
        const TagList = Filter.tagsList;

        API += "event_category=";
        API += Event;
        API += "&event_sub_category=";
        API += TimeLine;
        API += "&tag_list=";

        TagList.forEach((tag) => {
          API += tag + ",";
        });
        API = API.slice(0, -1);

        API += "&offset=0";

        console.log(API);

        const response = await fetch(API);
        if (response.status >= 300) throw new Error(response.statusText);

        const data = await response.json();
        console.log(data.data.events);
      } catch (e) {
        console.log(e.Error);
      }
    };
    fetchData();
  }, [Filter]);

  return <div className='flex-grow '>MainArea</div>;
};

export default MainArea;
