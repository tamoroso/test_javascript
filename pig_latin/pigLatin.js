function translate(string) {
  let stringArray = string.split(" ");

  return stringArray
    .map((item) =>
      item
        .replace(/^([aeiouy])(.*)/gm, "$1$2ay")
        .replace(/^([^aeioy]+)(.*)/gm, "$2$1ay")
    )
    .join(" ");
}

module.exports = {
  translate,
};
