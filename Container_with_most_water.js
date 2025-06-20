
var maxArea = function(height) {
let area = 0;
for(let i = 0 ; i <height.length; i++){
    for(let j = 0; j <height.length; j++){
       let h = Math.min(height[i], height[j]);
            let w = j - i;
            let currentArea = h * w;
            area = Math.max(area, currentArea);
    }
}
return area;
};
var height = [1,8,6,2,5,4,8,3,7]

let a = maxArea(height);
console.log(a);