import React from "react";

function Avatar({ name, img_url }) {
//   console.log(name);
//   console.log(img_url);
  if (img_url == null) {
    // console.log(img_url);
    img_url = "https://files.codingninjas.in/0000000000001270.png";
  }
//   console.log(img_url);
  return (
    <div  className=' h-8 w-8 mt-4 '>
      <div
        className='rounded-full h-6 w-6 '
        style={{
          backgroundImage: `url("${img_url}")`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default Avatar;
