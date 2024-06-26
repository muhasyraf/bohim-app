import HeroSlider from "@/Components/Home/HeroSlider";
import BiotaList from "@/Components/Home/BiotaList";
import Features from "@/Components/Home/Features";
import Articles from "@/Components/Home/Articles";
import Report from "@/Components/Home/Report";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home(props) {
    return (
        <AuthenticatedLayout user={props.auth.user}>
            <Head title="Home" />
            <div className="mt-12">
                <HeroSlider />
                <Features />
                <svg
                    viewBox="0 0 1440 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
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
                <Articles articles={props.articles} />
                <svg
                    viewBox="0 0 1440 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mt-32 xl:-mt-48 2xl:-mt-60 pt-16"
                >
                    <path
                        d="M-1.10282 32.9179C257.416 -97.7547 378.924 211.968 723.949 77.4025C1068.97 -57.1631 1442 77.4026 1442 77.4026V738H-1.10282C-1.10282 738 -259.621 163.591 -1.10282 32.9179Z"
                        fill="#55C4CA"
                    />
                </svg>
                <Report />
            </div>
        </AuthenticatedLayout>
    );
}
