import { useState } from "react";
import MatchCard from "../components/MatchCard";
import SkeletonCard from "../components/SkeletonCard";
import { useMatches } from "../context/MatchContext";
import { usePinned } from "../context/PinnedContext";

function Home() {
  const { matches, loading, error, retry } = useMatches();
  const { pinned } = usePinned();

  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const getMatchType = (match) => {
    const status = (match.status || "").toLowerCase();
    if (status.includes("won") || status.includes("result")) return "finished";
    if (!match.matchStarted) return "upcoming";
    if (match.matchStarted && !match.matchEnded) return "live";
    return "other";
  };

  const filteredMatches = matches
    .filter((match) => {
      if (filter === "all") return true;
      return getMatchType(match) === filter;
    })
    .filter((match) =>
      match.teams?.some((team) =>
        team.toLowerCase().includes(query.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">

        <h1 className="text-2xl font-bold mb-6">Live Matches</h1>

        {/* Pinned Section */}
        {pinned.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              ⭐ Pinned Matches
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinned.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-lg flex justify-between">
            <span>{error}</span>
            <button
              onClick={retry}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Retry
            </button>
          </div>
        )}

        {/* Matches */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
