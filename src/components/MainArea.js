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
      {Itemdata.length > 0 ? (
        Itemdata.map(
          ({
            id,
            name,
            short_desc,
            cover_picture,
            start_time,
            venue,
            fees,
            registered_users,
            card_tags,
            end_time,
            mobile_cover_picture,
          }) => (
            <Item
              key={id}
              id={id}
              name={name}
              short_desc={short_desc}
              cover_picture={cover_picture}
              start_time={start_time}
              venue={venue}
              fees={fees}
              registered_users={registered_users}
              card_tags={card_tags}
              end_time={end_time}
              mobile_cover_picture={mobile_cover_picture}
            />
          )
        )
      ) : (
        <div className='flex justify-items-center items-center ml-10'>
          <h1>No events found with the selected tags</h1>
        </div>
      )}
    </div>
  );
};

export default MainArea;
