import { useNavigate } from "react-router-dom";

const MatchCard = ({ match }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/match/${match.id}`)}
      className="bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer p-4 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-lg font-semibold mb-1 break-words">
          {match.name}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          {match.venue}
        </p>

        <p className="text-sm font-medium text-indigo-600">
          {match.status}
        </p>
      </div>

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
  );
};

export default MatchCard;
