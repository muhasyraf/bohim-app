export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block font-bold text-md text-gray-800 ` + className}
        >
            {value ? value : children}
        </label>
    );
}
