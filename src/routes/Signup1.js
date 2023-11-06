import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Signup from "../components/Signup";
function Home() {
  return (
    <>
    <Navbar/>
      <Signup/>
    <Footer/>
    </>

  );
}

export default Home;