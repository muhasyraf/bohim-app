import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import SearchBar from "@/Components/SearchBar";
import { useState, useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, reports }) {
    const [searchTitle, setSearchTitle] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [filteredReports, setFilteredReports] = useState(reports);
    const handleSearch = () => {
        setIsSearching(true);
        const filteredItems = reports.filter((report) => {
            const { violation, marine_biota, location, notes } = report;
            const searchTerm = searchTitle.toLowerCase();
            return (
                violation.name.toLowerCase().includes(searchTerm) ||
                marine_biota.name.toLowerCase().includes(searchTerm) ||
                location?.toLowerCase().includes(searchTerm) ||
                notes?.toLowerCase().includes(searchTerm)
            );
        });
        setFilteredReports(filteredItems);
        console.log(filteredReports);
    };
    const resetSearch = () => {
        setSearchTitle("");
        setIsSearching(false);
        setFilteredReports(reports);
    };
    // sort report from newest to oldest
    const sortedReports = reports.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });
    const statusBadge = (status) => {
        switch (status) {
            case "pending":
                return (
                    <div className="bg-yellow-200 text-yellow-800 rounded-xl px-2 py-1 text-center">
                        Pending
                    </div>
                );
            case "approved":
                return (
                    <div className="bg-green-200 text-green-800 rounded-xl px-2 py-1 text-center">
                        Approved
                    </div>
                );
            case "rejected":
                return (
                    <div className="bg-red-200 text-red-800 rounded-xl px-2 py-1 text-center">
                        Rejected
                    </div>
                );
            default:
                return (
                    <div className="bg-gray-200 text-gray-800 rounded-xl px-2 py-1 text-center">
                        Unknown
                    </div>
                );
        }
    };
    useEffect(() => {
        if (
            searchTitle === "" &&
            isSearching === true &&
            filteredReports.length === 0
        ) {
            setTimeout(() => {
                setIsSearching(false);
            }, 500);
        }
    }, [searchTitle, isSearching]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Report" />

            <div className="max-w-7xl mx-auto pt-24 pb-8 sm:px-6 lg:px-8 min-h-screen">
                <div className="max-sm:px-2 py-4 flex md:justify-between items-center gap-2">
                    <SearchBar
                        searchTitle={searchTitle}
                        setSearchTitle={setSearchTitle}
                        handleSearch={handleSearch}
                        resetSearch={resetSearch}
                        context="laporan"
                        className="w-60 md:w-80"
                    />
                    {/* create report button */}
                    <Link href={route("reports.create")}>
                        <PrimaryButton padding="py-3 px-6">
                            Create Report
                        </PrimaryButton>
                    </Link>
                </div>
                {/* report list table, consist violation name (foreign), marine biota name (foreign), location, desc, status, and notes */}
                <div className="max-sm:px-2 overflow-auto h-screen">
                    <table className="min-w-full bg-white border-2 border-gray-200">
                        <thead className="sticky top-0">
                            <tr className="border-2 border-gray-200 bg-gray-200">
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Tanggal
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Pelanggaran
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Biota
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Lokasi
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Catatan
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {isSearching ? (
                                filteredReports.length > 0 ? (
                                    filteredReports.map((report, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-200 hover:bg-gray-100 text-sm md:text-md"
                                        >
                                            <td className="py-3 px-4">
                                                {Date(report.created_at)
                                                    .toString()
                                                    .toString()
                                                    .split(" ")
                                                    .slice(0, 4)
                                                    .join(" ")}
                                            </td>
                                            <td className="py-3 px-4">
                                                {report.violation.name}
                                            </td>
                                            <td className="py-3 px-4">
                                                {report.marine_biota.name}
                                            </td>
                                            <td className="py-3 px-4">
                                                {report.location}
                                            </td>
                                            <td className="py-3 px-4">
                                                {report.notes}
                                            </td>
                                            <td className="py-3 px-4">
                                                {statusBadge(report.status)}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center py-3 px-4"
                                        >
                                            Data tidak ditemukan
                                        </td>
                                    </tr>
                                )
                            ) : (
                                sortedReports.map((report, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 hover:bg-gray-100 text-sm md:text-md"
                                    >
                                        <td className="py-3 px-4">
                                            {Date(report.created_at)
                                                .toString()
                                                .toString()
                                                .split(" ")
                                                .slice(0, 4)
                                                .join(" ")}
                                        </td>
                                        <td className="py-3 px-4">
                                            {report.violation.name}
                                        </td>
                                        <td className="py-3 px-4">
                                            {report.marine_biota.name}
                                        </td>
                                        <td className="py-3 px-4">
                                            {report.location}
                                        </td>
                                        <td className="py-3 px-4 overflow-y-auto line-clamp-3">
                                            {report.notes}
                                        </td>
                                        <td className="py-3 px-4">
                                            {statusBadge(report.status)}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
