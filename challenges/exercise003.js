export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(sqt => sqt ** 2);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)).join(''); 
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
   let resultArr = people.map(subj => subj.subjects.length);
   return resultArr.reduce((a,b) => a+b, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
   const result = menu.map(mainMenu => mainMenu.ingredients.includes(ingredient));
   return result.reduce((a) => a);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const result = arr1.filter(arr => arr2.includes(arr));
  const uniqueSet = new Set(result);
  const removedDuplicateNum = [...uniqueSet];
  return removedDuplicateNum.sort();
}
