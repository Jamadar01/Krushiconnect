import React from "react";
import Navbar from "../components/navbar";
import About from "../components/About";
import Imge from '../components/imge';
const home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Imge/>
        <About/>
      </div>
    </>
  );
};

export default home;