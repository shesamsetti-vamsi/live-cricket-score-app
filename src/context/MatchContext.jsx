import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchLiveMatches } from "../services/cricketApi";

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMatches = async () => {
    try {
      setLoading(true);
      const data = await fetchLiveMatches();
      setMatches(data);
      setError(null);
    } catch (err) {
      setError("Failed to load matches. Please try again.");
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <MatchContext.Provider
      value={{ matches, loading, error, retry: loadMatches }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export const useMatches = () => useContext(MatchContext);
