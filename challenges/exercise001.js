// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const result = originalPrice+(originalPrice*(vatRate/100));
  const rounded = Math.round(result*100)/100;
  return rounded;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const result = originalPrice - (originalPrice * (reduction/100));
  const rounded = Math.round(result*100)/100;
  return rounded;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
   return words.map(e => e.split('').reverse().join(''));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
    return users.filter(user => user.type === 'Linux').length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  for (let e of scores) {sum += e;}
  let avg = sum/scores.length;
  return Number(avg.toFixed(2));

}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result = "";
    if(n % 3 === 0)
        result += "fizz"
    if(n % 5 === 0)
        result += "buzz"
    if (!(n % 3 === 0) && !(n % 5 === 0)) return n;
    return result;
}
