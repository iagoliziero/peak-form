import { createContext, useState } from "react";
import exerciseData from "../data/exerciseData.js";


export const NameUserContext = createContext()

function NameUserProvider({children}) {
    const [nameUser, setNameUser] = useState('')

    return (
        <NameUserContext.Provider value={{nameUser, setNameUser}}>
            {children}
        </NameUserContext.Provider>
    )

}

export default NameUserProvider;