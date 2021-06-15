import React from "react";

function Banner() {
  return (
    <div
      className='relative align-middle font-Mulish'
      style={{ fontFamily: "mulish" }}
    >
      <div
        style={{
          backgroundImage: " url('./images/banner.png')",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          boxSizing: "border-box",
          display: "block",
          paddingTop: "73px",
          paddingLeft: "65px",
        }}
      >
        <div
          className=' text-white text-8xl font-black  mt-4 font-mulish'
          style={{
            fontWeight: "900",
            fontSize: "5vh",
          }}
        >
          Events & News
        </div>
        <div
          className=' text-white  text-lg mt-4  pb-16'
          style={{
            fontWeight: "700",
          }}
        >
          Learn, Compete & Grow
        </div>
      </div>
    </div>
  );
}

export default Banner;

/**
 *  <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading='lazy' src='https://links.papareact.com/gi1' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/6ff' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/7ma' />
        </div>
      </Carousel>
    </div>
  );
 * 
 */
