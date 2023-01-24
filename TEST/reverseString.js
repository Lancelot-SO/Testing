const reverseString = (string) => {
  return string.split("").reverse().join("");
};

reverseString("Felix");

module.exports = reverseString;
