import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArticleCard from "@/Components/Article/ArticleCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Show({ auth, article, relatedArticles }) {
    const formattedDate = (date) => {
        return new Date(date).toDateString();
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={article.title} />

            <div className="max-w-7xl mx-auto pt-24 pb-6 sm:px-6 min-h-screen">
                <div className="px-4 py-6 md:px-2 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
                    <div className="flex items-center pt-4">
                        <div className="ml-2 flex flex-col items-center gap-2">
                            {article.user.profile_photo_url ? (
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src={article.user.profile_photo_url}
                                    alt={article.user.name}
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 rounded-full bg-gray-300 text-gray-600"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                                </svg>
                            )}
                            <div className="text-base font-medium text-gray-900">
                                {article.user.name}
                            </div>
                            {/* create badge categories below */}
                            <div className="text-sm text-gray-500 flex gap-1">
                                {article.categories.map((category) => (
                                    <span
                                        key={category.id}
                                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full"
                                    >
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm text-gray-500">
                                Created at: {formattedDate(article.created_at)}
                            </div>
                            {article.created_at !== article.updated_at && (
                                <div className="text-sm text-gray-500">
                                    Updated at:{" "}
                                    {formattedDate(article.updated_at)}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl sm:text-6xl sm:mb-4 font-semibold text-gray-900 text-center">
                            {article.title}
                        </h1>
                        <div className="mt-4 flex flex-col gap-2 max-sm:text-justify">
                            {article.content.split("\n").map((line, index) => (
                                <div key={index} className="overflow-visible">
                                    <p className="text-lg text-gray-700">
                                        {line}
                                    </p>
                                    {index === 2 && (
                                        <img
                                            className="w-screen h-auto mt-4 mb-4"
                                            src={article.thumbnail}
                                            alt={article.title}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-8 mb-4 pt-4 px-1 md:px-4 mx-auto bg-bohim-sky">
                <h2 className="text-4xl font-semibold text-white text-center pt-6">
                    Artikel terkait
                </h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {relatedArticles.map((relatedArticle) => (
                        <SwiperSlide
                            key={relatedArticle.id}
                            className="py-8 md:py-10 px-10 lg:px-12 xl:px-16"
                        >
                            <ArticleCard article={relatedArticle} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </AuthenticatedLayout>
    );
}
