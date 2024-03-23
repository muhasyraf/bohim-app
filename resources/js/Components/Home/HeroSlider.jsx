// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/slider.css";

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={300}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
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
                    className="relative w-full h-1/2 sm:h-max flex items-center justify-center text-center bg-cover bg-center max-w-screen-2xl lg:mx-auto"
                    style={{
                        backgroundImage: "url(/assets/img/hero/shark-hero.png)",
                    }}
                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
                    <main className="px-4 sm:px-6 lg:px-8 z-10">
                        <div className="text-center pt-24 sm:pt-32 md:pt-48">
                            <h1 className="text-3xl tracking-tight leading-10 font-extrabold text-bohim-sky sm:leading-none md:text-6xl">
                                <span className="text-white">
                                    Lindungi Kehidupan
                                </span>{" "}
                                Laut
                            </h1>
                            <h2 className="mt-3 text-2xl font-extrabold text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto lg:text-4xl md:mt-5">
                                Satu Langkah Kecil, Dampak Besar
                            </h2>
                            <div className="mt-5 sm:mt-8 sm:flex justify-center pb-24 sm:pb-32 md:pb-48">
                                <div className="shadow">
                                    <a
                                        href="#"
                                        className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-regular text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                                    >
                                        Laporkan Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full h-1/2 sm:h-max flex items-center justify-center text-center bg-cover bg-center max-w-screen-2xl lg:mx-auto"
                    style={{
                        backgroundImage: "url(/assets/img/hero/shark-hero.png)",
                    }}
                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
                    <main className="px-4 sm:px-6 lg:px-8 z-10">
                        <div className="text-center pt-24 sm:pt-32 md:pt-48">
                            <h1 className="text-3xl tracking-tight leading-10 font-extrabold text-bohim-sky sm:leading-none md:text-6xl">
                                <span className="text-white">
                                    Lindungi Kehidupan
                                </span>{" "}
                                Laut
                            </h1>
                            <h2 className="mt-3 text-2xl font-extrabold text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto lg:text-4xl md:mt-5">
                                Satu Langkah Kecil, Dampak Besar
                            </h2>
                            <div className="mt-5 sm:mt-8 sm:flex justify-center pb-24 sm:pb-32 md:pb-48">
                                <div className="shadow">
                                    <a
                                        href="#"
                                        className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-regular text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                                    >
                                        Laporkan Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
