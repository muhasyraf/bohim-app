import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import SearchBar from "@/Components/Article/SearchBar";
import { useState, useEffect } from "react";
import Modal from "@/Components/Modal";

export default function Index({ biotas, auth }) {
    const [searchTitle, setSearchTitle] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [filteredBiotas, setFilteredBiotas] = useState(biotas);
    const [showModal, setShowModal] = useState(false);
    const [selectedBiota, setSelectedBiota] = useState({});

    const toggleModalBiota = (name) => () => {
        setShowModal(true);
        setSelectedBiota(biotas.find((biota) => biota.name === name));
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => {
            setSelectedBiota({});
        }, 350);
    };

    const handleSearch = () => {
        setIsSearching(true);
        const filteredItems = biotas.filter((article) => {
            return article.title
                .toLowerCase()
                .includes(searchTitle.toLowerCase());
        });
        setFilteredBiotas(filteredItems);
        console.log(filteredBiotas);
    };
    const resetSearch = () => {
        setSearchTitle("");
        setIsSearching(false);
        setFilteredBiotas(biotas);
    };

    useEffect(() => {
        if (
            searchTitle === "" &&
            isSearching === true &&
            filteredBiotas.length === 0
        ) {
            setTimeout(() => {
                setIsSearching(false);
            }, 500);
        }
    }, [searchTitle, isSearching]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Biota" />
            <div className="max-w-7xl mx-auto pt-24 pb-8 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-start gap-8">
                <div className="px-2 py-6 sm:px-0 w-full">
                    <SearchBar
                        searchTitle={searchTitle}
                        setSearchTitle={setSearchTitle}
                        handleSearch={handleSearch}
                        resetSearch={resetSearch}
                    />
                </div>
                <div className="container relative mt-5 mb-12">
                    <div className="text-center mb-10 xl:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                            Biota Nusantara
                        </h2>
                        <h3 className="text-md mt-6 sm:text-xl md:text-2xl font-medium text-bohim-jet tracking-wide mx-4">
                            Yuk, kenalin teman-teman kita si penguasa laut
                            Nusantara yang dilindungi Negara
                        </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4 xl:grid-cols-5">
                        {biotas.map((biota, index) => (
                            <div
                                key={index}
                                className="relative max-w-72 bg-white rounded-lg mx-auto mt-8 cursor-pointer"
                                onClick={toggleModalBiota(biota.name)}
                            >
                                <div>
                                    <img
                                        className="rounded-lg mx-auto"
                                        src={biota.photo}
                                        alt=""
                                    />
                                    <div className="absolute drop-shadow-xl ps-4 w-3/4 bottom-5">
                                        <h5 className="text-xl font-extrabold tracking-wide text-white leading-6 text-shadow-lg shadow-stone-300">
                                            {biota.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Modal show={showModal} onClose={closeModal}>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                <img
                                    className="object-cover object-center w-full h-full"
                                    src={selectedBiota.photo}
                                    alt=""
                                />
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center p-6 text-center gap-4">
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-extrabold tracking-wide text-bohim-jet">
                                        {selectedBiota.name}
                                    </h5>
                                    <p className="text-sm italic text-bohim-jet">
                                        {selectedBiota.scientific_name}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-md font-bold text-bohim-jet">
                                        Deskripsi
                                    </p>
                                    <p className="text-md text-bohim-jet overflow-y-auto max-h-40">
                                        {selectedBiota.description}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-md font-bold mt-1 text-bohim-jet">
                                        Status
                                    </p>
                                    <p className="text-md font-bold text-red-600">
                                        {selectedBiota.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
