import React, { useState, useEffect, useRef } from "react";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

//scss
import "./creditCardNumber.scss";

export default function CreditCardNumber(props) {
  // const [open, setOpen] = React.useState(false);
  // const [cardHolder, setCardHolder] = React.useState();
  const {
    open,
    cardNumberFirst,
    setCardNumberFirst,
    cardNumberSecond,
    setCardNumberSecond,
    cardNumberThird,
    setCardNumberThird,
    cardNumberForth,
    setCardNumbeForth,
    formatError = {},
    setFormatError = () => { }
  } = props;

  // const [cardNumberFirst, setCardNumberFirst] = useState("");
  // const [cardNumberSecond, setCardNumberSecond] = useState("");
  // const [cardNumberThird, setCardNumberThird] = useState("");
  // const [cardNumberForth, setCardNumbeForth] = useState("");

  const [labelNumFocused, setLabelNumFocused] = useState(false);

  //Ref
  const inputNumFirst = useRef(null);
  const inputNumSecond = useRef(null);
  const inputNumThird = useRef(null);
  const inputNumForth = useRef(null);

  const handleCardNumChange = (event) => {
    // console.log(event);

    //先取出數字陣列
    const inputNumList = event.target.value.match(/\d+/g);
    // console.log("inputNumList", inputNumList);

    //將陣列合併成字串
    const insertRawNum = !!inputNumList ? inputNumList.join("") : "";
    // console.log("insertRawNum", insertRawNum);

    //取出前四個數字
    const insertNum = !!insertRawNum.match(/\d{1,4}/g)
      ? insertRawNum.match(/\d{1,4}/g)[0]
      : "";

    const errObj = { ...formatError }
    if (event.target.value.length < 4) {
      errObj.cardNumber = '請填滿4碼*'
    } else {
      delete errObj.cardNumber
    }
    setFormatError(errObj)

    switch (event.target.name) {
      case "card-number-first":
        if (insertNum.length === 4) {
          inputNumSecond.current.firstChild.focus(); //跳到下一格
        }
        setCardNumberFirst(insertNum);
        break;
      case "card-number-second":
        if (insertNum.length === 4) {
          inputNumThird.current.firstChild.focus(); //跳到下一格
        }
        setCardNumberSecond(insertNum);
        break;
      case "card-number-third":
        if (insertNum.length === 4) {
          inputNumForth.current.firstChild.focus(); //跳到下一格
        }
        setCardNumberThird(insertNum);
        break;
      case "card-number-forth":
        setCardNumbeForth(insertNum);
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
      case "card-number-first":
        // console.log("insertNum", insertNum.length);
        break;
      case "card-number-second":
        if (!event.target.value && event.key === "Backspace") {
          inputNumFirst.current.firstChild.focus();
        }
        break;
      case "card-number-third":
        if (!event.target.value && event.key === "Backspace") {
          inputNumSecond.current.firstChild.focus();
        }
        break;
      case "card-number-forth":
        if (!event.target.value && event.key === "Backspace") {
          inputNumThird.current.firstChild.focus();
        }
        break;
      default:
        break;
    }
  };

  // useEffect(() => {
  //   console.log(
  //     cardNumberFirst,
  //     "-",
  //     cardNumberSecond,
  //     "-",
  //     cardNumberThird,
  //     "-",
  //     cardNumberForth
  //   );
  // });

  //若有任何數字欄位focused
  const cdNumFocused = () => {
    setLabelNumFocused(true);
    // console.log("focused");
  };

  //若無任一數字欄位focused
  const cdNumUnFocused = () => {
    setLabelNumFocused(false);
  };

  //看看需不需要清空
  // useEffect(() => {
  //   setCardNumberFirst("");
  //   setCardNumberSecond("");
  //   setCardNumberThird("");
  //   setCardNumbeForth("");
  // }, [open]);

  return (
    <>
      <div className="credit-card-number d-flex align-items-end">
        <FormControl>
          <InputLabel
            className={`${
              labelNumFocused ||
                cardNumberSecond ||
                cardNumberThird ||
                cardNumberForth
                ? "MuiInputLabel-shrink Mui-focused"
                : ""
              } input-num-label`}
            htmlFor="card-number-first"
          >
            卡號
          </InputLabel>
          <Input
            type="text"
            className="input-number"
            id="card-number-first"
            name="card-number-first"
            value={cardNumberFirst}
            onChange={handleCardNumChange}
            ref={inputNumFirst}
          />
        </FormControl>
        <div className="input-dash"> - </div>
        <FormControl>
          <Input
            type="text"
            className="input-number"
            id="card-number-second"
            name="card-number-second"
            value={cardNumberSecond}
            onChange={handleCardNumChange}
            onKeyDown={handleDelete}
            ref={inputNumSecond}
            // color={"secondary"}
            onFocus={cdNumFocused}
            onBlur={cdNumUnFocused}
          />
        </FormControl>
        <div className="input-dash"> - </div>
        <FormControl>
          <Input
            type="text"
            className="input-number"
            id="card-number-third"
            name="card-number-third"
            value={cardNumberThird}
            onChange={handleCardNumChange}
            onKeyDown={handleDelete}
            ref={inputNumThird}
            onFocus={cdNumFocused}
            onBlur={cdNumUnFocused}
          />
        </FormControl>
        <div className="input-dash"> - </div>
        <FormControl>
          <Input
            type="text"
            className="input-number"
            id="card-number-forth"
            name="card-number-forth"
            value={cardNumberForth}
            onChange={handleCardNumChange}
            onKeyDown={handleDelete}
            ref={inputNumForth}
            onFocus={cdNumFocused}
            onBlur={cdNumUnFocused}
          />
        </FormControl>
      </div>
    </>
  );
}
