const stringLength = (string) => {
  if (string.length < 1) {
    return "name less than 1";
  } else if (string.length > 10) {
    return "name greater than 10";
  } else {
    return string.length;
  }
};

stringLength("Lancelot");
stringLength("");
stringLength("LancelotHanisberg");
stringLength("Felix");

module.exports = stringLength;
