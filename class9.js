
Array.sum = function () {
  let sum = 0;
  for (el of arguments) {
    sum += el;
  }
  return sum;
};

Array.max = function () {
  let max = Array.max[0];
  for (el of arguments) {
    if (max < el) {
      max == el;
    }
  }
  return el;
};

Array.min = function () {
   let min = Array[0];
   for (el of arguments) {
     if (min > el) {
       min == el;
     }
   }
   return el;
 };

console.log(Array.sum(4, 5, 6, 8));
console.log(Array.max(10, 5, 6, 8));
console.log(Array.min(4, 5, 6, 8));


