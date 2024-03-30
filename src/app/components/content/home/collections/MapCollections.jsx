import Collections from "./collections";
import Link from "next/link";
import { arts } from "@/app/mock/data";

const MapColletions = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex items-center justify-between mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:*:bg-gray-620 cursor-pointer">
        {arts.map((art) => (
          <Link key={art.id} href={`/collection/${art.id}`} passHref>
            <Collections art={art} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MapColletions;
