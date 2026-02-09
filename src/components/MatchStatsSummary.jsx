import React from "react";

const MatchStatsSummary = ({ match }) => {
  if (!match) return null;

  const { score, tossWinner, tossChoice, status } = match;

  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Match Statistics</h2>

      {/* Toss Info */}
      {tossWinner && (
        <p className="text-gray-700 mb-2">
          <strong>Toss:</strong> {tossWinner} chose to {tossChoice}
        </p>
      )}

      {/* Result */}
      {status && (
        <p className="text-gray-700 mb-4">
          <strong>Result:</strong> {status}
        </p>
      )}

      {/* Innings Scorecards */}
      <div className="space-y-4">
        {Array.isArray(score) && score.length > 0 ? (
          score.map((inning, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-gray-50"
            >
              <p className="text-sm text-gray-600">
                {inning.inning}
              </p>
              <p className="text-lg font-bold">
                {inning.r}/{inning.w}
                <span className="text-sm font-normal text-gray-600">
                  {" "}
                  ({inning.o} overs)
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            Scorecard not available for this match.
          </p>
        )}
      </div>

      {/* Player Stats Notice */}
      <div className="mt-6 text-sm text-gray-500">
        Detailed player statistics are not available on the free API tier.
      </div>
    </div>
  );
};

export default MatchStatsSummary;
