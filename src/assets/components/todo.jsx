import React, { useEffect, useState } from "react";
import AddList from "./form/addList";
import Item from "./list";

function ToDo(prop) {
    let [list, setList] = useState(prop.list)

    const addSubmit = (item) => {
        setList([...list, item]);
    };

    return (
        <div className="">
            <AddList onSubmit={addSubmit} />
            <ul className="mt-5">
                {list.map((val, i) => <li key={i}><Item name={val} /></li>)}
            </ul>
        </div>
    );
}

export default ToDo;