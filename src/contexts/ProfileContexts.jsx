import { createContext, useState } from "react";

import profileData from "../data/profileData.js";


export const ProfileContexts = createContext()

function ProfileProvider({children}) {
    const [profile, setProfile] = useState(profileData)
    const [emailGoogle, setEmailGoogle] = useState(profileData)

    return (
        <ProfileContexts.Provider value={{profile, setProfile,emailGoogle, setEmailGoogle}}>
            {children}
        </ProfileContexts.Provider>
    )

}

export default ProfileProvider;