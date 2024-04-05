import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import HeroSlider from "@/Components/Home/HeroSlider";
import BiotaList from "@/Components/Home/BiotaList";
import Features from "@/Components/Home/Features";
import Articles from "@/Components/Home/Articles";

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
                <svg
                    viewBox="0 0 1440 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mt-28"
                >
                    <path
                        d="M-1 47.5388C-1 47.5388 333.5 -59.4235 721.5 47.5388C1109.5 154.501 1442 47.5388 1442 47.5388V1247H-1V47.5388Z"
                        fill="#E7F3F3"
                    />
                </svg>
                <Articles />
            </div>
            <Footer />
        </>
    );
}
