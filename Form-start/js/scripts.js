const words = ["lol", "brb", "btw", "lmk", "g2g"];
const abbreviations = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
console.log(abbreviations); // ['L.O.L', 'B.R.B', 'B.T.W', 'L.M.K', 'G.2.G']
