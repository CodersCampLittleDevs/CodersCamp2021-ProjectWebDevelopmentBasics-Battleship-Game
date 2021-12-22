/**
 * @jest-environment jsdom
 */
const button = document.createElement("button");
button.classList.add("section__button--save");
document.body.append(button);

const input = document.createElement("input");
input.classList.add("section__input--playerName");
document.body.append(input);

const { setPlayerName, onButtonClick } = require("./settings");

describe("Using function onButtonClick and setPlayerName", () => {

  describe( "onButtonClick", () => {
  it("should set player's name on button click", () => {
    input.value = "test-name";
    onButtonClick();
    expect(localStorage.getItem("playerName")).toBe("test-name");
  });
});

describe( "setPlayerName", () => {
  it("should get player's name into input from storage", () => {
    localStorage.setItem("playerName", "test-name");
    setPlayerName();
    expect(input.value).toBe("test-name");
  });
})
});
