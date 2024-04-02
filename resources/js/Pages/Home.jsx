import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import HeroSlider from "@/Components/Home/HeroSlider";
import BiotaList from "@/Components/Home/BiotaList";
import Features from "@/Components/Home/Features";

export default function Home({ auth }) {
    return (
        <>
            <Header user={auth.user} />
            {/* Hero Section */}
            <div className="mt-12 mb-16">
                <HeroSlider />
                <Features />
                <BiotaList />
            </div>
            <Footer />
        </>
    );
}
