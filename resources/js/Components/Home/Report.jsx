export default function Report() {
    return (
        <div className="bg-bohim-sky">
            <div className="container relative">
                <div className="flex flex-col md:flex-row pb-24 lg:-mt-12">
                    <div className="text-center pt-10 md:w-1/2 md:flex md:flex-col md:justify-center md:flex-wrap">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bohim-jet tracking-wide">
                            Report
                        </h2>
                        <h3 className="text-md mt-6 sm:text-xl md:text-2xl font-medium text-bohim-jet tracking-wide mx-4">
                            Mari laporkan temuan aktivitas ilegal terhadap biota
                            laut yang dilindungi!
                        </h3>
                        <div className="mt-12 sm:flex justify-center">
                            <div className="">
                                <a
                                    href="#"
                                    className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-bold text-bohim-sky mx-auto bg-white hover:bg-bohim-blue hover:text-white focus:outline-none focus:border-bohim-sky transition duration-150 ease-in-out md:py-4 md:px-10"
                                >
                                    Laporkan Sekarang!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-3/4 md:w-1/2 justify-center mt-7 mx-auto">
                        <div>
                            <img
                                className="h-auto p-2 sm:p-4"
                                src="/assets/img/report.png"
                                alt="report"
                            />
                            <a
                                href="http://www.freepik.com/"
                                className="absolute bottom-0 right-5 md:right-10 lg:right-24 xl:right-32 text-black text-xs"
                            >
                                Designed by{" "}
                                <span className="text-white">Freepik</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
