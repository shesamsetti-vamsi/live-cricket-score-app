const PlayerStats = ({ scorecard }) => {
  if (!Array.isArray(scorecard) || scorecard.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        Player statistics not available.
      </p>
    );
  }

  const { batting = [], bowling = [] } = scorecard[0];

  return (
    <div className="space-y-8">
      {/* Batting */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Batting</h3>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 text-left">Player</th>
              <th className="border px-2 py-1">R</th>
              <th className="border px-2 py-1">B</th>
              <th className="border px-2 py-1">4s</th>
              <th className="border px-2 py-1">6s</th>
            </tr>
          </thead>
          <tbody>
            {batting.map((p, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">
                  {p.batsman?.name || "-"}
                </td>
                <td className="border px-2 py-1 text-center">{p.r}</td>
                <td className="border px-2 py-1 text-center">{p.b}</td>
                <td className="border px-2 py-1 text-center">{p["4s"]}</td>
                <td className="border px-2 py-1 text-center">{p["6s"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bowling */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Bowling</h3>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 text-left">Player</th>
              <th className="border px-2 py-1">O</th>
              <th className="border px-2 py-1">R</th>
              <th className="border px-2 py-1">W</th>
              <th className="border px-2 py-1">Eco</th>
            </tr>
          </thead>
          <tbody>
            {bowling.map((p, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">
                  {p.bowler?.name || "-"}
                </td>
                <td className="border px-2 py-1 text-center">{p.o}</td>
                <td className="border px-2 py-1 text-center">{p.r}</td>
                <td className="border px-2 py-1 text-center">{p.w}</td>
                <td className="border px-2 py-1 text-center">{p.eco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerStats;
