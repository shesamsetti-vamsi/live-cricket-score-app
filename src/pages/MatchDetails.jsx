import { useParams, Link } from "react-router-dom";
import { fetchLiveMatches } from "../services/cricketApi";
import { useEffect, useState } from "react";

function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetchLiveMatches().then((matches) => {
      const found = matches.find((m) => m.id === id);
      setMatch(found);
    });
  }, [id]);

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <p className="text-gray-500">Match not found</p>
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

        {match.score?.map((s, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{s.inning}</span>
            <span className="font-semibold">
              {s.r}/{s.w} ({s.o} ov)
            </span>
          </div>
        ))}

        <p className="text-sm text-gray-500">📍 {match.venue}</p>
        <p className="text-lg font-semibold text-indigo-600">
          {match.status}
        </p>
      </div>
    </div>
  );
}

export default MatchDetails;
