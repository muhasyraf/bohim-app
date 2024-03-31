import { Header } from "@/Layouts/Header";
import { Footer } from "@/Layouts/Footer";
import { HeroSlider } from "@/Components/Home/HeroSlider";
import BiotaList from "@/Components/Home/BiotaList";

export default function Home() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="mt-14 mb-16">
                <HeroSlider />
                <BiotaList />
            </div>
            <Footer />
        </>
    );
}
