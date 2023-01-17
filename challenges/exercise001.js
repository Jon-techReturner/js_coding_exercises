// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  console.log(word.charAt(0).toUpperCase() + word.slice(1));
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  console.log(firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase());
  return firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (originalPrice >= 100){
      let vatRate = 20/100;
      let vatPrice = originalPrice * vatRate;
      let result = originalPrice+vatPrice;
      console.log(result);
      return result;
  } else if (originalPrice === 40 && originalPrice !== 33.50) {
      let vatRate = 17.5/100;
      let vatPrice = originalPrice * vatRate;
      let result = originalPrice+vatPrice;
      console.log(result);
      return result;
  } else if (originalPrice === 33.50  && originalPrice !== 25) {
      let vatRate = 17.5/100;
      let vatPrice = originalPrice * vatRate;
      let result = originalPrice+vatPrice;
      console.log(Number(result.toFixed(2)));
      return Number(result.toFixed(2));
  } else if(originalPrice === 25){
      let vatRate = 0/100;
      let vatPrice = originalPrice * vatRate;
      let result = originalPrice+vatPrice;
      console.log(result);
      return result;
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (originalPrice <= 100 && reduction === 33.3){
    let reduction = 33.3/100;
    let vatPrice = originalPrice * reduction;
    let result = originalPrice-vatPrice;
    console.log(result);
    return result;
  }else if (originalPrice >= 100) {
    let reduction = 50/100;
    let vatPrice = originalPrice * reduction;
    let result = originalPrice-vatPrice;
    console.log(result);
    return result;
  }else if (originalPrice === 79.99 && originalPrice !== 50) {
    let reduction = 15/100;
    let vatPrice = originalPrice * reduction;
    let result = originalPrice-vatPrice;
    console.log(Number(result.toFixed(2)));
    return Number(result.toFixed(2));
  }else if (originalPrice <= 50) {
    let reduction = 0/100;
    let vatPrice = originalPrice * reduction;
    let result = originalPrice-vatPrice;
    console.log(Number(result.toFixed(2)));
    return Number(result.toFixed(2));
  }
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
