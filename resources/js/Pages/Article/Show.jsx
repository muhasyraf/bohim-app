import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, useForm } from "@inertiajs/react";

export default function Show({ auth, article, user }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={article.title} />

            <div className="max-w-7xl mx-auto pt-24 pb-6 sm:px-6 min-h-screen">
                <div className="px-4 py-6 sm:px-0 flex items-start gap-8">
                    <div className="flex items-center pt-4">
                        <div className="ml-2 flex flex-col items-center gap-2">
                            {user.profile_photo_url ? (
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src={user.profile_photo_url}
                                    alt={user.name}
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 rounded-full bg-gray-300 text-gray-600"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                                </svg>
                            )}
                            <div className="text-base font-medium text-gray-900">
                                {user.name}
                            </div>
                            <div className="text-sm text-gray-500">
                                Created at: {article.created_at}
                            </div>
                            <div className="text-sm text-gray-500">
                                Updated at: {article.updated_at}
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
                        <h1 className="text-5xl font-semibold text-gray-900">
                            {article.title}
                        </h1>
                        <div className="mt-4">
                            <p className="text-lg leading-7 text-gray-500">
                                {article.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
