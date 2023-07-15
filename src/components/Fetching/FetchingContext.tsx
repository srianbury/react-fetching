import { createContext } from "react";
interface FetchingContextType {
  defaultError?: React.ReactNode;
  defaultLoader?: React.ReactNode;
}
const FetchingContext = createContext<FetchingContextType>({});
export { FetchingContext, type FetchingContextType };
