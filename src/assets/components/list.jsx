import React from "react";
import Checkbox from "./form/checkbox";

function Item(prop) {
    let name = prop.name;

    return <div className="p-4 border rounded border-blue-500 flex flex-row">
        <div className="">
            <Checkbox />
        </div>
        <div className="">
            {name}
        </div>
    </div>
}

export default Item;