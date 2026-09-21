"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  productName: string;
  categoryName: string;
  openQuoteModal: (productName?: string, categoryName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const openQuoteModal = (product?: string, category?: string) => {
    setProductName(product || "");
    setCategoryName(category || "");
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        productName,
        categoryName,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
