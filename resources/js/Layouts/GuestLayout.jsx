import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex items-center guest-background md:bg-white">
            <Head>
                <link rel="icon" href="/assets/img/logo/logo-samudralaya.png" />
            </Head>
            <div className="flex-1 mx-auto">
                <div className="max-md:px-4 md:flex md:flex-row">
                    <div className="h-auto md:w-1/2 hidden md:block">
                        <img
                            className="object-cover w-full h-screen"
                            src="https://images.unsplash.com/photo-1624281450963-e33ac96170be?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="img"
                        />
                    </div>
                    <div className="flex items-center justify-center px-3 py-6 sm:py-12 md:w-1/2 auth-card max-h-screen">
                        <div className="w-full sm:max-w-md p-2 overflow-hidden">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
