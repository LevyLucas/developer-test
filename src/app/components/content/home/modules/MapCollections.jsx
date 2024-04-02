import Collections from "./collections";
import Link from "next/link";
import { arts } from "@/mock/data";

const MapCollections = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:*:bg-gray-620 cursor-pointer">
        {arts.map((art) => (
          <Link key={art.id} href={`/collection/${art.id}`} passHref>
            <Collections art={
              {
                id: art.id,
                imageSrc: art.imageSrc,
                artistName: art.artistName,
                price: art.price,
              }
            } />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MapCollections;
