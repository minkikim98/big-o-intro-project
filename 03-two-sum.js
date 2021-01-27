function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return true;
    }
  }
  return false;
}

const iterBSearchIdx = (nums, targetNum) => {
  let length = nums.length;

  let lowerIdx = 0;
  let midIdx = Math.floor(length / 2);
  let upperIdx = length - 1;

  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((upperIdx + lowerIdx) / 2);
    if (targetNum > nums[midIdx]) lowerIdx = midIdx + 1;
    else if (targetNum < nums[midIdx]) upperIdx = midIdx - 1;
    else if (targetNum === nums[midIdx]) return midIdx;
  }

  return -1;
}

function okayTwoSum1(arr, targetSum) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let idx = iterBSearchIdx(arr, targetSum - arr[i]);
    if (idx !== -1 && idx !== i) return true;
  }
  return false;
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    let otherNum = targetSum - arr[i];
    if (otherNum === arr[i]) {
      if (obj[otherNum] !== undefined && obj[otherNum] > 1) return true;
    } else {
      if (obj[otherNum] !== undefined && obj[otherNum] > 0) return true;
    }
  }
  return false;
}

// O(n) solution would be to store indices where a value occured into an array and store that array 
// as the values of the obj and reference those array instead of indexOf()
function twoSumIndices(arr, targetSum) { 
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    let otherNum = targetSum - arr[i];
    if (otherNum === arr[i]) {
      if (obj[otherNum] !== undefined && obj[otherNum] > 1) {
        let otherIndex = arr.indexOf(otherNum, i + 1);
        return [i, otherIndex];
      }
    } else {
      if (obj[otherNum] !== undefined && obj[otherNum] > 0) {
        return [i, arr.indexOf(otherNum)];
      }
    }
  }
  return false;
}


const arr = [7, 1, 5, 5, 0, 2]; // 0,1,2,5,7
console.log(twoSumIndices(arr, 20));
console.log(twoSumIndices(arr, 10));
console.log(twoSumIndices(arr, 12));
