import { createContext, useState } from "react";
import profileBodyData from "../data/profileBodyData.js";


export const ProfileBodyContexts = createContext(profileBodyData)

function ProfileBodyProvider({children}) {
    const [profileBody, setProfileBody] = useState(profileBodyData)

    return (
        <ProfileBodyContexts.Provider value={{profileBody, setProfileBody}}>
            {children}
        </ProfileBodyContexts.Provider>
    )

}

export default ProfileBodyProvider;