import { Link } from "@inertiajs/react";

export default function NewestArticleCard({ newestArticles }) {
    return (
        <div className="px-4 py-8 grid md:grid-cols-2 gap-4 md:gap-8">
            {newestArticles.map((article) => {
                if (article.id === newestArticles[0].id) {
                    return (
                        <div
                            key={article.id}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden"
                        >
                            <img
                                className="w-full h-60 object-cover object-center"
                                src={article.thumbnail}
                                alt={article.title}
                            />
                            <div className="flex flex-col justify-between p-4 h-[12rem]">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-1">
                                        {article.categories.map((category) => (
                                            <span
                                                key={category.id}
                                                className="px-2 py-1 text-lg bg-gray-200 text-gray-800 rounded-full"
                                            >
                                                {category.name}
                                            </span>
                                        ))}
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
                            <div
                                key={article.id}
                                className="flex gap-2 bg-white shadow-lg rounded-2xl overflow-hidden"
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
                                                        key={category.id}
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
    );
}
