import React from "react";

const MatchStatsSummary = ({ match }) => {
  if (!match) {
    return null;
  }

  const score = match.score || [];
  const teams = match.teams || [];

  return (
    <div className="mt-6 space-y-6">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-white">
        Match Statistics
      </h2>

      {/* Innings Summary */}
      <div className="grid gap-4 md:grid-cols-2">
        {score.length > 0 ? (
          score.map((inning, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-800 p-4 border border-gray-700"
            >
              <p className="text-sm text-gray-400">
                {inning.inning}
              </p>
              <p className="text-lg font-bold text-white">
                {inning.r}/{inning.w} ({inning.o} overs)
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            Score details not available.
          </p>
        )}
      </div>

      {/* Teams Info */}
      <div className="rounded-lg bg-gray-800 p-4 border border-gray-700">
        <h3 className="mb-2 text-lg font-medium text-white">
          Teams
        </h3>
        {teams.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {teams.map((team, idx) => (
              <li key={idx}>{team}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Team data unavailable.</p>
        )}
      </div>
    </div>
  );
};

export default MatchStatsSummary;
