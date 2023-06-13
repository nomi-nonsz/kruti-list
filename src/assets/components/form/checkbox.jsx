import react, { useState } from 'react';
import classNames from 'classnames';
import { useEffect } from 'react';

function Checkbox() {
    const [cval, setVal] = useState(false);

    const handleChange = (e) => {setVal(!cval);}

    return <>
        <button
            onClick={handleChange}
            style={{width: "20px", height: "20px"}}
            className={classNames("block", "rounded", "transition", "duration-300", "relative", "border", "border-2", "border-blue-500", "text-white", {'bg-blue-500': cval})}
        >
            <i className={classNames("absolute", "inset-0", "m-auto", "transition", "duration-300", {"translate-y-1": !cval}, {"-translate-y-1": cval}, "bi", "bi-check", {'scale-0': !cval}, {'rotate-180': !cval}, {'scale-100': cval}, {'rotate-0': cval})}></i>
        </button>
    </>
}

export default Checkbox;