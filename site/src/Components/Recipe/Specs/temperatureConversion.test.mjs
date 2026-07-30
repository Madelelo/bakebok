import test from "node:test";
import assert from "node:assert/strict";
import { convertTemperature } from "./temperatureConversion.mjs";

test("shows a Celsius recipe in Fahrenheit in Idiot mode", () => {
  assert.deepEqual(convertTemperature({ value: 180, unit: "C" }, "F"), {
    value: "356",
    unit: "F",
  });
});

test("shows a Fahrenheit recipe in Celsius in Vanlig mode", () => {
  assert.deepEqual(convertTemperature({ value: 350, unit: "F" }, "C"), {
    value: "176.7",
    unit: "C",
  });
});

test("preserves and formats a value already in the requested unit", () => {
  assert.deepEqual(convertTemperature({ value: 180.5, unit: "C" }, "C"), {
    value: "180.5",
    unit: "C",
  });
});

test("rejects invalid temperatures", () => {
  assert.equal(convertTemperature(null, "C"), null);
  assert.equal(convertTemperature({ value: "hot", unit: "C" }, "F"), null);
  assert.equal(convertTemperature({ value: 180, unit: "K" }, "C"), null);
});
