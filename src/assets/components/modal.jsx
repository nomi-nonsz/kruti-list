import React, { useEffect, useState } from "react";
import trash from "../images/bye.png";
import Checkbox from "./form/checkbox";
import { BtnPrimary, BtnSecondary } from "./actions/buttons";

function ModalDelete(prop) {
    const [life, setLife] = useState(false);

    return <div className={`w-screen ${life ? "block" : "hidden"} h-screen bg-black bg-opacity-30 fixed top-0 left-0 z-10`}>
        <div className="absolute inset-0 m-auto w-96 h-fit shadow-lg bg-white py-6 px-12 rounded text-center">
            <h1 className="font-bold text-xl">Are you sure???</h1>
            <div className="my-5">
                <img className="w-48 m-auto" src={trash} alt="trash can.jpeg.bmp.png" />
            </div>
            <p>This operation cannot be reversed, it will be lost forever!!</p>
            {/* <div className="flex items-center justify-center">
                <div className="me-1">
                    <Checkbox
                        value={life}
                        width={"19px"}
                        height={"19px"}
                    />
                </div>
                <div className="text-sm my-3">Don't show this again</div>
            </div> */}
            <div className="flex flex-row justify-center mt-4">
                <div className="mx-1">
                    <BtnSecondary val="Yes"  />
                </div>
                <div className="mx-1">
                    <BtnPrimary val="Nope" />
                </div>
            </div>
        </div>
    </div>
}

export default ModalDelete;