import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router-dom";

//Redux
import { userLogin, checkLogin } from "../../Redux/user/userAction";

//scss
import "./accountDashboard.scss";

//引入component
import MainContainer from "../../components/mainContainer";
import AccountSideBar from "../../components/AccountSideBar/accountSideBar";
import ProgressBoard from "../../components/ProgressBoard/progressBoard";
import LevelBoard from "../../components/LevelBoard/levelBoard";

const AccountDashboard = () => {
  return (
    <>
      <MainContainer>
        <div className="d-flex dash-board-wrapper">
          <AccountSideBar />
          <div className="card-container d-flex justify-content-center flex-wrap">
            <div className="level-board-container">
              <LevelBoard />
            </div>
            <div className="progress-board-container">
              <ProgressBoard />
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (store) => {
  return { user: store.user };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userLogin, checkLogin }, dispatch);
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AccountDashboard)
);
