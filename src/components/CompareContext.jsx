import { createContext, useContext, useState } from "react";

const CompareContext = createContext(null);

export function CompareProvider({ children }) {
  const [items, setItems] = useState([]); // { id, slug, name, image, price, category }

  const addToCompare = (product) => {
    setItems((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromCompare = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCompare = () => setItems([]);

  const isComparing = (id) => items.some((item) => item.id === id);

  return (
    <CompareContext.Provider
      value={{
        items,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isComparing,
        compareCount: items.length,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
