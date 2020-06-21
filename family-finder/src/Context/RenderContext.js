import React, { createContext, useState } from 'react'

export const renderContext = createContext()

export function StateProvider(props) {

    const [datas, setDatas] = useState([])

    const hooks = {
        datas,
        setDatas
    }

    return (
        <renderContext.Provider value={hooks}>
            {props.children}
        </renderContext.Provider>
    )
}