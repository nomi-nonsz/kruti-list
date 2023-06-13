import React, { useEffect, useState, useReducer } from "react";
import Checkbox from "./form/checkbox";
import DeleteIcon from "./actions/delete"
import classNames from "classnames";

function Item(prop) {
    let name = prop.name;
    
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [elfit, setElfit] = useState(false);
    const [eldel, setEldel] = useState(false);

    const handleDelete = () => {
        setEldel(true);
        setTimeout(() => {
            setEldel(false);
            prop.onDelete(prop.index);
        }, 500)
    }

    useEffect(() => {
        setElfit(true);
        setEldel(false);
    }, []);

    return <div
            className={classNames("p-4 my-2 overflow-hidden transition-all duration-500 shadow-sm border rounded border-blue-500 border-opacity-30 flex flex-row items-center justify-between", {"opacity-0": !elfit}, {"w-0p": !elfit}, {"w-full": elfit}, {"bg-white": !eldel}, {"bg-rose-300" : eldel}, {"text-white" : eldel}, {"border-rose-700": eldel})}
        >
        <div className="flex flex-row items-center">
            <div className="">
                <Checkbox />
            </div>
            <div className="ms-2">
                {name}
            </div>
        </div>
        <div className="">
            <DeleteIcon onClick={handleDelete} />
        </div>
    </div>
}

export default Item;