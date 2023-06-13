import react, { useState } from 'react';

function Checkbox() {
    const [cval, setVal] = useState(false);

    const handleChange = e => setVal(e.target.value);

    return <>
        <label
            htmlFor="tofo"
            style={{width: "20px", height: "20px"}}
            className="block border border-blue-500"
        >
            
        </label>
        <input
            type="checkbox"
            name=""
            id="tofo"
            className="hidden"
            onChange={handleChange}
            value={cval}
            />
    </>
}

export default Checkbox;