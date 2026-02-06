import { useEffect, useState } from "react";
import { fetchLiveMatches } from "./services/cricketApi";

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchLiveMatches();
        setMatches(data);
      } catch (err) {
        setError("Unable to load matches");
      } finally {
        setLoading(false);
      }
    };

    loadMatches();
  }, []);

  if (loading) return <p className="p-4">Loading matches...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Live Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id} className="mb-2">
            {match.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
