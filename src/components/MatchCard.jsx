function MatchCard({ match }) {
  let label = "Upcoming";
  let badgeColor = "bg-blue-500";
  let resultColor = "text-blue-600";

  if (match?.matchStarted && !match?.matchEnded) {
    label = "Live";
    badgeColor = "bg-green-600";
    resultColor = "text-green-600";
  }

  if (match?.matchEnded) {
    label = "Finished";
    badgeColor = "bg-gray-600";
    resultColor = "text-indigo-600";
  }

  const teamA = match?.teams?.[0];
  const teamB = match?.teams?.[1];

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-start gap-2">
        <h2 className="text-sm font-semibold leading-snug max-w-[80%]">
          {match?.name}
        </h2>

        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${badgeColor}`}
        >
          {label}
        </span>
      </div>

      {/* Teams */}
      <div className="text-center font-semibold text-sm bg-gray-50 rounded-lg py-2">
        {teamA}{" "}
        <span className="text-gray-400 font-medium">VS</span>{" "}
        {teamB}
      </div>

      {/* Scores */}
      {match?.score?.length > 0 ? (
        <div className="space-y-1 text-sm">
          {match.score.map((s, idx) => (
            <div key={idx} className="flex justify-between text-gray-700">
              <span className="truncate">{s.inning}</span>
              <span className="font-semibold">
                {s.r}/{s.w} ({s.o} ov)
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 text-center">
          Match not started yet
        </p>
      )}

      {/* Venue */}
      <p className="text-xs text-gray-500">
        📍 {match?.venue}
      </p>

      {/* Result / Status */}
      <p className={`text-sm font-semibold ${resultColor}`}>
        {match?.status}
      </p>
    </div>
  );
}

export default MatchCard;
