var threeSum = function (nums) {
  //sort array and initialize new array
  nums.sort((a, b) => a - b);

  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // console.log(i); //0 ,1 ,2 ,3

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      console.log("sum is :", sum);

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right++;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let a = threeSum(nums);
console.log(a);
//-1 + 0 + -4 = -1 + -4
