import React from "react";

function DeleteIcon(props) {
    return <button className="text-rose-600" onClick={props.onClick}>
        <i class="bi bi-trash3-fill"></i>
    </button>
}

export default DeleteIcon;