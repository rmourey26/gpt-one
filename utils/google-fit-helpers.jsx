export const formatDate = (ts) => new Date(Number(ts)).toDateString();
export const formatTime = (ts) => new Date(Number(ts)).toLocaleTimeString();
export const formatDuration = (ms) => {
  const h = Math.floor(ms / 1000 / 60 / 60);
  const min = Math.round(ms / 1000 / 60 - 60 * h);
  if (h > 0) return `${h} h ${min} min`;
  else return `${min} min`;
};

export const activityTypes = {
  1: "🚲",
  7: "🚶",
  8: "🏃‍♂️",
  35: "🌲", // hiking
  58: "🏃‍♂️", // treadmill
  72: "🛏️",
  82: "🏊",
  87: "🎾",
  97: "🏋️",
  108: "💪",
  113: "🏋️" // crossfit
};

export const formatActivityType = (t) => activityTypes[t] ?? t;