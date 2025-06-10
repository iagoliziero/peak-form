import { createContext, useState } from "react";
import profileData from "../data/profileData";

export const NameContext = createContext();

function NameProvider({ children }) {
  const [name, setName] = useState(profileData);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
