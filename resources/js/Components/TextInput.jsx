import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        rounded = "rounded-lg",
        isFocused = false,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm ` +
                className +
                ` ` +
                rounded
            }
            ref={input}
        />
    );
});
