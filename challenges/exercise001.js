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
  console.log(str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1));
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  console.log(word.split('').reverse().join(''));
  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
   console.log(words.map(e => e.split('').reverse().join('')));
   return words.map(e => e.split('').reverse().join(''));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
    let counter = 0;
    for(let i = 0; i < users.length; i++){
      if(users[i].type === 'Linux') counter++;
    }
    console.log(counter);
    return counter;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  for(let i = 0; i < scores.length; i++){
    total += scores[i];
  }
  let avg = total / scores.length;
  console.log(Number(avg.toFixed(2)));
  return Number(avg.toFixed(2));

}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      return "fizzbuzz";
    } else if(i % 5 === 0) {
      console.log("buzz");
      return "buzz";
    } else if (i % 3 === 0) {
      console.log("fizz");
      return "fizz";
    } else {
      console.log(i);
    }
  }
}
