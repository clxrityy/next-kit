"use client";
import { createContext, useContext } from "react";

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Provider: React.FC<{ children: React.ReactNode }>;
  useContext: () => T;
}

export const contextFactory: ContextFactory = (intialContextState, useContextState) => {
  const Context = createContext(intialContextState);

  const ProviderWrapper = ({children}: { children: React.ReactNode }) => {
    const contextState = useContextState();
    return <Context.Provider value={contextState}>{children}</Context.Provider>;
  };

  return {
    Provider: ProviderWrapper,
    useContext: () => useContext(Context)
  }
};
