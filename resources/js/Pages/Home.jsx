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
                {/* cursive svg */}
                <svg
                    viewBox="0 0 1440 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-1 50.3599C-1 50.3599 333.5 -62.9498 721.5 50.3599C1109.5 163.67 1442 50.3599 1442 50.3599V1321H-1V50.3599Z"
                        fill="#F7FFFF"
                    />
                </svg>
                <BiotaList />
            </div>
            <Footer />
        </>
    );
}
