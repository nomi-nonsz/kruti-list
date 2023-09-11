import React, { useState } from "react";

function AddList(prop) {
    const [item, setItem] = useState("");
    const [toolong, setToolong] = useState(false);

    const handleChange = (e) => {
        if (e.target.value.length <= 50) {
            setItem(e.target.value);
            setToolong(false);
        }
        else { setToolong(true); }
    };

    const handleSubmit = (e) => {
        if (item !== "") {
            prop.onSubmit({
                name: item,
                check: false
            });
            setItem("");
        }
        e.preventDefault();
    };

    return (
        <div className="w-96 m-auto">
            <form className="flex flex-row" onSubmit={handleSubmit}>
                <input
                    className="basis-3/4 border border-blue-400 border-opacity-50 rounded px-3 py-2 me-3"
                    type="text"
                    name="list-name"
                    id=""
                    placeholder="Workout 10min, Study, etc..."
                    value={item}
                    onChange={handleChange}
                />
                <button type="submit" className="basis-1/4 rounded transition duration-300 text-white bg-blue-600 hover:bg-blue-500 py-2">Add</button>
            </form>
            { toolong && <p className="text-center text-sm mt-3">Okay umm, maximum 50 character sorry...</p> }
        </div>
    );
}

export default AddList;