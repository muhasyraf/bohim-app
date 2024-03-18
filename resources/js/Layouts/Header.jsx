import '../../css/header.css';
import PrimaryButton from "@/Components/PrimaryButton";
import { HamburgerButton } from "@/Components/Header/HamburgerButton";

export function Header({}) {
    return (
        <header>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <ul className="navigation max-w-screen-2xl flex flex-wrap justify-between items-center relative mx-auto py-3 px-5 md:font-light">
                    <a className="logo" href="#">
                        <img src="/assets/img/logo/logo-header.png" alt="header-logo"/>
                    </a>
                    <input type="checkbox" id="check" />
                    <span className="menu flex [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:text-lg md:mt-0">
                        <li className="font-bold mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#">Home</a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#">About Us</a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#">Articles</a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#">Report</a>
                        </li>
                        <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                            <a href="#">Contact</a>
                        </li>
                        <li className="w-3/4 px-4 mt-5 md:hidden">
                            <a href="/login">
                                <PrimaryButton className="w-full justify-center py-3 rounded-full">
                                    Log in
                                </PrimaryButton>
                            </a>
                        </li>
                        <li>
                            <div className="flex -space-x-1 overflow-hidden hidden ps-6 md:block">
                                <a href="/login">
                                    <img
                                        className="inline-block h-9 w-9 rounded-full hover:bg-cyan-600 p-1"
                                        src="/assets/img/user-profile.png"
                                        alt="login"
                                    ></img>
                                </a>
                            </div>
                        </li>
                        <label htmlFor="check" className="close-menu">
                            X
                        </label>
                    </span>
                    <label htmlFor="check" className="open-menu">
                        <HamburgerButton />
                    </label>
                </ul>
            </nav>
        </header>
    );
}
