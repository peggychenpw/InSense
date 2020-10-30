import React from "react";
import "./errorPage.scss";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ErrorPage = ({ history }) => {
  return (
    <div className="error-page">
      <img src="/images/404page.png" className="error-img"></img>

      <p>This Page is Lost in the Wind</p>
    </div>
  );
};

export default withRouter(ErrorPage);
