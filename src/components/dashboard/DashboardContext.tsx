"use client";

import { createContext, useContext, useState } from "react";

type DashboardContextData = {
  search: string;
  setSearch: (value: string) => void;
};

const DashboardContext = createContext<DashboardContextData | undefined>(
  undefined
);

type DashboardProviderProps = {
  children: React.ReactNode;
};

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [search, setSearch] = useState("");

  return (
    <DashboardContext.Provider value={{ search, setSearch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error();
  }

  return context;
}
