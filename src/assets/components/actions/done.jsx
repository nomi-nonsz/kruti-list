import React from "react";

function DoneIcon(prop) {
    return <button onClick={prop.onClick}>
        <i class="bi bi-check-lg text-green-600 text-lg"></i>
    </button>
}

export default DoneIcon;