import React from "react";

function CardTag({ name }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(238,238,238)",
        // width: "fit-content",
        wordWrap: "no-wrap",
        padding: "7px",
        margin: "20px 10px",
        color: "rgb(66,66,66)",
        marginBottom: "60px",
      }}
    >
      {name}
    </div>
  );
}

export default CardTag;
