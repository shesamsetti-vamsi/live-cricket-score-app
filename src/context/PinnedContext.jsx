import React, { createContext, useContext, useEffect, useState } from "react";

const PinnedContext = createContext();

export const PinnedProvider = ({ children }) => {
  const [pinned, setPinned] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("pinnedMatches");
    if (stored) {
      setPinned(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pinnedMatches", JSON.stringify(pinned));
  }, [pinned]);

  const togglePin = (match) => {
    setPinned((prev) => {
      const exists = prev.find((m) => m.id === match.id);
      if (exists) {
        return prev.filter((m) => m.id !== match.id);
      }
      return [...prev, match];
    });
  };

  const isPinned = (id) => {
    return pinned.some((m) => m.id === id);
  };

  return (
    <PinnedContext.Provider
      value={{ pinned, togglePin, isPinned }}
    >
      {children}
    </PinnedContext.Provider>
  );
};

export const usePinned = () => useContext(PinnedContext);
