import React from "react";
import "./menu-item.styles.scss";

const MenuItem = (props) => {
  //   console.log(props.section.title);
  return (
    <div className={`${props.section.size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `URL(${props.section.imgURL})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{props.section.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
