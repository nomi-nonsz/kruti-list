import React from "react";

function CancelIcon(prop) {
    return <button onClick={prop.onClick}>
        <i class="bi bi-x text-red-600 text-xl"></i>
    </button>
}

export default CancelIcon;