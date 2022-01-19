import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const history = useNavigate();
  return (
    <div
      className={`${props.section.size} menu-item`}
      onClick={() => {
        history(`/${props.section.linkUrl}`);
      }}
    >
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
