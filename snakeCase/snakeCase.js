const snakeCase = function (string) {
  let parameterType = typeof string;

  if (typeof string === "string") {
    let unpunctuatedString = string
      .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]+/gm, " ")
      .trim();
    //Checking if there is white space within our string (camel case or not)
    if (unpunctuatedString.indexOf(" ") >= 0) {
      return unpunctuatedString.replace(/\W+/gm, "_").toLowerCase();
    } else {
      return unpunctuatedString.replace(/([A-Z])/gm, "_$1").toLowerCase();
    }
  } else {
    return `ERROR, snakeCase only accepts string as parameter. Provided parameter has ${parameterType} type`;
  }
};

module.exports = snakeCase;
