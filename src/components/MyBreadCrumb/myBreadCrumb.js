import React from "react";
import { withRouter } from "react-router-dom";
import "./myBreadCrumb.scss";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
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
    const handleClick = (event) => {
        // event.preventDefault();
    };

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
                    <Link className="pre-state" href="/" onClick={handleClick}>
                        InSense
                    </Link>
                    {!!location.state ? (
                        <Link
                            className="pre-state"
                            href={location.state.prevPath}
                            onClick={handleClick}
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
