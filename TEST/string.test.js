const stringLength = require("../string");

const StringCode1 = () => {
  throw new Error("Character should not be less than 1 character");
};
const StringCode2 = () => {
  throw new Error("Character should not be more than 10 characters");
};

test("counts 'F' + 'e' + 'l' + 'i' + 'x' to equal 5 ", () => {
  expect(stringLength("Felix")).toEqual(5);

  expect(() => StringCode1()).toThrow(Error);
  expect(() => StringCode2()).toThrow(Error);
});
