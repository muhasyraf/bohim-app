import { Link } from "@inertiajs/react";

export default function ArticleCard({ article }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
                className="w-full h-48 object-cover object-center"
                src={article.thumbnail}
                alt={article.title}
            />
            <div className="flex flex-col justify-between p-4 h-[10.5rem]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-1">
                        {article.categories.map((category) => (
                            <span
                                key={category.id}
                                className="px-2 py-1 text-sm bg-gray-200 text-gray-800 rounded-full"
                            >
                                {category.name}
                            </span>
                        ))}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                        {article.title}
                    </h3>
                </div>
                <div className="mt-2">
                    <Link
                        href={route("articles.show", article.id)}
                        className="text-sm underline hover:text-bohim-blue"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
