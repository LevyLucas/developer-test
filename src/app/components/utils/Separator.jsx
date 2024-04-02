"use client";
import React, { useState, useRef, useEffect } from "react";
import { textsButtons } from "../utils/texts";

export default function Separator() {
    const [selectedOption, setSelectedOption] = useState("shop");
    const [shopWidth, setShopWidth] = useState(0);
    const [allItemsWidth, setAllItemsWidth] = useState(0);
    const shopRef = useRef(null);
    const allItemsRef = useRef(null);

    useEffect(() => {
        setShopWidth(shopRef.current.offsetWidth);
        setAllItemsWidth(allItemsRef.current.offsetWidth);
    }, [selectedOption]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const getBarLeftPosition = () => {
        return selectedOption === "shop" ? 0 : `calc(${shopWidth / 3}px + ${allItemsWidth / 2}px)`;
    };

    return (
        <div className="flex justify-center flex-col mt-12">
            <div className="flex items-start">
                <div
                    className={`cursor-pointer mr-4 ${selectedOption === "shop" ? "text-white" : "text-gray-500"} pr-2`}
                    onClick={() => handleOptionClick("shop")}
                    ref={shopRef}
                >
                    <a className="font-mono">{textsButtons.shop}</a>
                </div>
                <div
                    className={`cursor-pointer ${selectedOption === "all Items" ? "text-white" : "text-gray-500"} pr-2`}
                    onClick={() => handleOptionClick("all Items")}
                    ref={allItemsRef}
                >
                    <a className="font-mono">{textsButtons.all_items}</a>
                </div>
            </div>
            <div className="relative w-full mt-1 items-start">
                <hr className="border-gray-700 border-t-2 w-full absolute" />
                <hr
                    className={`absolute border-purple-500 border-t-2 h-1`}
                    style={{
                        width: `${selectedOption === "shop" ? shopWidth : allItemsWidth}px`,
                        left: getBarLeftPosition(),
                    }}
                />
            </div>
        </div>
    );
}
