import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex items-center guest-background md:bg-white">
            <div className="flex-1 h-full mx-auto">
                <div className="max-md:p-2 md:flex md:flex-row">
                    <div class="h-auto md:w-1/2 hidden md:block">
                        <img
                            class="object-cover w-full h-screen"
                            src="https://images.unsplash.com/photo-1624281450963-e33ac96170be?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="img"
                        />
                    </div>
                    <div className="flex items-center justify-center px-3 py-6 sm:p-12 md:w-1/2 auth-card">
                        <div className="w-full sm:max-w-md sm:mt-6 px-6 sm:py-4 overflow-hidden">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
