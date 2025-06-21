
//search target in array if found then return its index , if not found then return order specific suitable index ,if target is greter than all elements then  push and return arr.length - 1.
function SearchPosition(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != target) {
      if (arr[i] > target) {
        return i;
      } else {
        arr.push(target);
        return arr.length - 1;
      }
    } else {
      return i;
    }
  }
}

let arr = [1, 2, 3, 5];
let target = 0;
let a = SearchPosition(arr, target); //expect 3
console.log(a);
