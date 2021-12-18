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

describe("Using function gameTime", () => {
  describe("with provided parameters", () => {
    test.each`
      input
      ${{ minutes: undefined, textContent: "00:00", secondsToStop: 10 * 60 }}
    `("returns $input.textContent when time is finished.", ({ input }) => {
      setTimer(input.minutes, mockFunction);
      jest.useFakeTimers();
      const stop = () => {
        setTimeout(() => {}, input.secondsToStop * 1000);
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
    });
  });
});
