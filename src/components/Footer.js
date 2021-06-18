import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#1c0d04",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            width: "15%",
          }}
        >
          <div>
            <img
              src='https://files.codingninjas.in/cn-logo-dark-9824.svg'
              alt=''
              style={{
                height: "76px",
                marginTop: "19px",
                maxWidth: "100%",
              }}
            />
            <div
              style={{
                  
                display: "block",
                width: "262px",
                color: "#d2d2d6",
                fontSize: "12px",
              }}
            >
              Copyright©Sunrise Mentors Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
