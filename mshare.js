/*
 * @Description: In User Settings Edit
 * @Author: hdx
 * @Date: 2020-02-11 17:54:38
 * @LastEditors: hdx
 * @LastEditTime: 2020-02-19 09:52:56
 */
var twoSum = function(nums, target) {
    for(var i=0; i<nums.length-1; i++){
         for(var j=0; j<nums.length-1; j++){
             if(nums[i]==nums[j]){
                 continue;
             }
             if(target==(nums[i]+nums[j])){
                 return [i,j]
             }
        }
    }
};

console.log(twoSum([3,3],6));