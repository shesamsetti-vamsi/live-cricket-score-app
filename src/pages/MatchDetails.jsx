import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMatchDetails } from "../services/cricketApi";
import MatchStatsSummary from "../components/MatchStatsSummary";

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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back / Home Buttons */}
        <div className="mb-4 flex gap-3">
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

        {/* Match Header */}
        <h1 className="text-2xl font-bold mb-1">
          {match.name}
        </h1>
        <p className="text-gray-600 mb-4">
          {match.venue}
        </p>

        {/* Match Stats */}
        <MatchStatsSummary match={match} />
      </div>
    </div>
  );
};

export default MatchDetails;
