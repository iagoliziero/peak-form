import { createContext, useState } from "react";

import profileData from "../data/profileData.js";

export const ProfileContexts = createContext();

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(profileData);

  return (
    <ProfileContexts.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContexts.Provider>
  );
}

export default ProfileProvider;
