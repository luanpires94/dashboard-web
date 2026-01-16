"use client";

import { createContext, useContext, useState } from "react";

type DashboardContextData = {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
  setCategories: (value: string[]) => void;
};

const DashboardContext = createContext<DashboardContextData | undefined>(
  undefined
);

type DashboardProviderProps = {
  children: React.ReactNode;
};

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <DashboardContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        categories,
        setCategories,
      }}
    >
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
