import TextInput from "@/Components/TextInput";

export default function SearchBar({
    searchTitle,
    setSearchTitle,
    handleSearch,
    resetSearch,
}) {
    return (
        <div className="relative flex items-center gap-2">
            <TextInput
                className="w-full bg-[#E7F3F3] border-none py-4 px-6 focus:outline-none focus:ring-2 focus:ring-bohim-sky focus:ring-opacity-50"
                placeholder="Search article..."
                rounded="rounded-full"
                value={searchTitle}
                onChange={(e) => {
                    setSearchTitle(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <div className="absolute inset-y-[1rem] right-0 flex items-center px-6 text-[#001024]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 cursor-pointer ${
                        !searchTitle ? "hidden" : ""
                    }`}
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    onClick={resetSearch}
                >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
            </div>
        </div>
    );
}
