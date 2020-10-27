import React from "react";
import "../style/business.css";
import Cloud from "../image/cloud.svg";
import Business1 from "../image/business1.svg";
import Business2 from "../image/business2.svg";
import Business3 from "../image/business3.svg";
import Business4 from "../image/business4.svg";
import Business5 from "../image/business5.svg";

export default function Business() {
  return (
    <React.Fragment>
      <div className="business-section container">
        <div className="cloud">
          <img src={Cloud} alt="" />
        </div>
        <div className="title">
          <h2>Join more than 100+ business services that entrust their services to us</h2>
        </div>
        <div className="business-list">
          <img src={Business1} alt=""/>
          <img src={Business2} alt=""/>
          <img src={Business3} alt=""/>
          <img src={Business4} alt=""/>
          <img src={Business5} alt=""/>
        </div>
      </div>
    </React.Fragment>
  );
}
