import React from 'react'
import "../style/started.css"
import StartedImage from "../image/started-image.svg";
export default function Started() {
  return (
    <React.Fragment>
      <div className="started container">
        <div className="box">
          <div className="caption">
            <h1>Let's Start Using Cloudify</h1>
            <p>
              Let's optimize your data storage by using a product from Cloudify
            </p>
            <div className="action">
              <button className="primary">Get Started</button>
              <button className="secondary">Contact Us</button>
            </div>
          </div>
          <div className="picture">
            <img src={StartedImage} alt=""/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
