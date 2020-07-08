import React, { useState, useEffect } from "react";
import MainContainer from "../../components/mainContainer";
import "./orderPayMent.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Input, FormControl, InputLabel } from "@material-ui/core";
import CreditCardNumber from "../../components/CreditCardNumber/creditCardNumber";
import CreditCardExpiration from "../../components/CreditCardExpiration/creditCardExpiration";
import CreditCardAssociation from "../../components/CreditCardAssociation/creditCardAssociation";
import { clearCart } from "../../Redux/cart/cartAction";
import Address from "../../components/Address/address";
import InquiryAlert from "../../components/InquiryAlert/inquiryAlert";
import axios from "axios";

//radio checkbox icon
import { FiSquare, FiCheckSquare } from "react-icons/fi";

//redux selector
import {
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
  selectUserInfo,
} from "../../Redux/cart/cartSelectors";

import Button from "@material-ui/core/Button";

const OrderPayMent = ({
  history,
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
  selectUserInfo,
  clearCart,
}) => {
  const UserInfo = { ...selectUserInfo };

  const orderDelivery = history.location.state;
  const [getOrderDelivery, setGetOrderDelivery] = useState(orderDelivery);

  const [saveCreditCard, setSaveCreditCard] = useState(false);
  const [agree, setAgree] = useState(false);

  //持卡人
  const [cdHolder, setcdHolder] = useState("");

  //信用卡號
  const [cardNumberFirst, setCardNumberFirst] = useState("");
  const [cardNumberSecond, setCardNumberSecond] = useState("");
  const [cardNumberThird, setCardNumberThird] = useState("");
  const [cardNumberForth, setCardNumbeForth] = useState("");

  //期限
  const [cdMonth, setcdMonth] = useState("");
  const [cdYear, setcdYear] = useState("");

  //安全碼
  const [safeCode, setSafeCode] = useState("");

  //卡別
  const [association, setassociation] = useState("VISA");

  //地址
  const [billCity, setBillCity] = useState("");
  const [billDistrict, setBillDistrict] = useState("");
  const [billPostCode, setBillPostCode] = useState("");
  const [billAddress, setBillAddress] = useState("");

  const [isDefault, setisDefault] = useState(0);

  //取得信用卡資訊
  const [getCreditCardInfo, setGetCreditCardInfo] = useState({});

  //打開詢問付款
  const [openInquiry, setOpenInquiry] = useState(false);
  const [inquiryTitle, setInquiryTitle] = useState("title");
  const [inquiryContext, setInquiryContext] = useState("context");
  const handleInquiryOpen = () => {
    setInquiryTitle("確認付款");
    setInquiryContext("按下確認按鈕即送出訂單");
    setOpenInquiry(true);
  };
  const handleInquiryClose = () => {
    setOpenInquiry(false);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "cdHolder":
        setcdHolder(event.target.value);
        break;
      case "isDefault":
        setisDefault(event.target.value);
        break;
    }
  };

  const changeSafeCode = (e) => {
    //先取出數字陣列
    const inputNumList = e.target.value.match(/\d+/g);
    // console.log("inputNumList", inputNumList);

    //將陣列合併成字串
    const insertRawNum = !!inputNumList ? inputNumList.join("") : "";
    // console.log("insertRawNum", insertRawNum);

    //取出前四個數字
    const insertNum = !!insertRawNum.match(/\d{1,3}/g)
      ? insertRawNum.match(/\d{1,3}/g)[0]
      : "";
    setSafeCode(insertNum);
  };
  const paymentdata = {
    userId: UserInfo.userId,
    cdHolder: cdHolder,
    cdMonth: cdMonth,
    cdYear: cdYear,
    cdNumber: `${cardNumberFirst}-${cardNumberSecond}-${cardNumberThird}-${cardNumberForth}`,
    association: association,
    billAddressCity: billCity,
    billAddressPostCode: billPostCode,
    billAddressDistrict: billDistrict,
    billAddressStreet: billAddress,
    isDefault: isDefault,
  };

  const getSavedCreditCardInfo = async () => {
    const res = await fetch(`http://localhost:3030/orders/getCreditCardInfo`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  };

  const addordersToSever = async () => {
    const res = await axios.post(`http://localhost:3030/orders/orderList`, {
      paymentdata: paymentdata,
      selectCartItems: selectCartItems,
      selectCartTotal: selectCartTotal,
      orderDelivery: getOrderDelivery,
    });
    const { data } = res;
    return data;
  };

  const confirmToPay = async (e) => {
    e.preventDefault();
    const data = await addordersToSever();
    clearCart();
    history.push(`/orders/orderdetail/${data.orderId}`);
  };
  //當saveCreditCard 改變時 從資料庫撈資料或變成空物件
  useEffect(() => {
    (async () => {
      if (saveCreditCard) {
        const data = await getSavedCreditCardInfo();
        setGetCreditCardInfo(data);
      } else {
        setGetCreditCardInfo({});
      }
    })();
  }, [saveCreditCard]);

  //取得預設的credit card 資料
  useEffect(() => {
    const { creditCardInfo } = { ...getCreditCardInfo };
    setassociation(creditCardInfo && creditCardInfo.association);
    setCardNumberFirst(
      creditCardInfo ? creditCardInfo.cdNumber.split("-")[0] : ""
    );
    setCardNumberSecond(
      creditCardInfo ? creditCardInfo.cdNumber.split("-")[1] : ""
    );
    setCardNumberThird(
      creditCardInfo ? creditCardInfo.cdNumber.split("-")[2] : ""
    );
    setCardNumbeForth(
      creditCardInfo ? creditCardInfo.cdNumber.split("-")[3] : ""
    );
    setcdMonth(creditCardInfo ? creditCardInfo.cdMonth : "");
    setcdYear(creditCardInfo ? creditCardInfo.cdYear : "");
    setcdHolder(creditCardInfo ? creditCardInfo.cdHolder : "");
    setBillCity(creditCardInfo && creditCardInfo.billAddressCity);
    setBillDistrict(creditCardInfo && creditCardInfo.billAddressDistrict);
    setBillPostCode(creditCardInfo && creditCardInfo.billAddressPostCode);
    setBillAddress(creditCardInfo && creditCardInfo.billAddressStreet);
  }, [getCreditCardInfo]);

  return (
    <MainContainer>
      <div className="text-center position-relative order-payment-head">
        <div className="position-absolute order-payment-title">付款資訊</div>
        <div className="order-payment-step">
          <a href="#" onClick={(e) => e.preventDefault()}>
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
      <div className="d-flex order-payment-content">
        <div className="order-payment-subcontent subcontent-left">
          <div className="credit-card-demo1">
            <CreditCardNumber
              cardNumberFirst={cardNumberFirst}
              cardNumberSecond={cardNumberSecond}
              cardNumberThird={cardNumberThird}
              cardNumberForth={cardNumberForth}
              setCardNumberFirst={setCardNumberFirst}
              setCardNumberSecond={setCardNumberSecond}
              setCardNumberThird={setCardNumberThird}
              setCardNumbeForth={setCardNumbeForth}
            />
          </div>
          <div className="credit-card-demo2">
            <div className="black-strip"></div>
            <FormControl>
              <InputLabel htmlFor="my-input">安全碼*</InputLabel>
              <Input
                id="my-input"
                value={safeCode}
                onChange={changeSafeCode}
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <div className="credit-card-demo2">
              <div className="black-strip"></div>
              <FormControl>
                <InputLabel htmlFor="my-input">安全碼*</InputLabel>
                <Input
                  id="my-input"
                  value={safeCode}
                  onChange={changeSafeCode}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
            </div>
          </div>
          <div className="order-payment-subcontent subcontent-center">
            {/* 卡別 */}
            <CreditCardAssociation
              association={association}
              setAssociation={setassociation}
            />

            <CreditCardNumber
              cardNumberFirst={cardNumberFirst}
              cardNumberSecond={cardNumberSecond}
              cardNumberThird={cardNumberThird}
              cardNumberForth={cardNumberForth}
              setCardNumberFirst={setCardNumberFirst}
              setCardNumberSecond={setCardNumberSecond}
              setCardNumberThird={setCardNumberThird}
              setCardNumbeForth={setCardNumbeForth}
            />
            <div className="d-flex align-items-center payment-safe-code">
              <FormControl>
                <InputLabel htmlFor="my-input">安全碼*</InputLabel>
                <Input
                  id="my-input"
                  value={safeCode}
                  onChange={changeSafeCode}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <p> (3碼) </p>
            </div>

            <div className="subcontent-date">
              到期日期
              <div className="credit-card-date">
                <CreditCardExpiration
                  cdMonth={cdMonth}
                  cdYear={cdYear}
                  setCdMonth={setcdMonth}
                  setCdYear={setcdYear}
                />
              </div>
            </div>
          </div>
          <div className="order-payment-subcontent subcontent-right">
            <FormControl>
              <InputLabel htmlFor="my-input">持有人*</InputLabel>
              <Input
                value={cdHolder}
                name="cdHolder"
                onChange={handleChange}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <Address
              myCity={billCity}
              myPostCode={billPostCode}
              myAddress={billAddress}
              setCities={setBillCity}
              setDistricts={setBillDistrict}
              setPostCode={setBillPostCode}
              setAddress={setBillAddress}
            />
            <div
              className="credit-card-checkedBtn d-flex align-items-center"
              onClick={() => setSaveCreditCard(!saveCreditCard)}
            >
              {saveCreditCard ? (
                <FiCheckSquare className="order-payment-square" />
              ) : (
                <FiSquare className="order-payment-square" />
              )}
              <p>使用預設已儲存的信用卡</p>
            </div>
            <div
              className="credit-card-checkedBtn d-flex align-items-center"
              onClick={() => setAgree(!agree)}
            >
              {agree ? (
                <FiCheckSquare className="order-payment-square" />
              ) : (
                <FiSquare className="order-payment-square" />
              )}
              <p>
                我確認上述資訊完整無誤並同意上述資訊
                <br />
                可以被InSense作為商業用途使用
              </p>
            </div>
            <Button
              className="MuiButtonBase-root MuiButton-root MuiButton-outlined confirm-btn"
              href="#"
              onClick={handleInquiryOpen}
            >
              確認付款
            </Button>
            <InquiryAlert
              openInquiry={openInquiry}
              handleInquiryClose={handleInquiryClose}
              inquiryTitle={inquiryTitle}
              inquiryContext={inquiryContext}
              leftButton={"取消"}
              rightButton={"確認"}
              leftButtonFunc={handleInquiryClose}
              rightButtonFunc={confirmToPay}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  selectCartItems: selectCartItems,
  selectCartTotal: selectCartTotal,
  selectUserLogin: selectUserLogin,
  selectUserInfo: selectUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderPayMent)
);
