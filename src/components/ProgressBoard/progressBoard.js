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
  const { annualAmount } = props;

  return (
    <>
      <div className="progress-container d-flex flex-direction-column align-items-center">
        <h1 className="progress-title">您的進度</h1>
        <h4 className="progress-subtitle-title">您的購買讓我們越來越熟識</h4>
        <div className="progress-circle">
          <div className="circle">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={(annualAmount * 100) / 50000}
              duration={3}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                return (
                  <CircularProgressbarWithChildren
                    value={value}
                    strokeWidth={3}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#555555",
                      pathColor: "#f7b66c",
                      trailColor: "#fff",
                    })}
                  >
                    <h3>{`${Math.round(value)}%`}</h3>
                    {value >= 100 ? (
                      <p className="text-center">您已達標</p>
                    ) : (
                      <p className="text-center">一步之遙</p>
                    )}
                    <p className=" annual-amount d-flex align-items-end justify-content-center">
                      本年度您已消費
                      <span className="d-flex align-items-end justify-content-end">
                        {" "}
                        {Math.round((value * 50000) / 100)}{" "}
                      </span>
                      元
                    </p>
                  </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ProgressBoard);
