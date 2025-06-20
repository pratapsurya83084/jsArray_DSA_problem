var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);  //sort first 
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {  //only traverse 4 index i.e quadral
    if (i > 0 && nums[i] === nums[i - 1]) continue;  //skipp duplicatge and continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; 

      let left = j + 1;  // 2nd index
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

      
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

let a = fourSum(nums, target);
console.log(a);
