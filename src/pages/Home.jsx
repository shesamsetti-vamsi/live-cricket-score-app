import { useState } from "react";
import MatchCard from "../components/MatchCard";
import SkeletonCard from "../components/SkeletonCard";
import { useMatches } from "../context/MatchContext";

function Home() {
  const { matches, loading, error, retry } = useMatches();
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Live Matches
        </h1>

        {/* Error UI */}
        {error && (
          <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-lg flex justify-between items-center">
            <span>{error}</span>
            <button
              onClick={retry}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Search */}
        <input
          type="text"
          placeholder="Search by team name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4 w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
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
              {type}
            </button>
          ))}
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : filteredMatches.length === 0 ? (
          <p className="text-gray-500 text-center">
            No matches found
          </p>
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
