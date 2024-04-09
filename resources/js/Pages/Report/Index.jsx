import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, reports }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Report" />

            <div className="max-w-7xl mx-auto pt-24 pb-8 sm:px-6 lg:px-8 min-h-screen">
                <div className="p-6 text-gray-900">Report List</div>
                {/* report list table, consist violation name (foreign), marine biota name (foreign), location, desc, status, and notes */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="border-2 border-gray-200 bg-gray-200">
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Violation
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Marine Biota
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Location
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Notes
                                </th>
                                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report, index) => (
                                <tr key={index}>
                                    <td className="border-2 border-gray-200 p-2">
                                        {report.violation.name}
                                    </td>
                                    <td className="border-2 border-gray-200 p-2">
                                        {report.marine_biota.name}
                                    </td>
                                    <td className="border-2 border-gray-200 p-2">
                                        {report.location}
                                    </td>
                                    <td className="border-2 border-gray-200 p-2">
                                        {report.notes}
                                    </td>
                                    <td className="border-2 border-gray-200 p-2">
                                        {report.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
