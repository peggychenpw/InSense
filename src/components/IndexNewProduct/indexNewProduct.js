import React, { useState } from "react";
import MainContainer from "../mainContainer";
import ItemCard from "../ItemCard/itemCard";
// import { FiChevronLeft } from "react-icons/fi";
// import { FiChevronRight } from "react-icons/fi";
import "./indexNewProduct.scss";

const IndexNewProduct = () => {
    const [itemCardData, setItemCardData] = useState([]);
    const [itemWishList, setitemWishList] = useState([]);
    const ItemCardInfo = [
        {
            itemId: "P0006",
            itemName: "BYREDO 吉普賽之水淡香精",
            itemPrice: "6200",
            itemimg: "/images/banner/newest1.png",
        },
        {
            itemId: "P0058",
            itemName: "diptyque 磨砂護膚潔手液",
            itemPrice: "2000",
            itemimg: "/images/banner/newest2.png",
        },
        {
            itemId: "P0027",
            itemName: "BYREDO 逝去之愛香氛蠟燭",
            itemPrice: "2200",
            itemimg: "/images/banner/newest3.png",
        },
        {
            itemId: "P0093",
            itemName: "Le Labo ANOTHER 13 淡香精 ",
            itemPrice: "5000",
            itemimg: "/images/banner/newest4.png",
        },
    ];

    return (
        <MainContainer>
            <div className="text-center new-product-container">
                <h1 className="d-flex justify-content-center align-items-center">
                    <span>最新商品</span>
                </h1>
                <div className="d-flex  align-items-center justify-content-center">
                    {/* <FiChevronLeft className="icon-style" /> */}
                    <div className="d-flex">
                        {ItemCardInfo.map((info, index) => {
                            return (
                                <ItemCard
                                    key={index}
                                    itemId={info.itemId}
                                    itemName={info.itemName}
                                    itemPrice={info.itemPrice}
                                    itemimg={info.itemimg}
                                    itemWishList={itemWishList}
                                    setitemWishList={setitemWishList}
                                />
                            );
                        })}
                    </div>
                    {/* <FiChevronRight className="icon-style" /> */}
                </div>
            </div>
        </MainContainer>
    );
};

export default IndexNewProduct;
