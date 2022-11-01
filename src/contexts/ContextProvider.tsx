import React, { createContext, useContext, useState } from "react";
interface Props {
    children?: React.ReactNode;
}
const initialState = {
  openSidebar: true,
};

const StateContext = createContext(initialState);



export function ContextProvider({ children } : Props) : JSX.Element {
  const [ openSidebar, setOpenSidebar] = useState(initialState.openSidebar);
  return(
    <StateContext.Provider
      value={{openSidebar}}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return(useContext(StateContext));
}