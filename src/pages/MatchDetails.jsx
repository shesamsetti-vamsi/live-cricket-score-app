import { useParams, useNavigate } from "react-router-dom";
import MatchStatsSummary from "../components/MatchStatsSummary";
import MatchEventsTimeline from "../components/MatchEventsTimeline";
import useMatchDetails from "../hooks/useMatchDetails";

const MatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { match, loading, error, retry } = useMatchDetails(id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading match details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-500 gap-4">
        <p>{error}</p>
        <button
          onClick={retry}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!match) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-gray-200"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded bg-indigo-600 text-white"
          >
            Home
          </button>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          {match.name}
        </h1>

        <p className="text-gray-600 mb-6">
          {match.venue}
        </p>

        <MatchStatsSummary match={match} />
        <MatchEventsTimeline match={match} />
      </div>
    </div>
  );
};

export default MatchDetails;
