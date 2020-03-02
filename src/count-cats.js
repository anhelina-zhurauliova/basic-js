module.exports = function countCats(matrix) {
  let cats = 0;
  let matrix2 = matrix.flat(Infinity);
  for (let i = 0; i < matrix2.length; i++) {
    if (matrix2[i] === "^^") {
      cats++;
    }
  }
  return cats;
};
