import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, useForm } from "@inertiajs/react";
import SearchBar from "@/Components/Article/SearchBar";
import SectionHeading from "@/Components/Article/SectionHeading";

export default function Index({ auth, articles }) {
    const sortedNewestArticles = articles.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });
    const newestArticles = sortedNewestArticles.slice(0, 4);

    const sortedUpdatedArticles = articles.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
    });
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Article" />
            <div className="max-w-7xl mx-auto pt-24 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-start gap-8">
                <div className="px-2 py-6 sm:px-0 w-full">
                    <SearchBar />
                </div>
                <SectionHeading title="Terbaru" />
                <div className="py-8 grid md:grid-cols-2 gap-8">
                    {newestArticles.map((article) => {
                        if (article.id === newestArticles[0].id) {
                            return (
                                <div
                                    key={article.id}
                                    className="bg-white shadow-md rounded-2xl overflow-hidden"
                                >
                                    <img
                                        className="w-full h-60 object-cover object-center"
                                        src={article.thumbnail}
                                        alt={article.title}
                                    />
                                    <div className="flex flex-col justify-between p-4 h-[12rem]">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-wrap gap-1">
                                                {article.categories.map(
                                                    (category) => (
                                                        <span
                                                            key={category.id}
                                                            className="px-2 py-1 text-lg bg-gray-200 text-gray-800 rounded-full"
                                                        >
                                                            {category.name}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                            <h3 className="font-semibold text-2xl text-gray-800">
                                                {article.title}
                                            </h3>
                                        </div>
                                        <div className="mt-2">
                                            <Link
                                                href={route(
                                                    "articles.show",
                                                    article.id
                                                )}
                                                className="text-lg underline hover:text-bohim-blue"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                    <div className="flex flex-col gap-4">
                        {newestArticles.map((article) => {
                            if (article.id !== newestArticles[0].id) {
                                return (
                                    // list of article card but, the image is on the left side of the card and the text is on the right side
                                    <div
                                        key={article.id}
                                        className="flex gap-2 bg-white shadow-md rounded-2xl overflow-hidden"
                                    >
                                        <img
                                            className="h-auto w-32 object-cover object-center"
                                            src={article.thumbnail}
                                            alt={article.title}
                                        />
                                        <div className="flex flex-col justify-between p-4 w-full">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-wrap gap-1">
                                                    {article.categories.map(
                                                        (category) => (
                                                            <span
                                                                key={
                                                                    category.id
                                                                }
                                                                className="px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded-full"
                                                            >
                                                                {category.name}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                                <h3 className="font-semibold text-base text-gray-800">
                                                    {article.title}
                                                </h3>
                                            </div>
                                            <div className="mt-2">
                                                <Link
                                                    href={route(
                                                        "articles.show",
                                                        article.id
                                                    )}
                                                    className="text-xs underline hover:text-bohim-blue"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
