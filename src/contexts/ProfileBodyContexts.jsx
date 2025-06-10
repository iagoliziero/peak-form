import { createContext, useState } from "react";
import profileBodyData from "../data/profileBodyData.js";

export const ProfileBodyContexts = createContext();

function ProfileBodyProvider({ children }) {
  const [profileBody, setProfileBody] = useState([]);

  return (
    <ProfileBodyContexts.Provider value={{ profileBody, setProfileBody }}>
      {children}
    </ProfileBodyContexts.Provider>
  );
}

export default ProfileBodyProvider;
