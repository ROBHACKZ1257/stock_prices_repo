import { useContext, createContext, useState, useReducer } from "react"

// creating our context here
const FamilyContext = createContext() {
    return useContext(FamilyContext)
}

// custom Provider component
export function FamilyProvider(props) {
return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}