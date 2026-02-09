export const normalizeStatus = (status = "") => {
  const s = status.toLowerCase();

  if (s.includes("progress") || s.includes("live")) {
    return "Live";
  }

  if (s.includes("not started") || s.includes("upcoming")) {
    return "Upcoming";
  }

  if (
    s.includes("complete") ||
    s.includes("finished") ||
    s.includes("result")
  ) {
    return "Finished";
  }

  return "Other";
};
