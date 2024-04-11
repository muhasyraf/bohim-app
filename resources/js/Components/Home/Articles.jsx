import NewestArticleCard from "@/Components/Article/NewestArticleCard";

export default function Articles({ articles }) {
    return (
        <div className="bg-bohim-light-blue pt-2 max-sm:pt-16">
            <div className="container relative">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                        Artikel
                    </h2>
                    <h3 className="text-md mt-6 sm:text-xl md:text-2xl font-medium text-bohim-jet tracking-wide mx-4">
                        Yuk ikuti kabar teman-teman kita si penguasa laut
                        Nusantara yang dilindungi Negara
                    </h3>
                </div>
                <NewestArticleCard newestArticles={articles} />
            </div>
        </div>
    );
}
