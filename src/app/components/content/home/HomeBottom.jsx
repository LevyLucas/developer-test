import MapCollections from "./modules/MapCollections";

const HomeBottom = () => {
  return (
    <div className="container max-w-6xl mt-20">
      <div className="mt-8">
        <span className="font-mono text-white text-3xl">{"<collections>"}</span>
        <div>
          <MapCollections />
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
