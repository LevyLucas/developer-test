import React from "react";
import { textsButtons } from "@/app/components/utils/texts";

const NftBody = () => {
    // Simulando uma ID de NFT
    const nftId = "00000";
    // Simulando o nome do autor
    const authorNick = "authorNick";

    return (
        <div className="container mt-8">
            <div className="flex justify-between">
                <div className="flex justify-center">
                    <div className="w-96 h-96 bg-gray-620 rounded-lg pr-8">{/* Imagem da NFT aqui */}</div>
                    <div className="w-1/2 pl-9">
                        <div className="flex justify-between">
                            <span className="text-xl text-white font-bold font-mono">#{nftId}</span>
                            <span className="text-gray-400 font-mono">{textsButtons.createBy}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-gray-400 font-mono">collection name</span>
                            <span className="text-white font-mono">@{authorNick}</span>
                        </div>
                        <div className="text-gray-400 mt-4">{textsButtons.description}</div>
                        <div className="text-gray-400 mt-2">
                            Rongoā is a gentle visual balance with simplicity that evokes peace and tranquility. The colors and shapes, although simple, work together to create an overall impression of calm and serenity.
                            <div className="text-xl text-gray-400 mt-4">
                                <button className="w-full bg-violet-700 text-white py-2 px-4 rounded font-mono">{textsButtons.buy}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 ml-48">
                <span className="text-gray-400 font-mono">{textsButtons.traits}</span>
            </div>
            <div className="flex mt-4 ml-48">
                <button className="border border-gray-500 py-2 px-4 mr-2 font-mono flex flex-col rounded-lg">
                    <span className="text-gray-500">BACKGROUND</span>
                    <span>RAINBOW</span>
                    <span className="text-gray-500"> 13% ON SUPPLY</span>
                </button>
                <button className="border border-gray-500 py-2 px-4 mr-2 font-mono flex flex-col rounded-lg">
                    <span className="text-gray-500">SKIN</span>
                    <span>RAINBOW</span>
                    <span className="text-gray-500">13% ON SUPPLY</span>
                </button>
                <button className="py-2 px-4 bg-violet-700 text-white font-mono flex flex-col rounded-lg">
                    <span>FACE</span>
                    <span>RAINBOW</span>
                    <span>13% ON SUPPLY</span>
                </button>
            </div>
        </div>
    );
};

export default NftBody;
