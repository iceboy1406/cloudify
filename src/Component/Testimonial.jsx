import React from "react";
import "../style/testimonial.css";
import Men1 from "../image/men1.jpg";
import Men2 from "../image/men2.jpg";
import Men3 from "../image/men3.jpg";
export default function Testimonial() {
  return (
    <React.Fragment>
      <div className="testimonial container">
        <div className="heading">
          <h1>What's Costumers Say?</h1>
          <p>
            Let's take a look at what our customers say about the products and
            services provided by us.
          </p>
        </div>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <div className="picture">
              <img src={Men1} alt="" />
            </div>
            <h4>Julian Wanders</h4>
            <p className="job">Photographer</p>
            <p className="comment">
              "I really like the service from Cloudify. Besides being a good
              product, it also has a very responsible service"
            </p>
            <div className="line"></div>
          </div>
          <div className="testimonial-item">
            <div className="picture">
              <img src={Men2} alt="" />
            </div>
            <h4>Evan Dhorkin</h4>
            <p className="job">Backend Developer</p>
            <p className="comment">
              "I really like the service from Cloudify. Besides being a good
              product, it also has a very responsible service"
            </p>
            <div className="line"></div>
          </div>
          <div className="testimonial-item">
            <div className="picture">
              <img src={Men3} alt="" />
            </div>
            <h4>Jones Kakaroto</h4>
            <p className="job">Software Engineer</p>
            <p className="comment">
              "I really like the service from Cloudify. Besides being a good
              product, it also has a very responsible service"
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
