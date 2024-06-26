import { useState } from "react";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import { Head } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen">
            <Head>
                <link rel="icon" href="/assets/img/logo/logo-samudralaya.png" />
            </Head>
            <Header user={user} />
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main>{children}</main>
            <Footer />
        </div>
    );
}
