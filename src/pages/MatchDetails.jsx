import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMatchDetails } from "../services/cricketApi";
import MatchStatsSummary from "../components/MatchStatsSummary";
import MatchEventsTimeline from "../components/MatchEventsTimeline";

const MatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMatchDetails(id);
        setMatch(data);
      } catch (err) {
        setError("Failed to load match details");
      } finally {
        setLoading(false);
      }
    };

    loadMatchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading match details...
      </div>
    );
  }

  if (error || !match) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error || "Match not found"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm"
          >
            Home
          </button>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold mb-2 break-words">
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
