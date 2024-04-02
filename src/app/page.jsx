import HomeContent from "./components/content/home/HomeTop";
import HomeBottom from "./components/content/home/HomeBottom";

export default function Init() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <home className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex min-h-screen flex-col items-center justify-between relative z-10">
                <HomeContent />
                <HomeBottom />
            </div>
        </home>
    </main>
  );
}
