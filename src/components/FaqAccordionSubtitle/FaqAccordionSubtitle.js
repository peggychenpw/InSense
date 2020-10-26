import React, { useState, useEffect } from "react";
import "./FaqAccordionSubtitle.scss";


const FaqAccordionSubtitle = (props) => {
  const { test } = props;
  const [titleDropDownToggle, setTitleDropDownToggle] = useState(false);
  const [contentDropDownToggle, setContentDropDownToggle] = useState(true);
  const [plusMinusCollapsed, setPlusMinusCollapsed] = useState(true);
  

  useEffect(() => {
    setTitleDropDownToggle(!titleDropDownToggle);
    props.allClose.forEach((el) => {

      // 問題
      if (el) {
        setContentDropDownToggle(false);
      } else {
        setContentDropDownToggle(true);}
    
    });

    
  }, [props.active]);

  useEffect(() => {
    contentDropDownToggle
      ? setPlusMinusCollapsed(true)
      : setPlusMinusCollapsed(false);
  }, [contentDropDownToggle]);

  console.log(props.titleId,"4444")
  return (
    <>
      <div className={`content-title-position  `}>
        <div className={`displayNone`}>
          <div
            onClick={() => (
              setContentDropDownToggle(!contentDropDownToggle),
              setPlusMinusCollapsed(!plusMinusCollapsed)
            )}
            className={`content-title-position content-hidden
             ${titleDropDownToggle ? "" : "active1"} `}
                      
          >
            <span
              className={`plus-minus-toggle  content-title  ${
                plusMinusCollapsed ? "collapsed" : ""
              } 
            `}
            >
              {props.subtitle}
            </span>
          </div>
        </div>

        <div
          className={`content-position content content-hidden ${
            contentDropDownToggle ? "" : "active2"
          }`}
        >
          <p>{props.subtitleContent} </p>
        </div>
      </div>
    </>
  );
};

export default FaqAccordionSubtitle;
