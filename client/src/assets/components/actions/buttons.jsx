import React from "react";

const additionalClass = "py-2 px-5 font-roboto font-bold rounded transition duration-300 text-xs";

export function BtnPrimary (prop) {
    return <button onClick={prop.onClick} className={`${additionalClass} bg-blue-600 hover:bg-blue-700 text-white`}>{prop.val}</button>
}

export function BtnSecondary (prop) {
    return <button onClick={prop.onClick} className={`${additionalClass} text-blue-600 hover:bg-blue-100`}>{prop.val}</button>
}