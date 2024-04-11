export default function PrimaryButton({
    className = "",
    padding = "px-4 py-2",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center bg-sky-400 border border-transparent rounded-2xl font-semibold text-xs sm:text-sm text-white uppercase tracking-widest hover:bg-sky-300 focus:bg-sky-300 active:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` +
                className +
                " " +
                padding
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
