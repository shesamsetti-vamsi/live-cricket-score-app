import React from "react";

const MatchEventsTimeline = ({ match }) => {
  if (!match) return null;

  const events = [];

  // Match start event
  if (match.dateTimeGMT) {
    events.push({
      time: new Date(match.dateTimeGMT).toLocaleString(),
      title: "Match Scheduled",
      description: "The match was scheduled to begin.",
    });
  }

  // Toss event
  if (match.tossWinner && match.tossChoice) {
    events.push({
      time: "Toss",
      title: "Toss Result",
      description: `${match.tossWinner} won the toss and chose to ${match.tossChoice}.`,
    });
  }

  // Innings events
  if (Array.isArray(match.score)) {
    match.score.forEach((inning, index) => {
      events.push({
        time: `Innings ${index + 1}`,
        title: inning.inning,
        description: `${inning.r}/${inning.w} in ${inning.o} overs`,
      });
    });
  }

  // Match result
  if (match.matchEnded && match.status) {
    events.push({
      time: "Result",
      title: "Match Result",
      description: match.status,
    });
  }

  return (
    <div className="mt-8 rounded-lg bg-white p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Match Events</h2>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-4 border-indigo-600 pl-4"
          >
            <p className="text-sm text-gray-500">{event.time}</p>
            <p className="font-medium text-gray-900">
              {event.title}
            </p>
            <p className="text-gray-700 text-sm">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchEventsTimeline;
