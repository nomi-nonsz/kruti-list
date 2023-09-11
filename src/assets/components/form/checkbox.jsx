import React, { useState } from 'react';
import classNames from 'classnames';
import { useEffect } from 'react';

function Checkbox(prop) {
    const width = prop.width != null ? prop.width : "20px";
    const height = prop.height != null ? prop.height : "20px";

    return <>
        <button
            onClick={prop.handleChange}
            style={{width: width, height: height}}
            className={classNames("block", "rounded", "transition", "duration-300", "relative", "border", "border-2", "border-blue-500", "text-white", {'bg-blue-500': prop.value})}
        >
            <i className={classNames("absolute", "inset-0", "m-auto", "transition", "duration-300", {"translate-y-1": !prop.value}, {"-translate-y-1": prop.value}, "bi", "bi-check", {'scale-0': !prop.value}, {'rotate-180': !prop.value}, {'scale-100': prop.value}, {'rotate-0': prop.value})}></i>
        </button>
    </>
}

export default Checkbox;