import { Header } from "@/Layouts/Header";
import { Footer } from "@/Layouts/Footer";
import  HeroSlider from "@/Components/Home/HeroSlider";

export default function Home() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="h-screen my-16">
                <HeroSlider />
            </div>
            <Footer />
        </>
    );
}
