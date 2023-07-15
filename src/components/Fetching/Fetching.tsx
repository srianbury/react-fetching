import React, { useContext } from "react";
import { FetchingContext } from "./FetchingContext";
import { FetchingContextProvider } from "./FetchingContextProvider";
import * as CONSTANTS from "./constants";

interface FetchingProps {
  error?: React.ReactNode | boolean;
  loading?: React.ReactNode | boolean;
  children: React.ReactNode | (<T>(props: T) => React.JSX.Element);
}

function Fetching({
  error,
  loading,
  children,
}: FetchingProps): React.JSX.Element {
  const { defaultError, defaultLoader } = useContext(FetchingContext);

  if (error === true) {
    if (!defaultError) {
      throw new Error(CONSTANTS.MISSING_defaultError_MESSAGE);
    }
    return <>{defaultError}</>;
  }

  if (!!error) {
    return <>{error}</>;
  }

  if (loading === true) {
    if (!defaultLoader) {
      throw new Error(CONSTANTS.MISSING_defaultLoader_MESSAGE);
    }
    return <>{defaultLoader}</>;
  }

  if (!!loading) {
    return <>{loading}</>;
  }

  return <>{children}</>;
}

export { Fetching, FetchingContextProvider, type FetchingProps };
