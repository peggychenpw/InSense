import React from "react";
import { withRouter } from "react-router-dom";
import "./myBreadCrumb.scss";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function MyBreadcrumb(props) {
  const { location, history, match, itemName, itemId } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  // console.log(location);
  // console.log(history);

  return (
    <>
      <div className={`${classes.root} breadcrumb-wrapper`}>
        <Breadcrumbs
          separator={<NavigateNextIcon className="bread-arrow" />}
          aria-label="breadcrumb"
        >
          <Link className="pre-state" to="/">
            InSense
                    </Link>
          {!!location.state && location.state.prevPath !== "/" ? (
            <Link
              className="pre-state"
              to={location.state.prevPath}
            >
              {location.state.listName}
            </Link>
          ) : (
              ""
            )}
          <Typography className="current-state">
            {itemName}
          </Typography>
        </Breadcrumbs>
      </div>
    </>
  );
}

export default withRouter(MyBreadcrumb);
