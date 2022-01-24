const palindromes = function (string) {
  let stringType = typeof string;
  if (typeof string === "string") {
    let normalizedString = string
      .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]+/gm, "")
      .replace(/\W/gm, "")
      .toLowerCase();

    var reversedString = normalizedString.split("").reverse().join("");

    return normalizedString === reversedString;
  } else {
    return `ERROR, palindromes only accepts string as parameter. Parameter provided is ${stringType} `;
  }
};

module.exports = palindromes;
