const BASE_URL = "https://api.cricapi.com/v1";

export const fetchLiveMatches = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/currentMatches?apikey=${import.meta.env.VITE_CRICKET_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch matches");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
