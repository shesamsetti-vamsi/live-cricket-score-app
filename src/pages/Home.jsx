import { useEffect, useState } from "react";
import { fetchLiveMatches } from "../services/cricketApi";
import MatchCard from "../components/MatchCard";

function Home() {
  const [matches, setMatches] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchLiveMatches().then((data) => setMatches(data));
  }, []);

  const filteredMatches = matches.filter((match) => {
    if (filter === "upcoming") return !match.matchStarted;
    if (filter === "live") return match.matchStarted && !match.matchEnded;
    if (filter === "finished") return match.matchEnded;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Live Matches</h1>

        {/* FILTERS */}
        <div className="flex gap-2 mb-6">
          {["all", "upcoming", "live", "finished"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* GRID */}
        {filteredMatches.length === 0 ? (
          <p className="text-gray-500">No matches found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
