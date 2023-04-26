"use client";

import { context } from "./context";
import React from "react";

export const ContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <context.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </context.Provider>
  );
};
