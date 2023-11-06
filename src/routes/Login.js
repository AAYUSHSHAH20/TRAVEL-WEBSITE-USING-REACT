import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

import Login from "../components/Login";
function Home() {
  return (
    <>
    <Navbar/>
      <Login/>
    <Footer/>
    </>

  );
}

export default Home;