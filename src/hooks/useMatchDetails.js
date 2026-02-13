import { useEffect, useState } from "react";
import { fetchMatchDetails } from "../services/cricketApi";

const useMatchDetails = (id) => {
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMatchDetails = async () => {
    try {
      setLoading(true);
      const data = await fetchMatchDetails(id);
      setMatch(data);
      setError(null);
    } catch (err) {
      setError("Failed to load match details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadMatchDetails();
    }
  }, [id]);

  return { match, loading, error, retry: loadMatchDetails };
};

export default useMatchDetails;
