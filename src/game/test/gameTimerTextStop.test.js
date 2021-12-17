/**
 * @jest-environment jsdom
 */
"use strict";
const { jest } = require("@jest/globals");
const { textContent } = require("domutils");
const { setTimer, stopTimer } = require("../gameTimer");

const timer = document.createElement("div");
timer.classList.add("timer");
document.querySelector("body").append(timer);
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

const mockFunction = jest.fn();

describe("Using function gameTimer and stopTimer", () => {
  describe("parameteres provided", () => {
    test.each`
      input
      ${{ minutes: undefined, textContent: "09:50", secondsToStop: 10 }}
    `(
      "returns $input.textContent when call stopTimer function after $input.secondsToStop seconds when first parameter for gameTimer funciton is $input.minutes",
      ({ input, expected }) => {
        setTimer(input.minutes, mockFunction);
        jest.useFakeTimers();
        const stop = () => {
          setTimeout(() => {
            stopTimer();
          }, input.secondsToStop * 1000);
        };
        stop();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(
          expect.any(Function),
          input.secondsToStop * 1000
        );
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        expect(timer.textContent).toEqual(input.textContent);
      }
    );
  });
});
