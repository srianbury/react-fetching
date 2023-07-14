import { createContext } from "react";
interface FetchingContextProviderType {
  defaultError?: React.ReactNode;
  defaultLoader?: React.ReactNode;
}
const FetchingContext = createContext<FetchingContextProviderType>({});
const FetchingContextProvider = FetchingContext.Provider;
export { FetchingContext, FetchingContextProvider };
