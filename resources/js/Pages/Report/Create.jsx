import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Create({ auth, userId, marineBiotas, violations }) {
    const { flash } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const {
        data,
        setData,
        post: create,
        reset,
        processing,
        errors,
    } = useForm({
        user_id: userId,
        marine_biota_id: "",
        violation_id: "",
        notes: "",
        other_violation: "",
        photo: null,
        location: "",
    });

    const submit = (e) => {
        e.preventDefault();
        create(route("reports.store"), {
            preserveScroll: true,
            onError: () => console.log(errors),
            onSuccess: () => {
                resetForm(), reset();
            },
        });
        console.log(data);
    };
    const resetForm = () => {
        setData({
            marine_biota_id: "",
            violation_id: "",
            notes: "",
            photo: null,
        });
    };
    const handlePhoto = (e) => {
        setData({ ...data, photo: e.target.files[0] });
    };

    useEffect(() => {
        if (flash.success) {
            setShowModal(true);
            setTimeout(() => {
                flash.success = null;
            }, 2500);
        }
    }, [flash.success]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Report
                </h2>
            }
        >
            <Head title="Create Report" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Modal show={showModal}>
                            {/* if success show success alert, if there is something wrong in validation show also */}
                            {flash.success && (
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-xl flex flex-col justify-center items-center text-center gap-2"
                                    role="alert"
                                >
                                    <strong className="font-bold text-lg md:text-2xl">
                                        Sukses!
                                    </strong>
                                    <div className="flex flex-col">
                                        <p className="text-base md:text-xl">
                                            {flash.success}
                                        </p>

                                        <p className="text-sm md:text-lg">
                                            Periksa progress laporan kamu{" "}
                                            <Link
                                                href={route("reports.index")}
                                                className="underline text-bohim-sky hover:text-bohim-blue cursor-pointer"
                                            >
                                                di sini!
                                            </Link>
                                        </p>
                                    </div>
                                    {/* close modal button here */}
                                    <SecondaryButton
                                        onClick={() => setShowModal(false)}
                                    >
                                        Tutup
                                    </SecondaryButton>
                                </div>
                            )}
                        </Modal>
                        <form
                            onSubmit={submit}
                            className="p-6 grid sm:grid-cols-2 sm:gap-8"
                        >
                            <div className="flex flex-col gap-4">
                                <h1 className="text-2xl sm:text-4xl font-bold py-2">
                                    Apa yang kamu temukan?
                                </h1>
                                <div className="flex flex-col gap-4">
                                    <div className="py-2">
                                        <InputLabel
                                            htmlFor="marine_biota_id"
                                            value="Biota"
                                        />
                                        <select
                                            id="marine_biota_id"
                                            name="marine_biota_id"
                                            value={data.marine_biota_id}
                                            className="mt-1 block w-full border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg shadow-sm"
                                            onChange={(e) =>
                                                setData(
                                                    "marine_biota_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Biota
                                            </option>
                                            {marineBiotas.map((marineBiota) => (
                                                <option
                                                    key={marineBiota.id}
                                                    value={marineBiota.id}
                                                >
                                                    {marineBiota.name}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.marine_biota_id}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="py-2">
                                        <InputLabel
                                            htmlFor="violation_id"
                                            value="Pelanggaran"
                                        />
                                        <select
                                            id="violation_id"
                                            name="violation_id"
                                            value={data.violation_id}
                                            className="mt-1 block w-full border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg shadow-sm"
                                            onChange={(e) =>
                                                setData(
                                                    "violation_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Pilih Pelanggaran
                                            </option>
                                            {violations.map((violation) => (
                                                <option
                                                    key={violation.id}
                                                    value={violation.id}
                                                >
                                                    {violation.name}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.violation_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {data.violation_id == 5 && (
                                        <div className="pb-2">
                                            <InputLabel
                                                htmlFor="other_violation"
                                                value="Pelanggaran Lainnya"
                                                className="text-sm font-medium"
                                            />
                                            <TextInput
                                                id="other_violation"
                                                type="text"
                                                name="other_violation"
                                                value={data.other_violation}
                                                className="mt-1 block w-full"
                                                onChange={(e) => {
                                                    setData(
                                                        "other_violation",
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <InputError
                                                message={errors.other_violation}
                                                className="mt-2"
                                            />
                                        </div>
                                    )}
                                    <div className="py-2">
                                        <InputLabel
                                            htmlFor="notes"
                                            value="Catatan"
                                        />
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            value={data.notes}
                                            rows={3}
                                            className="mt-1 block w-full border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg shadow-sm"
                                            onChange={(e) =>
                                                setData("notes", e.target.value)
                                            }
                                        ></textarea>
                                        <InputError
                                            message={errors.notes}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <InputLabel
                                            htmlFor="location"
                                            value="Lokasi"
                                        />
                                        <TextInput
                                            id="location"
                                            type="text"
                                            name="location"
                                            value={data.location}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "location",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.location}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <InputLabel
                                            htmlFor="photo"
                                            value="Foto"
                                        />
                                        <Input
                                            id="photo"
                                            type="file"
                                            accept="image/*"
                                            name="photo"
                                            className="mt-1 border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg shadow-sm w-60"
                                            onChange={handlePhoto}
                                        />
                                        <InputError
                                            message={errors.photo}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2 gap-2">
                                        <div className="flex flex-row items-center justify-between w-full gap-6">
                                            <PrimaryButton
                                                type="submit"
                                                className="w-full justify-center"
                                                disabled={processing}
                                            >
                                                Submit
                                            </PrimaryButton>
                                            <div
                                                className="w-full justify-center inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-2xl font-semibold text-xs sm:text-sm text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 cursor-pointer"
                                                onClick={resetForm}
                                            >
                                                Reset
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div className="py-2">
                                    {data.photo ? (
                                        <img
                                            src={URL.createObjectURL(
                                                data.photo
                                            )}
                                            alt=""
                                            className="w-full h-96 rounded-lg shadow-md"
                                        />
                                    ) : (
                                        <img
                                            src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                                            alt=""
                                            className="w-full h-96 rounded-lg shadow-md"
                                        />
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
