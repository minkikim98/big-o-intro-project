// const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
//   'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

// console.log(quadraticBiggestFish(fishies));
// console.log(nlognBiggestFish(fishies));
// console.log(linearBiggestFish(fishies));

function quadraticBiggestFish(fishes) {

  // Sluggish Octopus
  // Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to 
  // all other fish lengths. Write your code inside the quadraticBiggestFish function.

  for (let i = 0; i < fishes.length; i++) {
    let foundLonger = false;
    for (let j = 0; j < fishes.length; j++) {
      if (fishes[j].length > fishes[i].length) {
        foundLonger = true;
        break;
      }
    }
    if (!foundLonger) return fishes[i];
  }
}


function nlognBiggestFish(fishes) {
  // Code goes here ...

  //   Dominant Octopus
  // Find the longest fish in O(n log n) time. Hint: Use the built in Array.sort()
  //  method which runs in O(n log n). Remember that Big O is classified by the dominant term. 
  //  Write your code inside the nlognBiggestFish function.
  fishes.sort((a, b) => {
    if (a.length > b.length) return -1;
    else if (a.length < b.length) return 1;
    else return 0;
  });
  return fishes[0];
}


function linearBiggestFish(fishes) {
  // Clever Octopus
  // Find the longest fish in O(n) time. The octopus can hold on to the longest fish that you have found so 
  // far while stepping through the array only once. Write your code inside the linearBiggestFish function.
  // Code goes here ...

  let longest = fishes[0];
  for (let i = 1; i < fishes.length; i++) {
    if (longest.length < fishes[i].length) {
      longest = fishes[i];
    }
  }
  return longest;
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  return tilesArray.indexOf(direction);
}

// console.log(slowDance("up", tilesArray));
// console.log(slowDance("right-down", tilesArray));


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}

// console.log(fastDance("up", tilesObj));
// console.log(fastDance("right-down", tilesObj));