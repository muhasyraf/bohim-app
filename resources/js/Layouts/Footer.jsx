import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-bohim-snow max-w-screen-2xl mx-auto">
            <div className="container-2xl flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-start md:mx-6 lg:mx-0">
                <div className="logo">
                    <Link className="logo" href={route("home")}>
                        <img
                            src="/assets/img/logo/logo.png"
                            alt="header-logo"
                            className="w-32 h-auto md:mt-1.5 md:w-24"
                        />
                    </Link>
                </div>
                {/* contact and footer nav container */}
                <div className="mt-5 min-[410px]:flex min-[410px]:gap-x-20 sm:gap-x-26 lg:gap-x-40 min-[410px]:justify-between md:mt-0">
                    <div className="contact min-[410px]:basis-1/2">
                        <h3 className="font-medium text-center text-lg md:mb-3 min-[410px]:text-start">
                            Contact Us
                        </h3>
                        <div className="mx-auto text-sm mt-3 md:mt-1">
                            {/* TODO: Add appropriate icon and change color based on figma*/}
                            <ul className="text-slate-500 ps-5 min-[410px]:ps-0">
                                <li className="flex gap-2 mb-1 md:mb-2">
                                    <img
                                        src="/assets/img/icons/email.png"
                                        alt="email"
                                    />
                                    <span>samudralaya@gmail.com</span>
                                </li>
                                <li className="flex gap-2 mb-1 md:mb-2">
                                    <img
                                        src="/assets/img/icons/phone.png"
                                        alt="email"
                                    />
                                    <span>021-87123182</span>
                                </li>
                                <li className="flex gap-2 mb-1 md:mb-2 items-start">
                                    <img
                                        src="/assets/img/icons/location.png"
                                        alt="email"
                                        className="object-none"
                                    />
                                    <p>
                                        Jalan Tikungan <br /> Bekasi 12321
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* footer nav */}
                    <div className="footer-nav mt-6 w-full min-[410px]:mt-0 min-[410px]:basis-1/2 md:mt-0">
                        <h3 className="font-medium text-center text-lg min-[410px]:text-start">
                            Menu
                        </h3>
                        <ul className="flex flex-wrap justify-evenly gap-3 px-4 mt-5 min-[410px]:flex-col min-[410px]:gap-1 min-[410px]:mt-3 min-[410px]:ps-0">
                            <li className="text-sm text-slate-500">
                                <Link href={route("home")}>Home</Link>
                            </li>
                            <li className="text-sm text-slate-500">
                                <Link href={route("about")}>About Us</Link>
                            </li>
                            <li className="text-sm text-slate-500">
                                <Link href={route("articles.index")}>
                                    Articles
                                </Link>
                            </li>
                            <li className="text-sm text-slate-500">
                                <Link href={route("reports.index")}>
                                    Report
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="social-media mt-6 md:mt-0">
                    <h3 className="font-medium text-center text-lg md:text-start">
                        Follow Us
                    </h3>
                    <div className="mt-5 md:mt-4">
                        <ul className="flex gap-3 justify-center">
                            <li>
                                <a href="">
                                    <img
                                        src="/assets/img/icons/facebook.png"
                                        alt="facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/assets/img/icons/instagram.png"
                                        alt="instagram-link"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/assets/img/icons/twitter.png"
                                        alt="twitter-link"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/assets/img/icons/linkedin.png"
                                        alt="linkedin-link"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mt-3 mx-auto lg:w-10/12">
                <hr className="h-px w-11/12 bg-slate-300 border-0 mx-auto mt-6 lg:w-full" />
            </div>
            <div className="copyright container mt-2 mb-4 text-sm text-slate-500 text-center">
                <p>&copy; 2024 Samudralaya App</p>
                <p>All Right Reserved</p>
            </div>
        </footer>
    );
}
