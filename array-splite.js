const nums = [1, 2, 3, 4, 5, 7, 8, 9];

// const part = nums.slice(1, 3);
// console.log(part)

const remove = nums.splice(1, 3, 500);
console.log(remove);
console.log(nums);

const together = nums.join("/");
console.log(together);