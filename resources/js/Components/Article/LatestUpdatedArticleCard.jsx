import { Link } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "./Pagination";
import ArticleCard from "./ArticleCard";

export default function LatestUpdatedArticleCard({ latestUpdatedArticles }) {
    const [showingArticles, setShowingArticles] = useState(
        latestUpdatedArticles
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage, setArticlesPerPage] = useState(6);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = showingArticles.slice(
        indexOfFirstArticle,
        indexOfLastArticle
    );
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage < Math.ceil(showingArticles.length / articlesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <>
            <div className="px-4 pb-4 pt-8 grid md:grid-cols-3 gap-4 md:gap-8">
                {currentArticles.map((article, index) => (
                    <ArticleCard article={article} key={index} />
                ))}
            </div>
            <Pagination
                articlesPerPage={articlesPerPage}
                totalArticles={showingArticles.length}
                currentPage={currentPage}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </>
    );
}
