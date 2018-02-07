// Challenge
// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

// Sample Test Cases
// Input:1, 2, 3
// Output:0

// Input:4, 4, 4, 6, 2
// Output:1
//from ted
function MeanMode(arr){
  let mean = arr.reduce(function(a,b){return a+b})/arr.length;
  let mode = findMode(arr);
  return (mode.toString() === mean.toString())?1:0;
  function findMode(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
      if(!obj[arr[i]]){
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] ++
      }
    }
    let max, repeatedVal;
    for(let key in obj){
      if(!max){
        max = obj[key];
        repeatedVal = key;
      } else if(obj[key] > max){
        max = obj[key];
        repeatedVal = key;
      }
    }
    return repeatedVal;
  }
}