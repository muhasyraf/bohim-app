import { useState } from "react";
import { biotaFish } from "../../../../public/data/biota-fish";
import { biotaNonFish } from "../../../../public/data/biota-non-fish";
import Modal from "../Modal";
import SecondaryButton from "../SecondaryButton";

export default function BiotaList() {
    // const [modal, setModal] = useState(false);

    // const toggleModal = () => {
    //     setModal(!modal);
    // }
    return (
        <div className="bg-bohim-cream-white">
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
                                "relative max-w-52 bg-white rounded-lg mx-auto mt-8 " +
                                (index % 2 != 0 ? "xl:pt-8" : "")
                            }
                        >
                            <a href="#">
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
                            </a>
                        </div>
                    ))}
                </div>
                {/* auto cols is for horizontal slider in mobile resolution */}
                <div className="mt-2 sm:mt-4 mb-12 grid auto-cols-max lg:auto-cols-fr grid-flow-col overflow-x-auto gap-x-4 xl:grid-cols-5">
                    {biotaNonFish.map((biota, index) => (
                        <div
                            key={index}
                            className={
                                "relative max-w-52 bg-white rounded-lg mx-auto mt-8 " +
                                (index % 2 != 0 ? "xl:pt-8" : "")
                            }
                        >
                            <a href="#">
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
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-5 sm:mt-8 md:mt-14 sm:flex justify-center pb-24">
                    <div className="">
                        <a
                            href="#"
                            className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-regular text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
                {/* TODO: Modal still not working */}
                {/* {modal && (
                <Modal show={true} >
                <p>
                    Hello Modal
                </p>
                <SecondaryButton onClick={toggleModal}>Cancel</SecondaryButton>
            </Modal>
            )} */}
            </div>
        </div>
    );
}
