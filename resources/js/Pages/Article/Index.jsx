import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import SearchBar from "@/Components/Article/SearchBar";
import SectionHeading from "@/Components/Article/SectionHeading";
import NewestArticleCard from "@/Components/Article/NewestArticleCard";
import LatestUpdatedArticleCard from "@/Components/Article/LatestUpdatedArticleCard";
import { useState, useEffect } from "react";
import ArticleCard from "@/Components/Article/ArticleCard";

export default function Index({ auth, articles }) {
    const [searchTitle, setSearchTitle] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const handleSearch = () => {
        setIsSearching(true);
        const filteredItems = articles.filter((article) => {
            return article.title
                .toLowerCase()
                .includes(searchTitle.toLowerCase());
        });
        setFilteredArticles(filteredItems);
        console.log(filteredArticles);
    };
    const resetSearch = () => {
        setSearchTitle("");
        setIsSearching(false);
        setFilteredArticles(articles);
    };

    useEffect(() => {
        if (
            searchTitle === "" &&
            isSearching === true &&
            filteredArticles.length === 0
        ) {
            setTimeout(() => {
                setIsSearching(false);
            }, 500);
        }
    }, [searchTitle, isSearching]);

    const sortedNewestArticles = articles.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });
    const newestArticles = sortedNewestArticles.slice(0, 4);

    const sortedLatestUpdatedArticles = articles.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
    });
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Article" />
            <div className="max-w-7xl mx-auto pt-24 pb-8 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-start gap-8">
                <div className="px-2 py-6 sm:px-0 w-full">
                    <SearchBar
                        searchTitle={searchTitle}
                        setSearchTitle={setSearchTitle}
                        handleSearch={handleSearch}
                        resetSearch={resetSearch}
                    />
                </div>
                {isSearching ? (
                    filteredArticles.length > 0 ? (
                        <div className="px-4 pb-4 pt-8 grid md:grid-cols-3 gap-4 md:gap-8">
                            {filteredArticles.map((article, index) => (
                                <ArticleCard article={article} key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center p-4">
                            <h1 className="text-2xl md:text-5xl leading-5 font-bold text-gray-900">
                                Artikel yang kamu cari tidak ada
                            </h1>
                        </div>
                    )
                ) : (
                    <>
                        <SectionHeading title="Terbaru" />
                        <NewestArticleCard newestArticles={newestArticles} />
                        <SectionHeading title="Latest Update" />
                        <LatestUpdatedArticleCard
                            latestUpdatedArticles={sortedLatestUpdatedArticles}
                        />
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
