import "../../css/header.css";
import PrimaryButton from "@/Components/PrimaryButton";
import { HamburgerButton } from "@/Components/Header/HamburgerButton";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Header({ user }) {
    return (
        <nav className="bg-bohim-snow fixed w-full z-20 top-0 left-0 md:pb-0.5">
            <ul className="navigation max-w-screen-2xl flex flex-wrap justify-between items-center relative mx-auto py-1 px-5 md:font-light">
                <Link className="logo" href="#">
                    <ApplicationLogo width={65} />
                </Link>
                <input type="checkbox" id="check" />
                <div className="menu flex md:mt-0">
                    <li className="mt-3 max-w-max md:mt-1 md:ps-6 md:font-normal">
                        <NavLink
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                        <NavLink
                            href={route("about")}
                            active={route().current("about")}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                        <NavLink
                            href={route("articles.index")}
                            active={route().current("biota")}
                        >
                            Biota
                        </NavLink>
                    </li>
                    <li className="mt-3 max-w-max md:mt-1 md:ps-6">
                        <NavLink
                            href={route("articles.index")}
                            active={
                                route().current("articles.index") ||
                                route().current("articles.show")
                            }
                        >
                            Article
                        </NavLink>
                    </li>
                    <li className="mt-3 max-w-max md:mt-1 md:ps-6 md:pe-6">
                        <NavLink
                            href={route("reports.index")}
                            active={
                                route().current("reports.index") ||
                                route().current("reports.create")
                            }
                        >
                            Report
                        </NavLink>
                    </li>
                    <li className="mt-3 max-w-max md:mt-1">
                        {user ? (
                            <div className="flex items-center">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium leading-5 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        ) : (
                            <Link href={route("login")}>
                                <PrimaryButton>Login</PrimaryButton>
                            </Link>
                        )}
                    </li>
                    <label htmlFor="check" className="close-menu">
                        X
                    </label>
                </div>
                <label htmlFor="check" className="open-menu">
                    <HamburgerButton />
                </label>
            </ul>
        </nav>
    );
}
