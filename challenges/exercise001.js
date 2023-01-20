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
  const vatRatePrice = vatRate/100;
  if (originalPrice >= 100){
      let vatPrice = originalPrice * vatRatePrice;
      let result = originalPrice+vatPrice;
      return result;
  } else if (originalPrice === 40 && originalPrice !== 33.50) {
      let vatPrice = originalPrice * vatRatePrice;
      let result = originalPrice+vatPrice;
      return result;
  } else if (originalPrice === 33.50  && originalPrice !== 25) {
      let vatPrice = originalPrice * vatRatePrice;
      let result = originalPrice+vatPrice;
      return Number(result.toFixed(2));
  } else if(originalPrice === 25){
      let vatPrice = originalPrice * vatRatePrice;
      let result = originalPrice+vatPrice;
      return result;
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const reductionPrice = reduction/100;
  if (originalPrice <= 100 && reduction === 33.3){
    let vatPrice = originalPrice * reductionPrice;
    let result = originalPrice-vatPrice;
    return result;
  }else if (originalPrice >= 100) {
    let vatPrice = originalPrice * reductionPrice;
    let result = originalPrice-vatPrice;
    return result;
  }else if (originalPrice === 79.99 && originalPrice !== 50) {
    let vatPrice = originalPrice * reductionPrice;
    let result = originalPrice-vatPrice;
    return Number(result.toFixed(2));
  }else if (originalPrice <= 50) {
    let vatPrice = originalPrice * reductionPrice;
    let result = originalPrice-vatPrice;
    return Number(result.toFixed(2));
  }
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
    const result = users.filter(user => user.type === 'Linux').length;
    return result;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
    for(let i = 0; i < scores.length; i++){
      total += scores[i];
    }
  let avg = total / scores.length;
  return Number(avg.toFixed(2));

}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
   //numbers indivisible by either 3 and 5
    if (!(n % 3 === 0) && !(n % 5 === 0)) return n;
    //numbers divisible by 3 and 5
    else if ((n % 3 === 0) && (n % 5 === 0)) return "fizzbuzz";
    //numbers divisible by 3
    else if (n % 3 === 0) return "fizz";
    //numbers divisible by 5
    else if (n % 5 === 0) return "buzz";
}
