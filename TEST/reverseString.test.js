const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("Reverse a string", () => {
  expect(reverseString("Felix")).toEqual("xileF");
});
