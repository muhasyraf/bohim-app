import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";

export default function AboutUs(props) {
    return (
        <>
            <Header user={props.auth.user} />
            <div className="mt-12 mb-10">
                <h1 className="font-bold text-3xl pt-20 mb-6 md:mb-10 text-center lg:hidden">
                    About Us
                </h1>
                <div className="container flex flex-col md:flex-row-reverse md:gap-x-6 lg:pt-20">
                    <div className="text-center flex-row self-center md:w-1/2">
                        <h1 className="hidden font-bold text-3xl lg:text-4xl text-center lg:block lg:mb-10">
                            About Us
                        </h1>
                        <p className="text-justify font-medium sm:text-lg md:text-xl lg:text-2xl md:leading-relaxed lg:leading-loose">
                            Samudralaya adalah platform web yang dirancang untuk
                            memberdayakan aktivis satwa dan pelestari lingkungan
                            dalam misi mereka melindungi biota laut dilindungi
                            dari perburuan atau penjualan ilegal.  Platform ini
                            bertujuan untuk meningkatkan kesadaran, melaporkan
                            aktivitas ilegal, memfasilitasi kolaborasi, dan
                            menyediakan sumber daya penting untuk upaya
                            konservasi biota laut dilindungi.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 mx-auto md:w-1/2 lg:p-5">
                        <img
                            className="max-h-96 sm:max-h-max sm:mx-auto"
                            src="/assets/img/about/about-image.png"
                            alt="about-us-image"
                        />
                    </div>
                </div>
            </div>
            <svg
                viewBox="0 0 1440 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-1 47.5388C-1 47.5388 333.5 -59.4235 721.5 47.5388C1109.5 154.501 1442 47.5388 1442 47.5388V1247H-1V47.5388Z"
                    fill="#E7F3F3"
                />
            </svg>
            <div className="-mt-18 md:-mt-14 bg-bohim-light-blue">
                <div className="container text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                        Visi
                    </h2>
                    <h3 className="text-md mt-6 md:mt-10 sm:text-lg md:text-xl xl:text-2xl text-bohim-jet tracking-wide italic mx-4 md:leading-10">
                        "Memberdayakan aktivis hewan (Biota Laut Dilindungi) dan
                        pelestari lingkungan dalam misi mereka melindungi biota
                        laut dilindungi dari perburuan secara ilegal.”
                    </h3>
                </div>
            </div>
            <div className="pt-2 mb-12 pb-12 bg-bohim-light-blue">
                <div className="container relative flex flex-col md:flex-row md:items-start pt-5 lg:pt-10">
                    <div className="text-justify mx-4 md:mx-auto md:w-1/2 md:text-lg md:leading-7 lg:text-xl xl:text-2xl lg:leading-loose">
                        <ol className="list-decimal lg:mx-0 lg:ms-8 font-medium">
                            <li>
                                Mengedukasi masyarakat tentang pentingnya
                                konservasi biota laut dilindungi.
                            </li>
                            <li className="lg:mt-2">
                                Memungkinkan para aktivis untuk melaporkan dan
                                melacak insiden yang terkait dengan penangkapan
                                biota laut dilindungi secara ilegal.
                            </li>
                            <li className="lg:mt-2">
                                Menghubungkan individu dan organisasi yang
                                memiliki kepedulian yang sama.
                            </li>
                            <li className="lg:mt-2">
                                Memberikan advokasi untuk perlindungan hukum
                                yang lebih kuat bagi biota laut dilindungi.
                            </li>
                        </ol>
                    </div>
                    <div className="relative flex md:w-1/3 justify-center mx-auto pt-5 md:pt-0">
                        <img
                            className="max-h-96 lg:h-auto"
                            src="/assets/img/about/girl-summer.png"
                            alt="girl-illustration"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
