import { useNavigate } from "react-router-dom";
import { usePinned } from "../context/PinnedContext";

const MatchCard = ({ match }) => {
  const navigate = useNavigate();
  const { togglePin, isPinned } = usePinned();

  const pinned = isPinned(match.id);

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between relative">

      {/* Pin Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePin(match);
        }}
        className={`absolute top-3 right-3 text-lg ${
          pinned ? "text-yellow-500" : "text-gray-400"
        }`}
      >
        {pinned ? "★" : "☆"}
      </button>

      <div
        onClick={() => navigate(`/match/${match.id}`)}
        className="cursor-pointer"
      >
        <h2 className="text-lg font-semibold mb-1 break-words">
          {match.name}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          {match.venue}
        </p>

        <p className="text-sm font-medium text-indigo-600">
          {match.status}
        </p>

        {Array.isArray(match.score) && match.score.length > 0 && (
          <div className="mt-3 text-sm text-gray-700">
            {match.score.map((inning, index) => (
              <p key={index}>
                {inning.inning}: {inning.r}/{inning.w} ({inning.o} ov)
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchCard;
