export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return nums[(nums.indexOf(n) + 1)] || null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if(freq[char] === undefined){
      freq[char] = 1;
    }else{
      freq[char] += 1;
    }
  }
  return freq;
  
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  const nums = arrs.flatMap(r => r);
  let total = 0;
  for(let i in nums){
    total += nums[i];
  }
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
    const len = arr.length;
    for ( let i = 0; i < Math.floor(len/2); i+=2 ) {
        let sw = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = sw;
    }
    return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
    if( JSON.stringify(haystack).indexOf(searchTerm) > -1 ) {
      return true;
  }else{
    return false;
  }
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
   const splitRemoved = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
   .replace(/\s{2,}/g, " ");
   const  split = splitRemoved.split(" ");
   const wordLower = String.prototype.toLowerCase.apply(split).split(",");
   let obj = {};
    for (let i = 0; i < wordLower.length; i++) {
      if (obj[wordLower[i]] === undefined) {
        obj[wordLower[i]] = 1;
      } else {
        obj[wordLower[i]]++;
      }
    }
    
    console.log(obj);
    return obj;
};
