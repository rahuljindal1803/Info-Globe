import { createContext, useState } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [country, setCountry] = useState("in");

  return (
    <APIContext.Provider value={{ country, setCountry }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
