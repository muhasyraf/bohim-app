import "../../css/header.css";
import PrimaryButton from "@/Components/PrimaryButton";
import { HamburgerButton } from "@/Components/Header/HamburgerButton";

export function Header({}) {
    return (
        <header>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 md:pb-0.5">
                <ul className="navigation max-w-screen-2xl flex flex-wrap justify-between items-center relative mx-auto py-3 px-5 md:font-light">
                    <a className="logo" href="#">
                        <img
                            src="/assets/img/logo/logo-header.png"
                            alt="header-logo"
                        />
                    </a>
                    <input type="checkbox" id="check" />
                    <div className="menu flex md:mt-0">
                        <li className="font-bold mt-3 max-w-max md:mt-1 md:ps-6 md:font-normal">
                            <a href="#" className="text-base">
                                Home
                            </a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#" className="text-base">
                                About Us
                            </a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#" className="text-base">
                                Articles
                            </a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#" className="text-base">
                                Report
                            </a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6 md:pe-6">
                            <a href="#" className="text-base">
                                Contact
                            </a>
                        </li>
                        <li className="w-3/4 px-4 mt-5 md:mt-0.5 md:px-0 md:max-w-max">
                            <a href="/login">
                                <PrimaryButton className="w-full justify-center py-3 rounded-full md:py-2 md:px-3">
                                    Log in
                                </PrimaryButton>
                            </a>
                        </li>
                        {/* <li>
                            <div className="flex -space-x-1 overflow-hidden hidden ps-6 md:block">
                                <a href="/login">
                                    <img
                                        className="inline-block h-9 w-9 rounded-full hover:bg-cyan-600 p-1"
                                        src="/assets/img/user-profile.png"
                                        alt="login"
                                    ></img>
                                </a>
                            </div>
                        </li> */}
                        <label htmlFor="check" className="close-menu">
                            X
                        </label>
                    </div>
                    <label htmlFor="check" className="open-menu">
                        <HamburgerButton />
                    </label>
                </ul>
            </nav>
        </header>
    );
}
