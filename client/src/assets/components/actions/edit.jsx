import React from "react";

function EditIcon(prop) {
    return <button onClick={prop.onClick}>
        <i class="bi bi-pencil-fill text-blue-500 text-sm"></i>
    </button>
}

export default EditIcon;