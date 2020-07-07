import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../AnimatedProgressProvider/animatedProgressProvider";

//css
import "react-circular-progressbar/dist/styles.css";
import "./progressBoard.scss";

const ProgressBoard = (props) => {
  const { location, history } = props;
  const [percentage, setPercentage] = useState(66);
  const [annualAmount, setAnnualAmount] = useState(0);

  console.log(location);
  console.log(history.goBack)
  return (
    <>
      <div className="progress-container d-flex flex-direction-column align-items-center">
        <h1 className="progress-title">您的進度</h1>
        <h4 className="progress-subtitle-title">您的購買讓我們越來越熟識</h4>
        <div className="progress-circle">
          <div className="circle">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={percentage}
              duration={3}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren
                    value={value}
                    strokeWidth={3}
                    styles={buildStyles({
                      pathTransition: "none",
                      // strokeLinecap: "butt",
                      textColor: "#555555",
                      pathColor: "#f7b66c",
                      trailColor: "#fff",
                    })}
                  >
                    <h3>{`${roundedValue}%`}</h3>
                  </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider>
          </div>
          <p className="text-center">一步之遙</p>
        </div>
        <p className="text-center annual-amount">
          本年度您以消費<span> {annualAmount} </span>元
        </p>
      </div>
    </>
  );
};

export default withRouter(ProgressBoard);
