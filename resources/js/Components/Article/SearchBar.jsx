import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";

export default function SearchBar() {
    return (
        <div className="flex items-center gap-2">
            <TextInput
                className="w-full bg-[#E7F3F3] border-none py-4 px-6 focus:outline-none focus:ring-2 focus:ring-bohim-sky focus:ring-opacity-50"
                placeholder="Search article..."
                rounded="rounded-full"
            />
            <Dropdown>
                <Dropdown.Trigger>
                    <div className="flex items-center justify-center w-12 h-12 bg-bohim-sky text-white rounded-full cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 512 512"
                            stroke="currentColor"
                        >
                            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
                        </svg>
                    </div>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Link>Semua</Dropdown.Link>
                    <Dropdown.Link>Category 1</Dropdown.Link>
                    <Dropdown.Link>Category 2</Dropdown.Link>
                    <Dropdown.Link>Category 3</Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}
