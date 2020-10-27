import React from "react";
import "../style/about.css";
import "../style/triangle.css";
import Men1 from "../image/men1.jpg";
import Men2 from "../image/men2.jpg";
import Men3 from "../image/men3.jpg";
import ManageImage from "../image/manage.svg";
import CreateImage from "../image/create.svg";
export default function About() {
  return (
    <React.Fragment>
      <div className="about container">
        <Setup />
        <Create />
        <Manage />
      </div>
    </React.Fragment>
  );
}
// Caption template
function Caption(props) {
  return (
    <React.Fragment>
      <div className="caption">
        <p className="topic">{props.topic}</p>
        <h1 className="title">{props.title}</h1>
        <p className="detail">{props.detail}</p>
        <button>{props.btnAction}</button>
      </div>
    </React.Fragment>
  );
}
// Setup section
function Setup() {
  return (
    <React.Fragment>
      <div className="setup">
        <Caption
          topic="Setup Account"
          title="Setup Your Storage Acount"
          detail="Set up your storage account to optimize the data you store in cloudify storage. Many of the powerful
        tools and features in cloudify can support your productivity."
          btnAction="Get Started"
        />
        <Triangle />
      </div>
    </React.Fragment>
  );
}

// Setup - Right Side
function Triangle() {
  return (
    <React.Fragment>
      <div className="triangle">
        <div className="one">
          <div className="card">
            <img src={Men3} alt="" />
            <h4>Evan Dhorkin</h4>
            <p>Back End Developer</p>
            <button>Login</button>
          </div>
        </div>
        <div className="two">
          <div className="card">
            <img src={Men1} alt="" />
            <h4>Julian Wanders</h4>
            <p>Photographer</p>
            <button>Login</button>
          </div>
          <div className="card">
            <img src={Men2} alt="" />
            <h4>Jonas Kakaroto</h4>
            <p>Software Engineer</p>
            <button>Login</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
// Manage Section
function Create() {
  return (
    <React.Fragment>
      <div className="create">
        <img src={CreateImage} alt="" />
        <Caption
          topic="Create Storage"
          title="Create Your Cloud Storage Acount"
          detail="Set up your storage account to optimize the data you store in cloudify storage. Many of the powerful
        tools and features in cloudify can support your productivity."
          btnAction="Try it Now"
        />
      </div>
    </React.Fragment>
  );
}
// Manage Section
function Manage() {
  return (
    <React.Fragment>
      <div className="manage">
        <Caption
          topic="Manage Data"
          title="Manage Your Cloud Storage Data"
          detail="Set up your storage account to optimize the data you store in cloudify storage. Many of the powerful
        tools and features in cloudify can support your productivity."
          btnAction="Manage Now"
        />
        <img src={ManageImage} alt="" />
      </div>
    </React.Fragment>
  );
}
