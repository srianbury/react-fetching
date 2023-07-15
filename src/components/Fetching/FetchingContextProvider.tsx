import React from "react";
import { FetchingContext, FetchingContextType } from "./FetchingContext";

interface FetchingContextProviderType extends FetchingContextType {
  children: React.ReactNode;
}
function FetchingContextProvider({
  defaultError,
  defaultLoader,
  children,
}: FetchingContextProviderType) {
  return (
    <FetchingContext.Provider
      value={{
        defaultError,
        defaultLoader,
      }}
    >
      {children}
    </FetchingContext.Provider>
  );
}

export { FetchingContextProvider };
