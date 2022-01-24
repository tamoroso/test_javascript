const caesar = function (string, number) {
  return string
    .split("")
    .map((character) => {
      const ascii = character.charCodeAt(0);
      if (/[.,\/#!?$%\^&\*;:{}=\-_`~() ]+/gm.test(character)) return character; // Leaving punction untouched

      // Dealing with large shifts
      let normalizedNumber = number;

      if (number > 26) {
        normalizedNumber = number % 26;
      } else {
        normalizedNumber = number;
      }

      let shiftAscii = character.toUpperCase().charCodeAt(0) + normalizedNumber;
      if (shiftAscii > 90) {
        return String.fromCharCode(ascii + normalizedNumber - 90 + 64);
      } else if (shiftAscii <= 65) {
        return String.fromCharCode(ascii + normalizedNumber + 90 - 64);
      } else {
        return String.fromCharCode(ascii + normalizedNumber);
      }
    })
    .join("");
};

module.exports = caesar;
