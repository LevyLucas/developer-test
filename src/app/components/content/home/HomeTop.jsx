import { textsButtons } from "../../utils/texts";

const HomeContent = () => {
    return (
        <div className="container mx-auto max-w-6xl mt-20">
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-white text-6xl font-bold text-center">
                    <span className="font-mono">A new <span className="text-violet-700">frontier</span> of digital art</span>
                </h1>
                <p className="mt-5 text-align font-mono font-medium text-gray-500 max-w-5xl text-base text-center">
                    <span>The forever home of long-form generative art. Create, collect, and connect today. Pioneering the digital art revolution, one hash and group chat at a time.</span>
                </p>
            </div>

            <div className="container flex items-center justify-center flex-col w-full">
                <div className="flex items-center justify-center mt-12 bg-gray-820 border border-gray-700 rounded-lg w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-12 px-4 py-2 rounded-l-lg focus:outline-none focus:border-violet-720 bg-gray-820 text-white"
                    />
                    <button className="ml-1 bg-gray-820 text-white px-3 py-2 rounded-r-lg">
                        <img src="/search.svg" alt="Search" className="w-6 h-6" />
                    </button>
                </div>
                <div className="container w-40 mt-7">
                    <button className="font-mono p-6 rounded-lg bg-violet-700 text-white h-12 w-36 border border-violet-500 flex items-center justify-center">
                        <p className="font-mono font-bold text-lg text-white">{textsButtons.explore}</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
