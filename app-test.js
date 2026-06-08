const { getPlanet } = require("./app-controller");

test("Planet should be Earth", () => {
    expect(getPlanet()).toBe("Earth");
});
