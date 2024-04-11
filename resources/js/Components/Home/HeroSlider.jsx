// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/slider.css";
import { Link } from "@inertiajs/react";

export default function HeroSlider() {
    return (
        <Swiper
            className="container"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={300}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            style={{
                "--swiper-navigation-size": "40px",
                "--swiper-pagination-color": "#FFFFFF",
                "--swiper-pagination-bullet-inactive-color": "#55C4CA",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
        >
            <SwiperSlide>
                <div
                    className="relative sm:h-max flex items-center justify-center md:justify-start text-center bg-cover bg-center max-w-[1920px] lg:mx-auto"
                    style={{
                        backgroundImage: "url(/assets/img/hero/shark-hero.png)",
                    }}
                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-800 opacity-75" />
                    <div className="px-4 sm:px-6 md:ps-12 z-10">
                        <div className="text-center md:text-start pt-24 sm:pt-36 md:pt-48">
                            <h1 className="text-5xl leading-10 font-extrabold text-bohim-sky sm:leading-none sm:text-5xl md:text-7xl">
                                <span className="text-white">Samudralaya</span>
                            </h1>
                            {/* <h2 className="mt-3 text-2xl font-extrabold md:text-lg lg:text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto lg:text-4xl md:mt-5">
                                Satu Langkah Kecil, Dampak Besar
                            </h2> */}
                            <h3 className="mt-6 font-medium text-md md:text-lg lg:text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5">
                                Selamat datang di Samudralaya! Kami membantu
                                Anda untuk mengenal dan melindungi kehidupan
                                laut. Temukan spesies yang dilindungi dan
                                laporkan ancamannya. Mari kita jaga laut bersama
                                untuk masa depan yang lestari.
                            </h3>
                            {/* Todo: make this button as separate component be reused */}
                            <div className="mt-5 sm:mt-8 sm:flex justify-center md:justify-start pb-24 sm:pb-32 md:pb-48">
                                <div className="shadow">
                                    <Link
                                        href="#"
                                        className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-bold text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                                    >
                                        Lebih Lanjut
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative sm:h-max flex items-center justify-center md:justify-start text-center bg-cover bg-center max-w-[1920px] lg:mx-auto"
                    style={{
                        backgroundImage:
                            "url(/assets/img/hero/dolphin-hero.png)",
                    }}
                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-800 opacity-75" />
                    <div className="px-4 sm:px-6 md:ps-12 z-10">
                        <div className="text-center md:text-start pt-24 sm:pt-36 md:pt-48">
                            <h1 className="text-5xl leading-10 font-extrabold text-bohim-sky sm:leading-none sm:text-5xl md:text-7xl">
                                <span className="text-white">Samudralaya</span>
                            </h1>
                            {/* <h2 className="mt-3 text-2xl font-extrabold md:text-lg lg:text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto lg:text-4xl md:mt-5">
                                Satu Langkah Kecil, Dampak Besar
                            </h2> */}
                            <h3 className="mt-6 font-medium text-md md:text-lg lg:text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5">
                                Selamat datang di Samudralaya! Kami membantu
                                Anda untuk mengenal dan melindungi kehidupan
                                laut. Temukan spesies yang dilindungi dan
                                laporkan ancamannya. Mari kita jaga laut bersama
                                untuk masa depan yang lestari.
                            </h3>
                            <div className="mt-5 sm:mt-8 sm:flex justify-center md:justify-start pb-24 sm:pb-32 md:pb-48">
                                <div className="shadow">
                                    <a
                                        href="#"
                                        className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-bold text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                                    >
                                        Lebih Lanjut
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
