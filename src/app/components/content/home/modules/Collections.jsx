import Image from "next/image";

const Collections = ({ art }) => {
  return (
    <div className="flex rounded-lg py-1 px-8 gap-5 items-center">
      <div className="flex items-center justify-center text-white font-mono font-bold text-xl">
        {art.id}
      </div>
      <div className="relative card-back rounded-lg p-4 shadow-lg bg-gray-620">
        <Image src={art.imageSrc} alt="art" width={200} height={200} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-white font-mono font-bold text-xl whitespace-nowrap">{art.artistName}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 font-mono font-medium text-xs whitespace-nowrap">
            vol <span className="text-violet-600">{art.price}</span> SOL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
