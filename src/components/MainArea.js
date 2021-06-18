import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "./context/Filters";
import Item from "./subComp/Item";
const MainArea = () => {
  const [Filter, _] = useContext(FilterContext);
  const [Itemdata, fillData] = useState([]);
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
        fillData(data.data.events);
        console.log(data.data.events[0]);
      } catch (e) {
        console.log(e.Error);
      }
    };
    fetchData();
  }, [Filter]);

  return (
    <div className='grid grid-flow-row-dense  lg:grid-cols-1 xl:grid-cols-2  mx-auto'>
      {Itemdata.map(
        ({
          id,
          name,
          short_desc,
          cover_picture,
          event_start_time,
          event_end_time,
          registration_start_time,
          registration_end_time,
          start_time,
          venue,
          fees,
          registration_status,
          registered_users,
          card_tags,
        }) => (
          <Item
            key={id}
            id={id}
            name={name}
            short_desc={short_desc}
            cover_picture={cover_picture}
            event_start_time={event_start_time}
            event_end_time={event_end_time}
            registration_start_time={registration_start_time}
            registration_end_time={registration_end_time}
            start_time={start_time}
            venue={venue}
            fees={fees}
            registration_status={registration_status}
            registered_users={registered_users}
            card_tags={card_tags}
          />
        )
      )}
    </div>
  );
};

export default MainArea;
