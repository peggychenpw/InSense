import React from "react";
import "./indexNewClass.scss";
import { Link } from "react-router-dom";

const IndexNewClass = (props) => {
  return (
    <div className="index-class-container d-flex">
      <img src={props.src} />
      <div>
        <p>最新課程</p>
        <p>
          香水和每個人的氣味，都應該具有獨特性並具有標誌性的。
                    <br />
                    在調香實作中，創造專屬自己的獨特氣味，讓香水不再是大量複製，而是可以詮釋無二的個人特色。
                </p>
        <Link
          to="/classlist"
          className="button-link text-center"
          role="button"
        >
          立即預約
                </Link>
      </div>
    </div>
  );
};

export default IndexNewClass;
