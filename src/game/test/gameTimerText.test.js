/**
 * @jest-environment jsdom
 */
"use strict";
const { jest } = require("@jest/globals");
const { setTimer, stopTimer } = require("../gameTimer");

const timeout = {
  exampleSettimeout(ms) {
    setTimeout(() => {
      stopTimer();
    }, ms);
  },
};
const spy = jest.spyOn(timeout, "exampleSettimeout");

const timer = document.createElement("div");
timer.classList.add("timer");
document.querySelector("body").append(timer);
jest.useFakeTimers();

const mockFunction = jest.fn();

describe("Using function setTimer", () => {
  describe("parameteres provided", () => {
    test.each`
      input
      ${{ minutes: 2, textContent: "02:00" }}
      ${{ minutes: undefined, textContent: "10:00" }}
    `(
      "returns $input.textContent when first parameter is $input.minutes at the beginning of game",
      ({ input }) => {
        try {
          setTimer(input.minutes, mockFunction);
        } catch (err) {}
        expect(timer.textContent).toEqual(input.textContent);
      }
    );
  });
  describe("parameteres provided", () => {
    test.each`
      input
      ${{ minutes: 0.5, textContent: "error" }}
      ${{ minutes: true, textContent: "error" }}
      ${{ minutes: "test", textContent: "error" }}
    `(
      "returns $input.textContent when first parameter is number smaller than 1, bigger than 60 or another type",
      ({ input }) => {
        try {
          setTimer(input.minutes, mockFunction);
        } catch (err) {}
        expect(setTimer).toThrowError;
      }
    );
  });
  describe("parameteres provided", () => {
    test.each`
      input
      ${{ minutes: undefined, textContent: "09:50", secondsToStop: 10 }}
      ${{ minutes: 2, textContent: "01:55", secondsToStop: 5 }}
      ${{ minutes: 5, textContent: "04:30", secondsToStop: 30 }}
      ${{ minutes: 32, textContent: "30:00", secondsToStop: 120 }}
    `(
      "returns $input.textContent when call stopTimer function after $input.secondsToStop seconds when first parameter for gameTimer function is $input.minutes",
      ({ input, expected }) => {
        jest.useFakeTimers();
        setTimer(input.minutes, mockFunction);
        timeout.exampleSettimeout(input.secondsToStop * 1000);
        expect(spy).toHaveBeenCalled();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        expect(timer.textContent).toEqual(input.textContent);
      }
    );
  });
  describe("with provided parameters", () => {
    test.each`
      input
      ${{ minutes: undefined, textContent: "00:00", secondsToStop: 10 * 60 }}
      ${{ minutes: 5, textContent: "00:00", secondsToStop: 5 * 60 }}
      ${{ minutes: 15, textContent: "00:00", secondsToStop: 15 * 60 }}
    `("returns $input.textContent when time is finished.", ({ input }) => {
      jest.useFakeTimers();
      setTimer(input.minutes, mockFunction);
      timeout.exampleSettimeout(input.secondsToStop * 1000);
      expect(spy).toHaveBeenCalled();
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
      expect(timer.textContent).toEqual(input.textContent);
    });
  });
});
