import { useState } from "react";
import { biotaFish } from "../../../../public/data/biota-fish";
import { biotaNonFish } from "../../../../public/data/biota-non-fish";
import Modal from "@/Components/Modal";
import { Link } from "@inertiajs/react";

export default function BiotaList() {
    const [showModal, setShowModal] = useState(false);
    const [selectedBiota, setSelectedBiota] = useState({});

    const toggleModalBiotaFish = (name) => () => {
        setShowModal(true);
        setSelectedBiota(biotaFish.find((biota) => biota.name === name));
    };
    const toggleModalBiotaNonFish = (name) => () => {
        setShowModal(true);
        setSelectedBiota(biotaNonFish.find((biota) => biota.name === name));
    };
    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => {
            setSelectedBiota({});
        }, 350);
    };
    return (
        <div className="bg-bohim-cream-white max-sm:pt-4 pt-8">
            <div className="container relative">
                <div className="text-center mb-10 xl:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                        Biota Nusantara
                    </h2>
                    <h3 className="text-md mt-6 sm:text-xl md:text-2xl font-medium text-bohim-jet tracking-wide mx-4">
                        Yuk, kenalin teman-teman kita si penguasa laut Nusantara
                        yang dilindungi Negara
                    </h3>
                </div>
                {/* auto cols is for horizontal slider in mobile resolution */}
                <div className="grid auto-cols-max lg:auto-cols-fr grid-flow-col overflow-x-auto gap-x-4 xl:grid-cols-5">
                    {biotaFish.map((biota, index) => (
                        <div
                            key={index}
                            className={
                                "relative max-w-52 bg-white rounded-lg mx-auto mt-8 cursor-pointer " +
                                (index % 2 != 0 ? "xl:pt-8" : "")
                            }
                            onClick={toggleModalBiotaFish(biota.name)}
                        >
                            <div>
                                <img
                                    className="rounded-lg mx-auto"
                                    src={biota.photo}
                                    alt=""
                                />
                                <div
                                    className={
                                        "absolute drop-shadow-xl ps-4 w-3/4 bottom-5 " +
                                        (index % 2 == 0 ? "xl:bottom-11" : "")
                                    }
                                >
                                    <h5 className="text-xl font-extrabold tracking-wide text-white leading-6 text-shadow-lg shadow-stone-300">
                                        {biota.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* auto cols is for horizontal slider in mobile resolution */}
                <div className="mt-2 sm:mt-4 mb-12 grid auto-cols-max lg:auto-cols-fr grid-flow-col overflow-x-auto gap-x-4 xl:grid-cols-5">
                    {biotaNonFish.map((biota, index) => (
                        <div
                            key={index}
                            className={
                                "relative max-w-52 bg-white rounded-lg mx-auto mt-8 cursor-pointer " +
                                (index % 2 != 0 ? "xl:pt-8" : "")
                            }
                            onClick={toggleModalBiotaNonFish(biota.name)}
                        >
                            <div>
                                <img
                                    className="rounded-lg mx-auto"
                                    src={biota.photo}
                                    alt=""
                                />
                                <div
                                    className={
                                        "absolute drop-shadow-xl ps-4 w-3/4 bottom-5 " +
                                        (index % 2 == 0 ? "xl:bottom-11" : "")
                                    }
                                >
                                    <h5 className="text-xl font-extrabold tracking-wide text-white leading-6 text-shadow-lg shadow-stone-400">
                                        {biota.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Todo: Create separatae component for this button. Reused in Article */}
                <div className="mt-5 sm:mt-8 md:mt-14 sm:flex justify-center pb-16">
                    <div className="">
                        <Link
                            href="#"
                            className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-regular text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                        >
                            Selengkapnya
                        </Link>
                    </div>
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
    );
}
