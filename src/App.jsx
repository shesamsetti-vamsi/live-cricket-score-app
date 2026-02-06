import { useEffect, useState } from "react";
import { fetchLiveMatches } from "./services/cricketApi";
import MatchCard from "./components/MatchCard";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchLiveMatches().then((data) => setMatches(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Live Matches</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
