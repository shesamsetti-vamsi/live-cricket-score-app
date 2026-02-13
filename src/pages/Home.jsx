import { useState } from "react";
import MatchCard from "../components/MatchCard";
import SkeletonCard from "../components/SkeletonCard";
import { useMatches } from "../context/MatchContext";
import { usePinned } from "../context/PinnedContext";
import { classifyMatch } from "../utils/matchUtils";

function Home() {
  const { matches, loading, error, retry } = useMatches();
  const { pinned } = usePinned();

  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filteredMatches = matches
    .filter((match) => {
      if (filter === "all") return true;
      return classifyMatch(match) === filter;
    })
    .filter((match) =>
      match.teams?.some((team) =>
        team.toLowerCase().includes(query.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">

        <h1 className="text-2xl font-bold mb-6">
          Live Matches
        </h1>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by team name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4 w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* 🔘 Filters (Restored) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["all", "upcoming", "live", "finished"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border hover:bg-gray-100"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* ⭐ Pinned Section */}
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

        {/* ❌ Error UI */}
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

        {/* 🧱 Loading / Matches */}
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
