

class Solution {
    public int searchInsert(int[] nums, int target) {
        
//check target is exist if yes then return index of target , if not then push target in were order and return then index.
for(int i=0; i<nums.length; i++){
  //check
  if(nums[i]!=target){
        //the push that index this target val and
        if(nums[i]>=target){
    return i;
        }
    }else{
return i;
    }
}
return nums.length;

    }
    
public static void main(String[] args){

    int[] nums = {1,3,5,6};
    int target = 2;
Solution obj = new Solution();
int res = obj.searchInsert(nums , target);
System.out.print(res);
}
}

