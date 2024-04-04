export default function Pagination({
    articlesPerPage,
    totalArticles,
    currentPage,
    prevPage,
    nextPage,
}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="grid md:grid-cols-3 w-full gap-4 px-4">
            <div className="justify-self-start"></div>
            <ul className="flex gap-2 justify-self-center">
                <li>
                    <button
                        onClick={prevPage}
                        className={`px-3 py-2 font-semibold text-lg text-bohim-sky border-2 border-bohim-sky rounded-full hover:bg-bohim-sky hover:text-white transition ease-in-out duration-150 ${
                            currentPage === 1 && "hidden"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-7 w-7"
                            fill="currentColor"
                        >
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </button>
                </li>
                <li>
                    <button
                        onClick={nextPage}
                        className={`px-3 py-2 font-semibold text-lg text-bohim-sky border-2 border-bohim-sky rounded-full hover:bg-bohim-sky hover:text-white transition ease-in-out duration-150 flex gap-1 justify-center items-center ${
                            currentPage === pageNumbers.length && "hidden"
                        }`}
                    >
                        Selanjutnya{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-6 w-6"
                            fill="currentColor"
                        >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </button>
                </li>
            </ul>
            <div className="flex items-center gap-2 justify-self-center md:justify-self-end">
                <span className="text-sm text-gray-800">
                    Page{" "}
                    <span className="py-1 px-2 border border-bohim-sky text-bohim-sky rounded-lg">
                        {currentPage}
                    </span>{" "}
                    of {pageNumbers.length}
                </span>
            </div>
        </div>
    );
}
