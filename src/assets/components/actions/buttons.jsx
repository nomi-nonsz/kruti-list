import React from "react";

const additionalClass = "py-2 px-8 font-roboto font-bold rounded transition duration-300";

export function BtnPrimary (prop) {
    return <button className={`${additionalClass} bg-blue-600 hover:bg-blue-700 text-white`}>{prop.val}</button>
}

export function BtnSecondary (prop) {
    return <button className={`${additionalClass} text-blue-600 hover:bg-blue-100`}>{prop.val}</button>
}