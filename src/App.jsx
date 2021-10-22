import React from "react";
import Data from "./Data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Tempdata from "./Tempdata";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Data /> */}
      <Tempdata />
      <Footer />
    </>
  );
};

export default App;
