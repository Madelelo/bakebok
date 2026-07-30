const TEMPERATURE_UNITS = new Set(["C", "F"]);

const formatTemperature = (value) =>
  Number.isInteger(value) ? value.toString() : value.toFixed(1).replace(/\.0$/, "");

export const convertTemperature = (temperature, targetUnit) => {
  const value = temperature?.value;
  const sourceUnit = temperature?.unit?.toUpperCase();

  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    !TEMPERATURE_UNITS.has(sourceUnit) ||
    !TEMPERATURE_UNITS.has(targetUnit)
  ) {
    return null;
  }

  let convertedValue = value;
  if (sourceUnit !== targetUnit) {
    convertedValue =
      targetUnit === "F" ? (value * 9) / 5 + 32 : ((value - 32) * 5) / 9;
  }

  return {
    value: formatTemperature(convertedValue),
    unit: targetUnit,
  };
};
