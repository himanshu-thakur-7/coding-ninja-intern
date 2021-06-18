import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Header({ toggle }) {
  const [isOpen, setState] = useState(false);
  return (
    <header className='flex bg-white flex-grow sticky top-0 left-0  z-20 '>
      <div className='flex flex-grow  items-center justify-between '>
        <div
          className=' cursor-pointer block lg:hidden pl-2'
          onClick={() => {
            setState(!isOpen);
            toggle();
          }}
        >
          {!isOpen ? <MenuIcon className='h-6 ' /> : <XIcon className='h-6' />}
        </div>
        <div className='ml-16'>
          <img src='./images/CNLOGO.svg' alt='' height='10px' width='70px' />
        </div>

        <div className='hidden lg:flex items-center   flex-grow'>
          <div className='flex items-center space-x-4  pl-16   text-xs font hover:'>
            <p className='link flex items-center'>Home</p>
            <p className='link'>Courses</p>
            <p className='link'>Practice</p>
            <p className='link'>Events</p>
            <p className='link'>Campus Ninjas</p>
            <p className='link'>Blog</p>
          
            <p>
              <img
                className=' link'
                src='./images/Nav-logo-2.svg'
                height='25.5px'
                width='105px'
                alt=''
              />
            </p>
          </div>
        </div>

        <div
          className='flex items-center -pr-3 '
          style={{
            fontSize: "14px",
          }}
        >
          <p>My Classroom</p>
          <div className=' h-12 w-12 mt-4 '>
            <div
              className='rounded-full h-8 w-8 '
              style={{
                backgroundImage:
                  "url('https://files.codingninjas.in/0000000000001270.png')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
