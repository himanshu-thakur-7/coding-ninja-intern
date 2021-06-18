import React from "react";
import moment from "moment";
import CardTag from "./CardTag";
function Item({
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
}) {
  const convertUnixToDate = (unixTime) => {
    // var s = new Date(unixTime)
    // var formatted = s.format("dd.mm.yyyy hh:MM")
    var dateString = moment.unix(unixTime).format("hh:mm A, d MMM yyyy ");
    console.log(card_tags);
    return dateString;
    // console.log(s);
  };
  return (
    <div
      className='flex flex-col m-5 bg-white z-10 overflow-hidden cursor-pointer'
      style={{
        backgroundColor: "white",
      }}
    >
      <img
        src={cover_picture}
        height={800}
        className='object-cover'
        style={{ height: "24vh" }}
      />
      <div className='pt-4 pl-4 pr-6'>
        <h4>{name}</h4>
        <div className='flex flex-row justify-start space-x-10 pt-8'>
          <div>
            <h3 className='text-sm text-gray-600'>Starts On</h3>
            <div>{convertUnixToDate(start_time)}</div>
          </div>
          <div>
            <h3 className='text-sm text-gray-600'>Entry Fee</h3>
            <div>{fees === 0 ? "Free" : fees}</div>
          </div>
          <div>
            <h3 className='text-sm text-gray-600'>Venue</h3>
            <div>{venue}</div>
          </div>
        </div>
        <hr className='w-full mt-4' />
        <div className='pt-6 text-sm text-gray-600'>
          <h3>{short_desc}</h3>
        </div>

        <div
          className='flex items-baseline mt-3 '
          style={{ width: "fit-content" }}
        >
          {card_tags
            .slice(0, Math.min(3, card_tags.length))
            .map((card, index) => {
              return <CardTag key={index} name={card} />;
            })}
          <div
            style={{
              color: "rgb(250,115,40)",
            }}
          >
            {card_tags.length > 3 ? (
              <h4>+{card_tags.length - 3} more</h4>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <hr className='w-full mt-4 h-0.5' />
      </div>
    </div>
  );
}

export default Item;
