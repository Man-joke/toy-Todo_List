import React from "react";
import TimeSet from "./TimeSet";

import "../scss/left.scss";
import FamousApi from "./FamousApi";

const Left = () => {
  return (
    <section className="left-section">
      <div className="info">
        <div className="nickName">
          <h2>HELLO</h2>
          <p>MANJOCK</p>
        </div>
        <div className="timeset">
          <TimeSet />
        </div>
      </div>
      <div className="famouse" >
        <FamousApi />
      </div>
    </section>
  );
};

export default Left;
