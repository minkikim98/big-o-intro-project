console.log(fourthAnagram("gizmo", "sally"));
console.log(fourthAnagram("elvis", "lives"));

function firstAnagram(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) return false;
    str2 = str2.replace(str1[i], "");
  }
  if (str2.length === 0) return true;
  else return false
}

function secondAnagram(str1, str2) {
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  str1Arr.sort();
  str2Arr.sort();

  console.log(str1Arr);
  console.log(str2Arr);

  let str1Sorted = str1Arr.join("");
  let str2Sorted = str2Arr.join("");

  return str1Sorted === str2Sorted;
}


function thirdAnagram(str1, str2) {
  let obj1 = {}; 
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] === undefined) obj1[str1[i]] = 1;
    else obj1[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]] === undefined) obj2[str2[i]] = 1;
    else obj2[str2[i]]++;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}


function fourthAnagram(str1, str2) {
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]] === undefined) obj[str1[i]] = 1;
    else obj[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]] === undefined) return false;
    else obj[str2[i]]--;
  }

  return Object.values(obj).every(val => val === 0);
}
