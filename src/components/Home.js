import React from "react";
import kha from ".././queb.png";

const Home = () => {
  return (
    <>
      <h1 className="title">QueB</h1>
      <h4 className="slogan">Mix Shape & Bake</h4>
      <img src={kha} alt="QB icon" className="qb"></img>
    </>
  );
};

export default Home;
