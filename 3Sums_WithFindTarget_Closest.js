var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  //   console.log(nums)
  let closest = Infinity;
  //after sort arr is = [-4, -1 ,1 , 2]
  for (let i = 0; i < nums.length; i++) {
    //1+1
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      // -1   + 1        +  2 = 2  //expected = 2
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
};
//0 1 2 3 4
let nums = [-1, 2, 1, -4];
let target = 1;
let a = threeSumClosest(nums, target);
console.log(a);
