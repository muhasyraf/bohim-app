import { biotas } from "../../../../public/data/biota";

export default function BiotaList() {
    return (
        <div className="relative mt-24 mb-10">
            <div className="text-center mb-20">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                    Biota Nusantara
                </span>
            </div>
            <div className="container-xl lg:mx-10 mb-12 grid grid-cols-1 grid-cols-subgrid min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {biotas.map((biota, index) => (
                    <div
                        key={index}
                        // className={"relative max-w-52 bg-white rounded-lg mx-auto " + (index % 2 != 0 ? 'lg:pt-8' : '')}
                        className={
                            "relative max-w-52 bg-white rounded-lg mx-auto pt-8"
                        }
                    >
                        <a href="#">
                            <img
                                className="rounded-t-lg mx-auto"
                                src="/assets/img/biotas/arwana-red.png"
                                alt=""
                            />
                            <div className="absolute bottom-6 drop-shadow-xl ps-4 w-3/4">
                                <h5 className="text-xl font-extrabold tracking-tight text-white leading-6 text-shadow-sm shadow-stone-300">
                                    {biota.name}
                                </h5>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
