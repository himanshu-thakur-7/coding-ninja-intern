import React from "react";

function Item({
  id,
  name,
  short_desc,
  cover_picture,
  event_start_time,
  event_end_time,
  registration_start_time,
  registration_end_time,
  venue,
  fees,
  registration_status,
  registered_users,
  card_tags,
}) {
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 '>
      <img src={cover_picture} height={200} className=' w-full' />
    </div>
  );
}

export default Item;
