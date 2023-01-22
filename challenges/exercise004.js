export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(smallNum => smallNum < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(filterName => filterName[0] === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.includes("to "));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const result = nums.filter(function (item) {
    return (parseInt(item) == item);
  });
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.flatMap(user => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(numSquared => Math.round(Math.sqrt(numSquared)*100)/100);
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(word => word.toLowerCase().includes(str.toLowerCase()));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(function(longestSide){return Math.max.apply(null, longestSide)});
}
