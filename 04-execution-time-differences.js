function myMin1a(list) {
  for (let i = 0; i < list.length; i++) {
    let foundSmaller = false;
    for (let j = 0; j < list.length; j++) {
      if (list[j] < list[i]) foundSmaller = true;
    }
    if (!foundSmaller) return list[i];
  }
}


function myMin1b(list) {
}


function myMin2(list) {
  return list.reduce((accum, el) => {
    if (el < accum) return el;
    else return accum;
  });
}


function largestContiguousSubsum1(array) {
  let subArrays = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length + 1; j++) {
      subArrays.push(array.slice(i, j));
    }
  }
  let max = subArrays.reduce((maxArr, subArr) => {
    let maxArrSum = maxArr.reduce((accum, el) => accum + el);
    let subArrSum = subArr.reduce((accum, el) => accum + el);
    if (subArrSum > maxArrSum) return subArr;
    else return maxArr;
  });
  return max.reduce((accum, el) => accum + el);
}


function largestContiguousSubsum2(array) {
  let max = 0;
  let currSum = 0;
  for (let i = 0; i < array.length; i++) {
    currSum += array[i];
    if (currSum > max) {
      max = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return max;
}

const list = [0, 3, 5, 4, -5, -7, 1, 90];

const array = [5, 3, -7, -3, 7, -5];
console.log(largestContiguousSubsum2(list));