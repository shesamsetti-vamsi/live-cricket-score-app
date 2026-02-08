import { useNavigate } from "react-router-dom";

function MatchCard({ match }) {
  const navigate = useNavigate();

  let label = "Upcoming";
  let badgeColor = "bg-blue-500";

  if (match.matchStarted && !match.matchEnded) {
    label = "Live";
    badgeColor = "bg-green-600";
  }

  if (match.matchEnded) {
    label = "Finished";
    badgeColor = "bg-gray-600";
  }

  return (
    <div
      onClick={() => navigate(`/match/${match.id}`)}
      className="bg-white rounded-xl shadow-md p-5 space-y-4 hover:shadow-lg transition cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-sm font-semibold max-w-[80%]">
          {match.name}
        </h2>
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${badgeColor}`}
        >
          {label}
        </span>
      </div>

      <div className="text-center font-semibold text-sm bg-gray-50 rounded-lg py-2">
        {match.teams?.[0]}{" "}
        <span className="text-gray-400">VS</span>{" "}
        {match.teams?.[1]}
      </div>

      {match.score?.length > 0 && (
        <div className="space-y-1 text-sm">
          {match.score.map((s, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{s.inning}</span>
              <span className="font-semibold">
                {s.r}/{s.w} ({s.o} ov)
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-500">📍 {match.venue}</p>
      <p className="text-sm font-semibold text-indigo-600">{match.status}</p>
    </div>
  );
}

export default MatchCard;
