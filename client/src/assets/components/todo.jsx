import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import AddList from "./form/addList";
import Item from "./list";

function ToDo(prop) {
    const [list, setList] = useState(prop.list);

    const addSubmit = (item) => {
        setList([...list, item]);
    };

    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const handleEdit = (val, index) => {
        const newList = [...list];
        newList[index] = val;
        setList(newList);
    }

    useEffect(() => {
        const token = Cookie.get("token");

        if (token) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/list`)
                .then(data => data.json())
                .then(data => {
                    setList(data.lists)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    })

    return (
        <div className="">
            <AddList onSubmit={addSubmit} />
            <ul className="mt-5">
                {list.map((val, i) => (
                    <li key={i}>
                        <Item
                            name={val.name}
                            check={val.check}
                            index={i}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;