/**
 * @jest-environment jsdom
 */
"use strict";
const { jest } = require("@jest/globals");
const { setTimer } = require("../gameTimer");

const timer = document.createElement("div");
timer.classList.add("timer");
document.querySelector("body").append(timer);

const mockFunciton = jest.fn();

describe("Using function setTimer", () => {
  describe("parameteres provided", () => {
    test.each`
      input
      ${{ minutes: 2, textContent: "02:00" }}
      ${{ minutes: undefined, textContent: "10:00" }}
    `(
      "returns $input.textContent when first parameter is $input.minutes at the beginning of game",
      ({ input }) => {
        setTimer(input.minutes, mockFunciton);
        expect(timer.textContent).toEqual(input.textContent);
      }
    );
  });
});
