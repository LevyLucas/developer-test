import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import HomeContent from "@/app/components/content/home/HomeTop";
import HomeBottom from "@/app/components/content/home/HomeBottom";

export default function Home() {
    return (
        <home className="flex min-h-screen flex-col items-center justify-between">
            <div className="absolute inset-0 z-0">
                <img src="/background.png" alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="flex min-h-screen flex-col items-center justify-between relative z-10">
                <Header />
                <HomeContent />
                <HomeBottom />
                <Footer />
            </div>
        </home>
    );
}
