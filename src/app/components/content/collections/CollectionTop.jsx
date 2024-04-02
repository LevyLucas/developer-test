"use client";
import CollectionInfo from "./modules/CollectionInfo";
import { usePathname } from "next/navigation";

export default function CollectionPage() {
  const navigation = usePathname();
  const pathSegments = navigation.split("/");
  const id = pathSegments[pathSegments.length - 1];

  return (
    <div className="flex justify-center flex-col md:flex-row">
      <div>
        <CollectionInfo id={id} />
      </div>
      <div className="max-w-96 w-full">
        <div className="col-span-1 h-full w-full flex justify-center bg-gray-620 rounded-sm">
          {/* carregar a imagem da NFT aqui */}
        </div>
      </div>
    </div>
  );
}
