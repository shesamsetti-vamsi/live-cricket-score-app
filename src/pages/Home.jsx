import { useState } from "react";
import MatchCard from "../components/MatchCard";
import { useMatches } from "../context/MatchContext";

function Home() {
  const { matches, loading, error } = useMatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading matches...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const now = new Date();

  /**
   * Robust match classification
   */
  const getMatchType = (match) => {
    const status = (match.status || "").toLowerCase();
    const matchTime = match.dateTimeGMT
      ? new Date(match.dateTimeGMT)
      : null;

    // Finished (most reliable)
    if (
      status.includes("won") ||
      status.includes("result") ||
      status.includes("abandoned") ||
      status.includes("draw") ||
      status.includes("tie") ||
      status.includes("no result") ||
      status.includes("complete") ||
      status.includes("finished")
    ) {
      return "finished";
    }

    // Upcoming (future match time)
    if (matchTime && matchTime > now) {
      return "upcoming";
    }

    // Live (started but not finished)
    if (
      status.includes("progress") ||
      status.includes("live") ||
      status.includes("innings") ||
      status.includes("day")
    ) {
      return "live";
    }

    return "other";
  };

  const filteredMatches = matches
    // Status filter
    .filter((match) => {
      if (filter === "all") return true;
      return getMatchType(match) === filter;
    })
    // Search filter
    .filter((match) =>
      match.teams?.some((team) =>
        team.toLowerCase().includes(query.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Live Matches</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by team name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4 w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["all", "upcoming", "live", "finished"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border hover:bg-gray-50"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Match Grid */}
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
