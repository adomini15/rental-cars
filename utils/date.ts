const SECONDS_DAY = 24 * 60 * 60 * 1000;

export const calculateDaysBetween = (from: Date, to: Date): number => {
    const diffInTime = to.getTime() - from.getTime();
    return Math.round(diffInTime / SECONDS_DAY);
  };