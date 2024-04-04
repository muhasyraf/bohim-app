import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, useForm } from "@inertiajs/react";
import SearchBar from "@/Components/Article/SearchBar";
import SectionHeading from "@/Components/Article/SectionHeading";
import NewestArticleCard from "@/Components/Article/NewestArticleCard";
import LatestUpdatedArticleCard from "@/Components/Article/LatestUpdatedArticleCard";

export default function Index({ auth, articles }) {
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
                    <SearchBar />
                </div>
                <SectionHeading title="Terbaru" />
                <NewestArticleCard newestArticles={newestArticles} />
                <SectionHeading title="Latest Update" />
                <LatestUpdatedArticleCard
                    latestUpdatedArticles={sortedLatestUpdatedArticles}
                />
            </div>
        </AuthenticatedLayout>
    );
}
