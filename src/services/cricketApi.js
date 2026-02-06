import sampleData from "../utils/sampleResponse.json";

const BASE_URL = "https://api.cricapi.com/v1";

export async function fetchLiveMatches() {
  try {
    const res = await fetch(
      `${BASE_URL}/currentMatches?apikey=${import.meta.env.VITE_CRICKET_API_KEY}`
    );

    const json = await res.json();

    // If API returns valid matches
    if (Array.isArray(json?.data) && json.data.length > 0) {
      return json.data;
    }

    // 🔁 Fallback to sample data
    console.warn("API empty — using sample data");
    return sampleData.data;
  } catch (error) {
    console.error("API failed — using sample data");
    return sampleData.data;
  }
}
