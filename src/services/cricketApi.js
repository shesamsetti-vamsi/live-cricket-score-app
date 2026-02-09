const API_KEY = import.meta.env.VITE_CRIC_API_KEY;
const BASE_URL = "https://api.cricapi.com/v1";

if (!API_KEY) {
  console.error("❌ VITE_CRIC_API_KEY is missing");
}

/**
 * Fetch matches (free-tier safe)
 */
export const fetchLiveMatches = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/matches?apikey=${API_KEY}&offset=0`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();
    console.log("📦 MATCHES API RESPONSE:", result);

    if (result.status !== "success") {
      throw new Error(result.message || "API returned failure");
    }

    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("❌ fetchLiveMatches failed:", error);
    throw error;
  }
};

export const fetchMatchDetails = async (matchId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/match_info?apikey=${API_KEY}&id=${matchId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();

    if (result.status !== "success") {
      throw new Error("Failed to fetch match details");
    }

    return result.data;
  } catch (error) {
    console.error("❌ fetchMatchDetails failed:", error);
    throw error;
  }
};
