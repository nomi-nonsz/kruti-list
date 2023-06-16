import React, { useEffect, useState, useReducer, useRef } from "react";

import Checkbox from "./form/checkbox";
import DeleteIcon from "./actions/delete"
import classNames from "classnames";
import EditIcon from "./actions/edit";
import DoneIcon from "./actions/done";
import CancelIcon from "./actions/cancel";

function Item(prop) {
    let name = prop.name;
    
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const editRef = useRef(null);

    const [wantEdit, setEdit] = useState(false);
    const [editVal, setEditVal] = useState("");

    const [elfit, setElfit] = useState(false);
    const [eldel, setEldel] = useState(false);

    const toggleEdit = () => {
        setEditVal(name);
        setEdit(!wantEdit);
    }

    const handleEdit = (e) => {
        if (wantEdit) {
            prop.onEdit(editVal, prop.index);
            setEdit(false);
        }

        e.preventDefault();
    }
    const handleChange = (e) => {setEditVal(e.target.value.length <= 50 ? e.target.value : editVal)}

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


    const listDelete = () => {
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
        editRef.current && editRef.current.focus();
    }, [wantEdit]);

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
                { !wantEdit ?
                    <p>{name}</p> :
                    <form method="post" onSubmit={handleEdit}>
                        <input
                            type="text"
                            ref={editRef}
                            name=""
                            id=""
                            value={editVal}
                            onChange={handleChange}
                            className="px-1 bg-indigo-50 bg-opacity-80 rounded border border-blue-400 border-opacity-40"
                        />
                    </form>
                }
            </div>
        </div>
        <div className="flex flex-row ps-2 items-center">
            <div className="me-2">
                { !wantEdit ? <EditIcon onClick={toggleEdit} /> : <DoneIcon active={editVal.length > 0} onClick={handleEdit} />}
            </div>
            <div className="">
                { !wantEdit ? <DeleteIcon onClick={handleDelete} /> : <CancelIcon onClick={toggleEdit} /> }
            </div>
        </div>
    </div>
}

export default Item;