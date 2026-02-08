import { createContext, useContext, useEffect, useState } from "react";
import { fetchLiveMatches } from "../services/cricketApi";

const MatchContext = createContext();

export function MatchProvider({ children }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMatches = async () => {
    const data = await fetchLiveMatches();
    setMatches(data);
    setLoading(false);
  };

  useEffect(() => {
    loadMatches();

    const interval = setInterval(() => {
      loadMatches();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <MatchContext.Provider value={{ matches, loading }}>
      {children}
    </MatchContext.Provider>
  );
}

export function useMatches() {
  return useContext(MatchContext);
}
