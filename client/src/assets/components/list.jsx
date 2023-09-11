import React, { useEffect, useState, useReducer, useRef } from "react";

import Checkbox from "./form/checkbox";
import DeleteIcon from "./actions/delete"
import classNames from "classnames";
import EditIcon from "./actions/edit";
import DoneIcon from "./actions/done";
import CancelIcon from "./actions/cancel";
import { ModalDelete } from "./modal/listModal";

function Item(prop) {
    let name = prop.name;

    const editRef = useRef(null);

    const [delview, setDelview] = useState(false);

    const [wantEdit, setEdit] = useState(false);
    
    const [editVal, setEditVal] = useState("");
    const [checkVal, setCheck] = useState(prop.check);

    const [elfit, setElfit] = useState(false);
    const [eldel, setEldel] = useState(false);

    const toggleEdit = () => {
        setEditVal(name);
        setEdit(!wantEdit);
    }

    const handleEdit = (e) => {
        if (wantEdit) {
            prop.onEdit({name: editVal, check: checkVal}, prop.index);
            setEdit(false);
        }

        e.preventDefault();
    }
    
    const handleChange = (e) => {setEditVal(e.target.value.length <= 50 ? e.target.value : editVal)}
    const checkChange = () => {
        setCheck(!checkVal);
        prop.onEdit({name: editVal, check: !checkVal}, prop.index);
    }

    const handleDelete = async () => {
        // callback hell💀💀
        setEldel(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setElfit(false);
        setEldel(false);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setElfit(true);
        prop.onDelete(prop.index);
    }

    const handleRequest = () => {
        setDelview(!delview);
    }

    useEffect(() => {
        editRef.current && editRef.current.focus();
    }, [wantEdit]);

    useEffect(() => {
        setElfit(true);
        setEldel(false);
    }, []);

    return <div className={classNames("relative px-4 my-2 overflow-visible transition-all duration-500 shadow-sm border rounded border-blue-500 border-opacity-30 flex flex-row items-center justify-between", {"opacity-0": !elfit}, {"w-0p": !elfit}, {"w-full": elfit}, {"bg-white": !eldel}, {"bg-rose-300" : eldel}, {"border-rose-700": eldel})}>
        <div className="flex flex-row items-center">
            <div className="py-4">
                <Checkbox value={checkVal} handleChange={checkChange} />
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
                { !wantEdit ? <DeleteIcon onClick={handleRequest} /> : <CancelIcon onClick={toggleEdit} /> }
            </div>
        </div>
        <ModalDelete
            view={delview}
            setView={setDelview}
            handleDelete={handleDelete}
        />
    </div>
}

export default Item;