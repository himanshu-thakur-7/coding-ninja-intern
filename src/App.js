import { useState } from "react";
import "./styles/app.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";
import { div } from "prelude-ls";
function App() {
  const [isOpen, toggle] = useState(false);

  const toggle_menu = () => {
    toggle(!isOpen);
  };
  return (
    <div
      className=' bg-gray-200 font-body'
      style={{ fontFamily: "mulish", height: "100%" }}
    >
      {isOpen ? (
        <div className='z-0 opacity-75 bg-white p-6'>
          <p className='link flex items-center'>Home</p>
          <p className='link'>Courses</p>
          <p className='link'>Practice</p>
          <p className='link'>Events</p>
          <p className='link'>Campus Ninjas</p>
          <p>
            <img
              className='inline-flex link'
              src='./images/Nav-logo-2.svg'
              height='25.5px'
              width='105px'
              alt=''
            />
          </p>
        </div>
      ) : (
        <div></div>
      )}
      <Header toggle={toggle_menu} />
      <div className='ml-0  xl:ml-36 mr-0  xl:mr-36 bg-gray-50'>
        <Banner />
        <ShowCase />
        <Footer />
      </div>
    </div>
  );
}

export default App;
