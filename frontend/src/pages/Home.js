import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="box">
      <h2>Home</h2>
      <p>
        Welcome to the Home page! If you are interested in buying something,
        check out the <Link to="/products">Products</Link> page
      </p>
    </div>
  );
}

export default Home;
