import React, { useState, useEffect } from "react";
import "./itemOrderBy.scss";
import {
    FiX,
    FiCircle,
    FiCheckCircle,
    FiCheckSquare,
    FiSquare,
} from "react-icons/fi";
// import { withRouter } from "react-router-dom";

const ItemOrderBy = (props) => {
    //解構
    const {
        name,
        setOrderToggle,
        otherClass,
        // orderSelect,
        // setItemCardData,
        order,
        setOrder,
    } = props;

    // const [order, setOrder] = useState();

    const orderChange = (e) => {
        setOrder(e.target.value);
        console.log(e.target.value);
    };

    // const OrderSelect = (e) => {};

    return (
        <>
            <section className={`order-bar position-absolute ${otherClass}`}>
                <div className="order-wrapper">
                    <div className="order-bar-element">
                        <section className="order order-bar-layer layer-opened">
                            <div className="order-layer-header d-flex">
                                <span
                                    className="close-icon-box"
                                    onClick={() => setOrderToggle(false)}
                                >
                                    <FiX className="close-icon" />
                                </span>
                                <h2>Order By Price</h2>
                            </div>

                            <div className="order-layer d-flex">
                                <div className="order-content">
                                    <input
                                        type="radio"
                                        name="order"
                                        id="lowToHigh"
                                        className="display-none"
                                        value="lowToHigh"
                                        onChange={orderChange}
                                    ></input>
                                    <label
                                        htmlFor="lowToHigh"
                                        className="d-flex align-items-center"
                                    >
                                        {order === "lowToHigh" ? (
                                            <FiCheckCircle className="order-select-circle" />
                                        ) : (
                                            <FiCircle className="order-select-circle" />
                                        )}
                                        <p>價格低到高</p>
                                    </label>
                                    <input
                                        type="radio"
                                        name="order"
                                        id="highToLow"
                                        className="display-none"
                                        value="highToLow"
                                        onChange={orderChange}
                                    ></input>
                                    <label
                                        htmlFor="highToLow"
                                        className="d-flex align-items-center"
                                    >
                                        {order === "highToLow" ? (
                                            <FiCheckCircle className="order-select-circle" />
                                        ) : (
                                            <FiCircle className="order-select-circle" />
                                        )}
                                        <p>價格高到低</p>
                                    </label>
                                    {/* <div
                                        className="order-by-name d-flex"
                                        name="lowToHigh"
                                        onClick={orderSelect}
                                    >
                                        {lowToHigh ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>價格低到高</p>
                                    </div>
                                    <div
                                        className="order-by-name d-flex "
                                        name="highToLow"
                                        onClick={orderSelect}
                                    >
                                        {highToLow ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>價格高到低</p>
                                    </div> */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemOrderBy;
