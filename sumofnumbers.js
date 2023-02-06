const testNums = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
  }
  return temp;
}

function sumWhile(nums) {
  let temp = 0;
  let i = 0;
  while (i < nums.length) {
    temp += nums[i];
    i++;
  }
  return temp;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.lenght));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
