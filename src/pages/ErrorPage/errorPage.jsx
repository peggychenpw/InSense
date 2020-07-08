import React from "react";
import "./errorPage.scss";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ErrorPage = ({ history }) => {
  return (
    <div class="bg-video">
      <video class="bg-video-content" autoPlay muted>
        <source
          src={"http://localhost:3000/images/video/chanelBtn.mp4"}
          type="video/mp4"
        />
      </video>
      <button
        className="MuiButtonBase-root MuiButton-root MuiButton-outlined success-alert go-buy-btn"
        tabindex="0"
        type="button"
        onClick={() => {
          history.push("/itemdetail/P0035");
        }}
      >
        <span className="MuiButton-label">前往購買</span>
        <span className="MuiTouchRipple-root"></span>
      </button>

      {/* <button>返回首頁</button>
      <button>前往購買</button> */}
    </div>
  );
};

export default withRouter(ErrorPage);
