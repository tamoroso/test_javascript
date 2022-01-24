let findTheOldest = function (array) {
  let findAge = (person) => {
    if (typeof person.yearOfDeath === "undefined") {
      let now = new Date().getFullYear();
      return now - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
  };

  let oldest = array.reduce((accumulator, current) => {
    return findAge(current) > findAge(accumulator) ? current : accumulator;
  }, array[0]);

  return oldest;
};

module.exports = findTheOldest;
