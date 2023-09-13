import React from "react";

function FormItem ({ className, label, name, placeholder, required, type }) {
    return (
        <div className={"" + className}>
            <label htmlFor={name} className="block mb-2">{label}</label>
            <input
                className="p-3 w-full border-2 border-blue-950 border-opacity-20 rounded block hover:border-opacity-60 transition"
                type={type || "text"}
                required={required || false}
                placeholder={placeholder || ""}
                name={name}
                id={name}
            />
        </div>
    )
}

export default FormItem;