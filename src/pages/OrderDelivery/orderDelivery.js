import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import MainContainer from "../../components/mainContainer";
import FormInput from "../../components/FormInput/FormInput";
import Address from "../../components/Address/address";
import "./orderDelivery.scss";
import { withRouter } from "react-router-dom";
import InquiryAlert from "../../components/InquiryAlert/inquiryAlert";
import SuccessAlert from '../../components/SuccessAlert/successAlert'

import {
  selectCartItems,
  selectCartTotal,
  selectUserInfo,
} from "../../Redux/cart/cartSelectors";

//react-icon
import {
  FiCircle,
  FiCheckCircle,
  FiSquare,
  FiCheckSquare,
} from "react-icons/fi";
// import { GiSquare } from "react-icons/gi";
//material UI
import Button from "@material-ui/core/Button";

//datepicker
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const OrderDelivery = (props) => {
  //Redux
  const { user, userLogin, history, selectUserInfo, location } = props;

  //gender
  const [gender, setGender] = useState("");

  //input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");
  const [phone, setPhone] = useState("");
  const [cities, setCities] = useState("");
  const [districts, setDistricts] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");

  //確認
  const [confirm, setConfirm] = useState(false);

  //格式錯誤檢查
  const [formatError, setFormatError] = useState({});

  //datepicker
  const [selectedDate, setSelectedDate] = useState(
    new Date("2000-01-01T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //性別欄轉換
  const genderChange = (e) => {
    setGender(e.target.value);
  };

  //alert
  const [openAlert, setOpenAlert] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [alertContext, setAlertContext] = useState("");
  const [alertLinearProgress, setAlertLinearProgress] = useState(false);
  const [alertAutoClose, setAlertAutoClose] = useState(false);
  const [alertDuration, setAlertDuration] = useState("");
  const handleAlertOpen = (
    alertName = "alertName",
    alertContext = "alertContext",
    alertAutoClose = false,
    linearProgress = false,
    duration
  ) => {
    setAlertName(alertName);
    setAlertContext(alertContext);
    setAlertLinearProgress(linearProgress);
    setAlertAutoClose(alertAutoClose);
    setAlertDuration(duration);
    setOpenAlert(true);
  };
  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  //文字欄
  const handleChange = (event) => {

    const errObj = { ...formatError }
    // console.log(event.target.name);
    switch (event.target.name) {
      case "firstName":
        errObj.firstName = !event.target.value.length ? "未填*" : "";
        setFirstName(event.target.value);
        break;
      case "lastName":
        errObj.lastName = !event.target.value.length ? "未填*" : "";
        setLastName(event.target.value);
        break;
      case "email":
        errObj.email = !event.target.value.length ? "未填*" : "";
        setEmailName(event.target.value);
        break;
      case "phone":
        errObj.phone = !event.target.value.length ? "未填*" : "";
        setPhone(event.target.value);
        break;

      default:
        break;
    }
    setFormatError(errObj);
  };

  //聲明確認
  const confirmChange = () => {
    setConfirm(!confirm);
  };
  //詢問是否
  const [openInquiry, setOpenInquiry] = useState(false);
  const [inquiryTitle, setInquiryTitle] = useState("title");
  const [inquiryContext, setInquiryContext] = useState("context");
  // const handleInquiryOpen = () => {
  //   setInquiryTitle("寄送資訊");
  //   setInquiryContext("確認寄送地址正確無誤");
  //   setOpenInquiry(true);
  // };
  // const handleInquiryClose = () => {
  //   setOpenInquiry(false);
  // };

  const registrationSent = async () => {

    const UserInfo = { ...selectUserInfo };

    const errorObj = {};
    if (!lastName.length) errorObj.lastName = "未填*";
    if (!firstName.length) errorObj.firstName = "未填*";
    if (email.indexOf("@") < 1) errorObj.email = "格式錯誤*";
    if (phone.length < 10 || phone.length > 10) errorObj.phone = "格式錯誤*";

    setFormatError(errorObj)

    if (!confirm) {
      console.log("confirm not checked");
      handleAlertOpen("請勾選確認欄", "請詳細檢查所有資料，並同意註冊協議");
    } else if (Object.keys(errorObj).length) {
      //若格式有誤
      console.log("format error");
      setConfirm(false);
      handleAlertOpen("填寫資料有誤", "請詳細檢查所有資料，並同意註冊協議");
    } else {
      const data = {
        // 會員帳號
        userId: UserInfo.userId,
        userAccount: email,
        userEmail: email,
        userPhone: phone,
        userFirstName: firstName,
        userLastName: lastName,
        userGender: gender,
        userCity: cities,
        userDistrict: districts,
        userAddress: address,
        userPostCode: postCode,
        userBirthday: selectedDate.toLocaleDateString().split("/").join("-"),
      };
      handleAlertOpen('確認寄送地址正確無誤', '2秒後跳轉至下一頁', true, true, 2000)
      setTimeout(() => {
        history.push("/orders/orderpayment", {
          data: data,
        });
      }, 3500);

    }
  };

  return (
    <>
      <MainContainer>
        <div className="order-registration-container">
          <div className="text-center position-relative order-payment-head">
            <div className="position-absolute order-payment-title registration-title">
              寄送資訊
            </div>
            <div className="order-payment-step">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="delivery-step"
                style={{ color: '#d94f06' }}
              >
                寄送資訊{" "}
              </a>{" "}
              ＞
              <a href="#" onClick={(e) => e.preventDefault()}>
                付款資訊{" "}
              </a>{" "}
              ＞
              <a href="#" onClick={(e) => e.preventDefault()}>
                訂單明細
              </a>
            </div>
          </div>
          <div className="registration-grid-container">
            <div className="registration-grid-item registration-grid-gender">
              <div className="registration-item">
                <h4>性別*</h4>
                <div className="registration-gender-select d-flex align-items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="registration-radio-woman"
                    className="display-none"
                    value="woman"
                    onChange={genderChange}
                  ></input>
                  <label
                    htmlFor="registration-radio-woman"
                    className="d-flex align-items-center"
                  >
                    {gender === "woman" ? (
                      <FiCheckCircle className="registration-select-circle" />
                    ) : (
                        <FiCircle className="registration-select-circle" />
                      )}
                    <p>女性</p>
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="registration-radio-man"
                    className="display-none"
                    value="man"
                    onChange={genderChange}
                  ></input>
                  <label
                    htmlFor="registration-radio-man"
                    className=" d-flex align-items-center"
                  >
                    {gender === "man" ? (
                      <FiCheckCircle className="registration-select-circle" />
                    ) : (
                        <FiCircle className="registration-select-circle" />
                      )}
                    <p>男性</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="registration-grid-item registration-grid-birthday">
              <div className="registration-item">
                <h4>生日</h4>
                {/* datepicker */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
            </div>
            <div className="registration-grid-item registration-grid-last-name">
              <div className="registration-item">
                <FormInput
                  type="text"
                  name="lastName"
                  value={lastName}
                  handleChange={handleChange}
                  label="姓氏"
                  required=""
                />
              </div>
              <div
                className={
                  !!formatError.lastName ? "error-message" : "display-none"
                }
              >
                <span>{formatError.lastName}</span>
              </div>
            </div>
            <div className="registration-grid-item registration-grid-first-name">
              <div className="registration-item">
                <FormInput
                  type="text"
                  name="firstName"
                  value={firstName}
                  handleChange={handleChange}
                  label="名字"
                  required={props.required}
                />
              </div>
              <div
                className={
                  !!formatError.firstName ? "error-message" : "display-none"
                }
              >
                <span>{formatError.firstName}</span>
              </div>
            </div>
            <div className="registration-grid-item registration-grid-email">
              <div className="registration-item">
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  handleChange={handleChange}
                  label="email"
                  required
                />
              </div>
              <div
                className={
                  !!formatError.email ? "error-message" : "display-none"
                }
              >
                <span>{formatError.email}</span>
              </div>
            </div>
            <div className="registration-grid-item registration-grid-email-confirm">
              <div className="registration-item">
                <FormInput
                  type="tel"
                  name="phone"
                  value={phone}
                  handleChange={handleChange}
                  label="手機"
                  required
                />
              </div>
              <div
                className={
                  !!formatError.phone ? "error-message" : "display-none"
                }
              >
                <span>{formatError.phone}</span>
              </div>
            </div>

            {/* 地址 */}
            <div className="registration-grid-item registration-grid-address">
              <div className="registration-item">
                <Address
                  setCities={setCities}
                  setDistricts={setDistricts}
                  setAddress={setAddress}
                  setPostCode={setPostCode}
                />
              </div>
            </div>
          </div>
          <div
            className="d-flex registration-declaration"
            onClick={confirmChange}
          >
            {confirm ? <FiCheckSquare /> : <FiSquare />}
            <p>
              我確認上述資訊完整無誤，並同意上述資訊可以被 InSense
              作為商業用途使用
            </p>
          </div>
          <div className="">
            <Button
              className="orderDelivery-button"
              variant="outlined"
              onClick={registrationSent}
            >
              下一步
            </Button>
            {/* <InquiryAlert
              openInquiry={openInquiry}
              handleInquiryClose={handleInquiryClose}
              inquiryTitle={inquiryTitle}
              inquiryContext={inquiryContext}
              leftButton={"取消"}
              rightButton={"確認"}
              leftButtonFunc={handleInquiryClose}
              rightButtonFunc={registrationSent}
            /> */}
            <SuccessAlert
              alertName={alertName}
              alertContext={alertContext}
              openAlert={openAlert}
              handleAlertClose={handleAlertClose}
              alertLinearProgress={alertLinearProgress} //有無時間條
              alertAutoClose={alertAutoClose} // 自行關閉
              alertDuration={alertDuration} //時間間隔
            />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  selectUserInfo: selectUserInfo,
});

export default withRouter(connect(mapStateToProps)(OrderDelivery));
