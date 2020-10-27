import React from "react";
import "../style/nav.css";
export default function Nav() {
  const tampilkanSidebar = () => {
    document.querySelector(".nav-item").classList.toggle("tampil");
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 80) {
      document.querySelector("nav").classList.add("active");
    } else {
      document.querySelector("nav").classList.remove("active");
    }
  });
  return (
    <React.Fragment>
      <nav className="container">
        <div className="nav-brand">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M33.094 17.2768C33.094 26.3904 25.706 33.7785 16.5923 33.7785C7.47872 33.7785 0.0906677 26.3904 0.0906677 17.2768C0.0906677 8.1632 7.47872 0.775146 16.5923 0.775146C25.706 0.775146 33.094 8.1632 33.094 17.2768Z"
                fill="white"
              />
              <path
                d="M18.7723 18.7837L23.058 14.6852C22.1678 11.2139 18.6321 9.12163 15.1609 10.0118C13.5977 10.4127 12.24 11.3818 11.3528 12.7298C11.4191 12.7281 18.7723 18.7837 18.7723 18.7837Z"
                fill="#2670FA"
              />
              <path
                d="M14.1457 13.5048L14.1455 13.5055C13.3266 12.9984 12.3822 12.7303 11.4189 12.7316C11.3967 12.7316 11.3748 12.733 11.3526 12.7332C8.48736 12.7687 6.19338 15.1202 6.22886 17.9855C6.24172 19.0248 6.56647 20.0363 7.16101 20.8889L13.5817 20.0848L18.5042 16.1155L14.1457 13.5048Z"
                fill="#2670FA"
              />
              <path
                d="M23.0578 14.6842C22.9636 14.6779 22.8689 14.6736 22.7731 14.6736C22.1982 14.673 21.6292 14.7905 21.1015 15.0186L21.1014 15.0182L18.5042 16.1111L21.3674 19.6478L26.486 20.8921C27.5906 18.8414 26.8237 16.2836 24.773 15.179C24.2431 14.8936 23.6583 14.7249 23.0578 14.6842V14.6842H23.0578Z"
                fill="#2670FA"
              />
              <path
                d="M7.16093 20.8817C8.1304 22.2755 9.72102 23.1062 11.4189 23.1053H22.773C24.3241 23.1058 25.7501 22.2547 26.4859 20.8893L18.5041 16.1083L7.16093 20.8817Z"
                fill="#2670FA"
              />
            </svg>
            Cloudify
          </a>
        </div>
        <div className="nav-item">
          <a className="nav-link">
            Home
          </a>
          <a className="nav-link">
            About
          </a>
          <a className="nav-link">
            Products
          </a>
          <a className="nav-link">
            Pricing
          </a>
          <a className="nav-link">
            Partnership
          </a>
          <a className="nav-link">
            Contact
          </a>
        </div>
        <div className="toggle-nav" onClick={tampilkanSidebar}>
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </nav>
    </React.Fragment>
  );
}
