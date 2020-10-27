import React from "react";
import "../style/banner.css";
import BannerImage from "../image/dashboard.svg";
export default function Banner() {
  return (
    <React.Fragment>
      <div className="banner-section contaienr">
        <div className="caption">
          <h1>Find a Storage Place to Save Your Files</h1>
          <p>
            Cloudify is the world's first smart workspace data repository. We
            bring all your team content together while letting you use the tools
            you love. and you can organize and save your data.
          </p>
          <button>Get Started</button>
          <div className="see-more">
            <a href="#">
              See More
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                <path d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="banner-picture">
        <img src={BannerImage} alt="" />
      </div>
    </React.Fragment>
  );
}
