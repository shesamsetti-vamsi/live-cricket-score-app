export const classifyMatch = (match) => {
  const status = (match.status || "").toLowerCase();

  if (status.includes("won") || status.includes("result")) {
    return "finished";
  }

  if (!match.matchStarted) {
    return "upcoming";
  }

  if (match.matchStarted && !match.matchEnded) {
    return "live";
  }

  return "other";
};
