import { createContext, useState } from "react";
import exerciseData from "../data/exerciseData.js";


export const NameContext = createContext()

function NameProvider({children}) {
    const [name, setName] = useState('')

    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )

}

export default NameProvider;