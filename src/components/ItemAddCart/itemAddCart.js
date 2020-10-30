import React, { useState } from "react";
import "./itemAddCart.scss";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { addQuantity } from "../../Redux/cart/cartAction";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
    selectCartItems,
    selectCartTotal,
    selectUserLogin,
} from "../../Redux/cart/cartSelectors";

const ItemAddCart = (item) => {
    const {
        itemName,
        itemSize,
        itemPrice,
        itemId,
        itemimg,
        addQuantity,
    } = item;
    const [quantity, setQuantity] = useState(1);
    const quantityDisplay = (
        <>
            <div>
                <FiMinus
                    className="minus"
                    onClick={() => {
                        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
                    }}
                    style={{ cursor: "pointer" }}
                ></FiMinus>
            </div>
            <p className="total-input">{quantity}</p>
            <div>
                <FiPlus
                    className="plus"
                    onClick={() => {
                        setQuantity(quantity + 1 > 10 ? 10 : quantity + 1);
                    }}
                    style={{ cursor: "pointer" }}
                ></FiPlus>
            </div>
        </>
    );
    return (
        <>
            <div className="add-item-wrapper d-flex justify-content-between">
                <div className="total">
                    <p className="label">數量</p>
                    <div className="total-control d-flex align-items-center">
                        {quantityDisplay}
                    </div>
                </div>
                <div className="item-add-cart">
                    <button
                        variant="contained"
                        type="submit"
                        title="Add to Cart"
                        className="btn-cart"
                        onClick={() => addQuantity(item, quantity)}
                    >
                        加入購物車
                    </button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    userSelect: selectUserLogin,
});

const mapDispatchToProps = (dispatch) => ({
    addQuantity: (item, quantity) => dispatch(addQuantity(item, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddCart);
