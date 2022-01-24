const removeFromArray = function (array, ...args) {
  let ToDelete = [...args];

  let ToDeleteSet = new Set(ToDelete);

  let newArray = array.filter((item) => {
    return !ToDeleteSet.has(item);
  });
  return newArray;
};

module.exports = removeFromArray;
