import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchStatsSummary from "../components/MatchStatsSummary";
import { fetchMatchDetails } from "../services/cricketApi";

const MatchDetails = () => {
  const { id } = useParams();
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
        setError("Failed to load match details.");
      } finally {
        setLoading(false);
      }
    };

    loadMatchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-400">
        Loading match details...
      </div>
    );
  }

  if (error || !match) {
    return (
      <div className="p-6 text-center text-red-400">
        {error || "Match not found"}
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 text-white">
      {/* Match Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">
          {match.name}
        </h1>
        <p className="text-gray-400">
          {match.status}
        </p>
      </div>

      {/* Match Info */}
      <div className="mb-6 rounded-lg bg-gray-800 p-4 border border-gray-700">
        <p>
          <span className="text-gray-400">Venue:</span>{" "}
          {match.venue || "N/A"}
        </p>
        <p>
          <span className="text-gray-400">Date:</span>{" "}
          {match.date || "N/A"}
        </p>
      </div>

      {/* Day 8 Feature: Match Stats Summary */}
      <MatchStatsSummary match={match} />
    </div>
  );
};

export default MatchDetails;
