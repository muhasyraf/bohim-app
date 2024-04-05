export default function Articles() {
    return (
        <div className="bg-bohim-light-blue">
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
                <div>
                    <div className="flex flex-col md:flex-row">
                        <div className="mt-10 px-10 md:px-4 md:pt-8 lg:px-10 w-full md:w-1/2">
                            <div className="bg-white rounded-lg shadow-lg">
                                <a href="#">
                                    <img
                                        src="/assets/img/articles/thumbnail-article.png"
                                        alt=""
                                        className="rounded-t-lg max-h-full"
                                    />
                                    <div className="p-6 md:py-5">
                                        <p className="mb-2 text-sm">Category</p>
                                        <h2 className="font-medium mb-2 text-2xl">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Tempora, laudantium.
                                        </h2>
                                        <p className="hover:text-bohim-sky underline text-sm font-bold">
                                            Read More
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-10 px-10 md:w-1/2 md:py-8 md:px-4 flex flex-col gap-10 md:gap-4">
                            <div className="bg-white rounded-lg shadow-2xl md:flex">
                                <img
                                    src="/assets/img/articles/thumbnail-article.png"
                                    alt="thumbnail"
                                    className="object-cover rounded-t-lg h-auto md:rounded-xl md:max-w-36 lg:max-w-40 lg:h-28 md:p-2"
                                />
                                <div className="p-6 md:p-0 md:ps-3">
                                    <p className="mb-2 md:mb-0 md:mt-2 text-sm md:text-xs lg:mb-2">
                                        Category
                                    </p>
                                    <h2 className="font-medium mb-2 text-2xl md:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Tempora, laudantium.
                                    </h2>
                                    <a className="hover:text-bohim-sky underline text-sm md:text-xs md:pb-2 font-bold">
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-2xl md:flex">
                                <img
                                    src="/assets/img/articles/thumbnail-article.png"
                                    alt="thumbnail"
                                    className="object-cover rounded-t-lg h-auto md:rounded-xl md:max-w-36 lg:max-w-40 lg:h-28 md:p-2"
                                />
                                <div className="p-6 md:p-0 md:ps-3">
                                    <p className="mb-2 md:mb-0 md:mt-2 text-sm md:text-xs lg:mb-2">
                                        Category
                                    </p>
                                    <h2 className="font-medium mb-2 text-2xl md:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Tempora, laudantium.
                                    </h2>
                                    <a className="hover:text-bohim-sky underline text-sm md:text-xs md:pb-2 font-bold">
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-2xl md:flex">
                                <img
                                    src="/assets/img/articles/thumbnail-article.png"
                                    alt="thumbnail"
                                    className="object-cover rounded-t-lg h-auto md:rounded-xl md:max-w-36 lg:max-w-40 lg:h-28 md:p-2"
                                />
                                <div className="p-6 md:p-0 md:ps-3">
                                    <p className="mb-2 md:mb-0 md:mt-2 text-sm md:text-xs lg:mb-2">
                                        Category
                                    </p>
                                    <h2 className="font-medium mb-2 text-2xl md:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Tempora, laudantium.
                                    </h2>
                                    <a className="hover:text-bohim-sky underline text-sm md:text-xs md:pb-2 font-bold">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:flex justify-center pb-48">
                        <div className="">
                            <a
                                href="#"
                                className="w-9/12 sm:w-full flex items-center justify-center p-1 sm:px-8 py-3 rounded-full border border-transparent text-base leading-6 font-regular text-white mx-auto bg-bohim-sky hover:bg-bohim-blue focus:outline-none focus:border-white focus:shadow-outline-white transition duration-150 ease-in-out md:py-4 md:px-10"
                            >
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
