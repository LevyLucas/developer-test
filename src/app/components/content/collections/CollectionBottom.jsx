import React from "react";
import Card from "@/app/components/utils/Card";
import CardContent from "@/app/components/utils/CardContent";
import Link from "next/link";

const mockNFTs = [
  { id: "000001", name: "NFT 1", collection: "Collection Name", price: "0.1" },
  { id: "000002", name: "NFT 2", collection: "Collection Name", price: "0.1" },
  { id: "000003", name: "NFT 3", collection: "Collection Name", price: "0.1" },
  { id: "000004", name: "NFT 4", collection: "Collection Name", price: "0.1" }
];

const CollectionBottom = () => {
  return (
    <div className="flex justify-between mt-3">
      {mockNFTs.map((nft) => (
        <div key={nft.id} className="w-1/4">
          <Link href="/nft/"> 
            <Card className="border-0 cursor-pointer">
              <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-620 rounded-lg">
                <span className="text-3xl font-mono">{nft.name}</span>
              </CardContent>
              <span className="text-xl tracking-wider font-mono block text-white mt-3 font-mono">#{nft.id}</span>
              <h2 className="text-xl font-normal text-gray-400 font-mono">{nft.collection} <span className="text-violet-700">◎ {nft.price}</span></h2>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CollectionBottom;
