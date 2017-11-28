import Tracker from "./Tracker.js"

export const newMaxValueTracker = (input) => {
  return new Tracker(input, 0, Number.MAX_SAFE_INTEGER)
}
