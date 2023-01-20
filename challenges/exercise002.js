export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
  
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
    return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let bus = 0;
  bus = Math.ceil(people/40);
  return bus;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let counter = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'sheep') counter++;
    }
    return counter; 
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let result = person.address.city;
  return result[0] === "M" && result === "Manchester";
}
