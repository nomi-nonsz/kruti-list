import React, { useEffect, useState, useReducer } from "react";
import Checkbox from "./form/checkbox";
import DeleteIcon from "./actions/delete"
import classNames from "classnames";
import EditIcon from "./actions/edit";
import DoneIcon from "./actions/done";

function Item(prop) {
    let name = prop.name;
    
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [wantEdit, setEdit] = useState(false);
    const [editVal, setEditVal] = useState("");

    const [elfit, setElfit] = useState(false);
    const [eldel, setEldel] = useState(false);

    const handleEdit = () => {
        if (wantEdit) {
            // prop.onEdit(prop.index);
        }
        
        setEditVal(name);
        setEdit(!wantEdit);
    }

    const handleChange = e => setEditVal(e.target.value);

    const handleDelete = () => {
        setEldel(true);
        setTimeout(() => {
            setElfit(false);
            setEldel(false);
            setTimeout(() => {
                setElfit(true);
                prop.onDelete(prop.index);
            }, 500);
        }, 1000)
    }

    useEffect(() => {
        setElfit(true);
        setEldel(false);
    }, []);

    return <div className={classNames("px-4 my-2 overflow-hidden transition-all duration-500 shadow-sm border rounded border-blue-500 border-opacity-30 flex flex-row items-center justify-between", {"opacity-0": !elfit}, {"w-0p": !elfit}, {"w-full": elfit}, {"bg-white": !eldel}, {"bg-rose-300" : eldel}, {"border-rose-700": eldel})}>
        <div className="flex flex-row items-center">
            <div className="py-4">
                <Checkbox />
            </div>
            <div className="ms-2">
                {
                    !wantEdit ? name : <input type="text" name="" id="" value={editVal} onChange={handleChange} className="px-1 bg-indigo-50 bg-opacity-80 rounded border border-blue-400 border-opacity-40" />
                }
            </div>
        </div>
        <div className="flex flex-row">
            <div className="me-2">
                { !wantEdit ? <EditIcon onClick={handleEdit} /> : <DoneIcon onClick={handleEdit} />}
            </div>
            <div className=""><DeleteIcon onClick={handleDelete} /></div>
        </div>
    </div>
}

export default Item;