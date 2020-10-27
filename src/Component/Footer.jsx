import React from 'react'
import "../style/footer.css"
import Cloud from "../image/cloud.svg"
export default function Footer() {
  return (
    <React.Fragment>
      <footer className="container">
        <div className="desc">
          <div className="brand">
            <img src={Cloud} alt="" /> Cloudify
          </div>
          <p>
            Cloudify is a large data storage area that can help your team work
            on projects.
          </p>
        </div>
        <div className="link-list">
          <div className="product">
            <h3>Our Product</h3>
            <a>Features</a>
            <a>Software</a>
            <a>Aplication</a>
            <a>Privacy</a>
            <a>Pricing</a>
          </div>
          <div className="package">
            <h3>Package Options</h3>
            <a>Personal</a>
            <a>Business</a>
            <a>School</a>
            <a>Enterprise</a>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <a>Help Center</a>
            <a>Supports</a>
            <a>Careers</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
