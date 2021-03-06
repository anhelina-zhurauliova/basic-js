const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== "string" || !sampleActivity) {
    return false;
  }
  sampleActivity = +parseFloat(sampleActivity)
  if (sampleActivity < 15 && sampleActivity > 0) {
    var sampleAge = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  }
  else { return false }
  return Math.ceil(sampleAge);
};
