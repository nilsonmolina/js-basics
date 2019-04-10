// function adjacentElementsProduct(inputArray) {
//   let max = inputArray[0] * inputArray[1];
//   for (let i = 2; i < inputArray.length; i++) {
//     const product = inputArray[i - 1] * inputArray[i];
//     if (max < product) max = product;
//   }
// }


// function makeArrayConsecutive2(statues) {
//   let count = 0;

//   statues.sort((a, b) => a - b);
//   for (let i = 1; i < statues.length; i++) {
//     const diff = statues[i] - statues[i - 1];
//     if (diff > 1) count += diff - 1;
//   }

//   return count;
// }

function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}
const test = [20, 3];
console.log(makeArrayConsecutive2(test));
