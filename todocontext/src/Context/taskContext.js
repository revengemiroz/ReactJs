import React, { useState, createContext } from 'react';


export const taskContext = createContext()

export function TaskProvider(props) {


    const [value, setValue] = useState();
    const [todo, setTodo] = useState([])



    const hooks = {
        value,
        setValue,
        todo,
        setTodo,

    }

    return (
        <taskContext.Provider value={hooks}>
            {props.children}
        </taskContext.Provider>
    )

}

