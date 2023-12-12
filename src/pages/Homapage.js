import React from "react";
import "./Homapage.css";
import Head from "../components/Header";
import Image from "../pictures/BG.png";
import Footer from "../components/Footer";

function Homapage() {
  return (
    <div>
      <Head />
      <img src={Image} className="image" />
      <Footer />
    </div>
  );
}

export default Homapage;
