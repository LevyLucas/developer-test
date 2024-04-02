'use client';
import { Button, Image } from "@mantine/core";
import Link from "next/link";
import {useEffect, useState } from "react";
import { textsButtons } from "../../../utils/texts";

export default function CollectionInfo({ id }) {
  const [isLoading, setIsLoading] = useState(true);

  // mock loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 bg-black text-white p-6 max-w-xl mx-auto rounded-sm bg-gray-820">
      <div className="col-span-1 flex justify-center">
        <div className="w-40">
          <Image src="/nft.svg" alt="NFT Image" />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex gap-1">
              <h2 className="text-xl font-bold">collection name</h2>
              <Image src="/badge.svg" alt="Verified" width={40} height={40} />
            </div>
            <div className="flex items-center gap-2">
              <span className=" font-mono text-yellow-50 font-medium text-xs">
                {textsButtons.live}
              </span>
              <span className="bg-green-500 h-3 w-3 rounded-full"></span>
            </div>
          </div>
          <span className="text-xl tracking-wider font-mono block">
            Project #0000
          </span>
        </div>
        <div>
          <p className="text-xs text-gray-400 font-mono">
            Published on January 1, 2024 at 13:54
          </p>
          <p className="text-sm text-gray-400 font-mono mt-4">
            Rongoā is a gentle visual balance with simplicity that evokes peace
            and tranquility. The colors and shapes, although simple, work
            together to create an overall impression of calm and serenity.
          </p>
        </div>
        <Button className=" w-full font-mono  bg-violet-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mt-4">
          {textsButtons.mint}
        </Button>
      </div>
    </div>
  );
}
