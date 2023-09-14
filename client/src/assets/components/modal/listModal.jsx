import React, { useEffect, useRef, useState } from "react";
import trash from "../../images/bye.png";
import { BtnPrimary, BtnSecondary } from "../actions/buttons";
import Cookies from "js-cookie";

export function ModalDelete(props) {
    const showAgain = useRef(null);

    const dontWantShow = () => {
        if (showAgain.current.checked == true) {
            console.log(showAgain.current.checked);
            Cookies.set("delete_notif", showAgain.current.checked, {
                expires: new Date(Date.now() + (7 * (3600000 * 24)))
            });
        }
    }

    const handleClose = () => {
        dontWantShow();
        props.setView(false);
    }

    const handleDelete = () => {
        dontWantShow();
        props.setView(false);
        props.handleDelete();
    }
    
    return <>
        {props.view && <div className={"right-0 w-48 z-10 absolute rounded p-4 text-center font-roboto shadow-lg bg-white translate-y-3/4 -bottom-16"}>
            <h1 className="font-bold">Are you sure??</h1>
            <div className="my-1">
                <img className="w-28 m-auto" src={trash} alt="Trash can" />
            </div>
            <p className="text-xs">This operation cannot be reversed, it will be lost forever!!</p>
            <label className="flex justify-center gap-2 my-2">
                <input type="checkbox" ref={showAgain}/>
                <div className="text-sm">Don't show again</div>
            </label>
            <div className="flex flex-row mt-3 justify-around">
                <BtnSecondary onClick={handleDelete} val="Yes" />
                <BtnPrimary onClick={handleClose} val="Nope" />
            </div>
        </div>}
    </>
}