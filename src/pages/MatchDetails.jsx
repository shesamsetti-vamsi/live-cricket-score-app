import { useParams, Link } from "react-router-dom";
import { useMatches } from "../context/MatchContext";

function MatchDetails() {
  const { id } = useParams();
  const { matches, loading } = useMatches();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading match...
      </div>
    );
  }

  const match = matches.find((m) => m.id === id);

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <p className="text-gray-500 mb-2">Match not found</p>
        <Link to="/" className="text-indigo-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className="text-indigo-600 underline mb-4 inline-block">
        ← Back to matches
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
        <h1 className="text-xl font-bold">{match.name}</h1>

        <div className="text-center font-semibold bg-gray-50 rounded-lg py-2">
          {match.teams?.[0]} VS {match.teams?.[1]}
        </div>

        {match.score?.length > 0 ? (
          match.score.map((s, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{s.inning}</span>
              <span className="font-semibold">
                {s.r}/{s.w} ({s.o} ov)
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Match not started yet</p>
        )}

        <p className="text-sm text-gray-500">📍 {match.venue}</p>
        <p className="text-lg font-semibold text-indigo-600">
          {match.status}
        </p>
      </div>
    </div>
  );
}

export default MatchDetails;
