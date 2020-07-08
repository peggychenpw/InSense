import React, { useState, useEffect, useRef } from "react";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

//scss
import "./creditCardExpiration.scss";

export default function CreditCardExpiration(props) {
  // const [open, setOpen] = React.useState(false);
  // const [cardHolder, setCardHolder] = React.useState();
  const { open, cdMonth, cdYear, setCdMonth, setCdYear, formatError = {}, setFormatError = () => { } } = props;

  //Ref
  const inputMonth = useRef(null);
  const inputYear = useRef(null);

  const handleTimeChange = (event) => {
    // console.log(event);
    //先取出數字陣列
    const inputNumList = event.target.value.match(/\d+/g);
    // console.log("inputNumList", inputNumList);

    //將陣列合併成字串
    const insertRawNum = !!inputNumList ? inputNumList.join("") : "";
    // console.log("insertRawNum", insertRawNum);

    //取出前二個數字
    const wholeNum = !!insertRawNum.match(/\d{1,2}/g)
      ? insertRawNum.match(/\d{1,2}/g)[0]
      : "";
    // console.log("wholeNum", wholeNum);

    const errObj = { ...formatError }
    if (!event.target.value.length) {
      errObj.cdDate = '未填*'
    } else {
      delete errObj.cdDate
    }
    setFormatError(errObj)

    let insertNum = wholeNum;
    switch (event.target.name) {
      case "input-month":
        //判斷月份
        if (Number(wholeNum.slice(0, 1)) > 1) {
          insertNum = "0" + wholeNum.slice(0, 1);
        } else {
          if (Number(wholeNum) > 12) {
            if (Number(wholeNum.slice(0, 1)) === 1) {
              insertNum = "1";
            }
          }
        }
        if (insertNum.length === 2) {
          inputYear.current.firstChild.focus(); //跳到下一格
        }
        setCdMonth(insertNum);
        break;
      case "input-year":
        setCdYear(insertNum);
        break;

      default:
        break;
    }
  };

  //跳到前一格
  const handleDelete = (event) => {
    // console.log(event.key);
    // console.log(event.target.value);
    switch (event.target.name) {
      case "input-month":
        break;
      case "input-year":
        if (!event.target.value && event.key === "Backspace") {
          inputMonth.current.firstChild.focus();
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="credit-card-expiration d-flex align-items-end">
        <FormControl>
          <InputLabel className="input-expiration-label" htmlFor="input-month">
            月
          </InputLabel>
          <Input
            type="text"
            className="input-time"
            id="input-month"
            name="input-month"
            value={cdMonth}
            onChange={handleTimeChange}
            ref={inputMonth}
          />
        </FormControl>
        <div className="input-dash"> / </div>
        <FormControl>
          <InputLabel className="input-expiration-label" htmlFor="input-year">
            年
          </InputLabel>
          <Input
            type="text"
            className="input-time"
            id="input-year"
            name="input-year"
            value={cdYear}
            onChange={handleTimeChange}
            onKeyDown={handleDelete}
            ref={inputYear}
          />
        </FormControl>
        <p className="expiration-hint">（有效期限）</p>
      </div>
    </>
  );
}
