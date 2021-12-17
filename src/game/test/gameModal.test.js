/**
 * @jest-environment jsdom
 */
"use strict";
const { displayModal, closeModal } = require("../gameOverModal");

describe("Use modal function", () => {
  describe("called displayModal with provided parameters", () => {
    test.each`
      input
      ${{ settlement: "Victory", result: "win", points: 8 }}
    `("and check is modal inside dom", ({ input, expected }) => {
      displayModal(input.settlement, input.result, input.points);
      const modal = document.querySelector(".modal");
      expect(modal).toBeInTheDocument;
    });
  });
  describe("called displayModal with provided parameters", () => {
    test.each`
      input
      ${{ settlement: "Victory", result: "win", points: 8, win: true }}
      ${{ settlement: "Defeat", result: "lose", points: 5, win: false }}
    `("and check settlement text", ({ input, expected }) => {
      displayModal(input.settlement, input.result, input.points);
      let settlement = document.querySelector(".modal__settlement");
      if (input.win) {
        expect(settlement.textContent).toBe("Victory!");
      } else {
        expect(settlement.textContent).toBe("Defeat!");
      }
    });
  });
  describe("called displayModal with provided parameters", () => {
    test.each`
      input
      ${{ settlement: "Victory", result: "win", points: 8, win: true }}
      ${{ settlement: "Defeat", result: "lose", points: 5, win: false }}
    `("and check result text", ({ input, expected }) => {
      displayModal(input.settlement, input.result, input.points);
      let result = document.querySelector(".modal__result");
      if (input.win) {
        expect(result.textContent).toBe("You win with 8 points");
      } else {
        expect(result.textContent).toBe("You lose with 5 points");
      }
    });
  });
  describe("called closeModal with provided parameters", () => {
    test.each`
      input
      ${{ settlement: "Victory", result: "win", points: 8 }}
    `("and check modal is not inside dom", ({ input, expected }) => {
      displayModal(input.settlement, input.result, input.points);
      const modal = document.querySelector(".modal");
      expect(modal).not.toBeInTheDocument;
    });
  });
});
