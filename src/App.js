import React from "react";
import Nav from "./Component/Nav";
import Banner from "./Component/Banner";
import Business from "./Component/Business";
import About from "./Component/About";
import Testimonial from "./Component/Testimonial";
import Started from "./Component/Started";
import Footer from "./Component/Footer";
import "./style/main.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Business />
      <About />
      <Testimonial />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
