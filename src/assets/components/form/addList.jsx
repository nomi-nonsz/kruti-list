import React, { useState } from "react";

function AddList(prop) {
    let [item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleSubmit = (e) => {
        if (item != "") {
            prop.onSubmit(item);
            setItem("");
        }
        e.preventDefault();
    };

    return (
        <form className="w-96 m-auto flex flex-row" onSubmit={handleSubmit}>
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
    );
}

export default AddList;