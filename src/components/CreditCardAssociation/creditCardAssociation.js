import React, { useEffect } from "react";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//react-icon
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcJcb,
  FaCcDiscover,
} from "react-icons/fa";

//scss
import "./creditCardAssociation.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CreditCardAssociation(props) {
  const classes = useStyles();
  const { association, setAssociation, formatError = {},
    setFormatError = () => { } } = props;

  const handleChange = (event) => {
    const errObj = { ...formatError }
    if (!event.target.value) {
      errObj.association = '未填*'
    } else {
      delete errObj.association
    }
    setFormatError(errObj)
    setAssociation(event.target.value);
  };
  return (
    <>
      <div className="credit-card-association">
        <FormControl className={`credit-card-form ${classes.formControl}`}>
          <InputLabel
            id="input-association-label"
            className="input-association-label"
          >
            發卡機構
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={association}
            onChange={handleChange}
          >
            <MenuItem value={"VISA"}>
              <FaCcVisa className="card-association-icon" />
              <span>VISA</span>
            </MenuItem>
            <MenuItem value={"MasterCard"}>
              <FaCcMastercard className="card-association-icon" />
              <span>MasterCard</span>
            </MenuItem>
            <MenuItem value={"JCB"}>
              <FaCcJcb className="card-association-icon" />
              <span>JCB</span>
            </MenuItem>
            <MenuItem value={"DISCOVER"}>
              <FaCcDiscover className="card-association-icon" />
              <span>DISCOVER</span>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
