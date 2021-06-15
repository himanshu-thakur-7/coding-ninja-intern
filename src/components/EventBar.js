import React from "react";

import Event from "./subComp/Event";
function EventBar() {
  return (
    <div className='flex justify-evenly pt-2 pb-2 bg-green-500 overflow-x-auto  overflow-y-hidden whitespace-nowrap w-50'>
      <Event name='Activities' icon='calendar' />

      <Event name='Coding' icon='code' />

      <Event name='Webinars' icon='web' />

      <Event name='BootCamp' icon='academic' />

      <Event name='Workshop' icon='desktop' />
    </div>
  );
}

export default EventBar;
