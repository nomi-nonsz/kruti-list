import React, { useState } from 'react';
import classNames from 'classnames';
import { useEffect } from 'react';

function Checkbox(prop) {
    const [cval, setVal] = useState(prop.value == null ? false : prop.value);

    const width = prop.width != null ? prop.width : "20px";
    const height = prop.height != null ? prop.height : "20px";

    const handleChange = (e) => {setVal(!cval);}

    return <>
        <button
            onClick={handleChange}
            style={{width: width, height: height}}
            className={classNames("block", "rounded", "transition", "duration-300", "relative", "border", "border-2", "border-blue-500", "text-white", {'bg-blue-500': cval})}
        >
            <i className={classNames("absolute", "inset-0", "m-auto", "transition", "duration-300", {"translate-y-1": !cval}, {"-translate-y-1": cval}, "bi", "bi-check", {'scale-0': !cval}, {'rotate-180': !cval}, {'scale-100': cval}, {'rotate-0': cval})}></i>
        </button>
    </>
}

export default Checkbox;