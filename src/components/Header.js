import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className='flex bg-white flex-grow sticky top-0 left-0  z-20 '>
      <div className='flex flex-grow  items-center justify-between '>
        <div className=' cursor-pointer block lg:hidden pl-2'>
          <MenuIcon className='h-6 ' />
        </div>
        <div className='md:ml-16 sm:ml-20'>
          <img src='./images/CNLOGO.svg' alt='' height='10px' width='70px' />
        </div>

        <div className='hidden lg:flex items-center   flex-grow'>
          <div className='flex items-center space-x-4  pl-16   text-xs font'>
            <p className='link flex items-center'>Home</p>
            <p className='link'>Courses</p>
            <p className='link'>Practice</p>
            <p className='link'>Events</p>
            <p className='hidden md:inline-flex link'>Campus Ninjas</p>

            <p className='inline-flex link'>Blog</p>
            <img
              className='inline-flex link'
              src='./images/Nav-logo-2.svg'
              height='25.5px'
              width='105px'
              alt=''
            />
          </div>
        </div>

        <div className='flex items-center -pr-3'>
          <p className='pr-2'>My Classroom</p>
          <div className=' h-12 w-12 mt-4 '>
            <div className='rounded-full bg-green-500 h-8 w-8 '></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
