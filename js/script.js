function arraySplice(array, item) {
  const requestArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      requestArray.push(array[i]);
    }
  }
  return requestArray;
}

const array = [1, 2, "Valera", "Oleg", true, "Oleg"];
const item = "Oleg";

const newArray = arraySplice(array, item);
console.log(newArray);
