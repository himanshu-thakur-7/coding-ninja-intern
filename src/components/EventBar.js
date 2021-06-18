import React from "react";

import Event from "./subComp/Event";

const EventBar = () => {
  return (
    <div className='flex lg:justify-evenly overflow-auto  overflow-y-hidden whitespace-nowrap w-full p-4 text-2xl'>
      <Event name='Activities' apiString='ACTIVITIES' icon='calendar' />

      <Event name='Coding' icon='code' apiString='CODING_EVENT' />

      <Event name='Webinars' icon='web' apiString='WEBINAR' />

      <Event name='BootCamp' icon='academic' apiString='BOOTCAMP_EVENT' />

      <Event name='Workshop' icon='desktop' apiString='WORKSHOP' />
    </div>
  );
};

export default EventBar;
