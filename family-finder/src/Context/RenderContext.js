import React, { createContext, useState } from 'react'

export const renderContext = createContext()

export function StateProvider(props) {

    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const hooks = {
        datas,
        setDatas,
        isLoading,
        setIsLoading
    }

    return (
        <renderContext.Provider value={hooks}>
            {props.children}
        </renderContext.Provider>
    )
}