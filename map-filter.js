const numbers = [3, 5, 9, 11];

// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

// const square = element => element * element;

/**Map function */

// const result = numbers.map(function(element, index, array) {
//     return element * element;
// })

// const result = numbers.map(x => x * x);

// console.log(result);

/**
 * Filter 
 */
const bigger = numbers.filter(x => x < 5);
/**
 * Find
 */

const isThere = numbers.find(x => x < 5);
console.log(bigger);
console.log(isThere);