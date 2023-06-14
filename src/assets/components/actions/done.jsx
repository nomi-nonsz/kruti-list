import classNames from "classnames";
import React from "react";

function DoneIcon(prop) {
    return <button onClick={prop.active ? prop.onClick : () => {}}>
        <i className={classNames("bi bi-check-lg text-green-600 text-lg", {"opacity-30" : !prop.active})}></i>
    </button>
}

export default DoneIcon;