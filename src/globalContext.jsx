import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

function GlobalContext({ children }) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Context.Provider value={{ searchText, setSearchText }}>
        {children}
      </Context.Provider>
    </>
  );
}

export default GlobalContext;
