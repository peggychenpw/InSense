import React, { useState, useEffect } from "react";
import "./FaqAccordionTitle.scss";
import { FiChevronUp } from "react-icons/fi";

const FaqAccordionTitle = (props) => {
  const [titleDropDownToggle, setTitleDropDownToggle] = useState(false);
  const [arrowIconActive, setArrowIconActive] = useState(false);
  const [value, setValue] = useState("");
  const [contentDropDownToggle, setContentDropDownToggle] = useState("");
  const [aaa, setAaa] = useState(true);
  const clickTitle = (e) => {
    props.onClick(e);
  };

  return (
    <>
      <div className="wrapper">
        <button
          id={props.titleId}
          onClick={(e) => (
            setArrowIconActive(!arrowIconActive), clickTitle(e)
          )}
          
          className="accordion-header"
        >
          {props.title}
          
          <FiChevronUp
            
            className={`arrow-icon-position arrow-icon ${
              arrowIconActive ? "arrow-icon-active" : ""
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default FaqAccordionTitle;
