// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let largest = -Infinity;
  let secondlargest = -Infinity;
  
  for(let num of array){
    if( num > largest){
      secondlargest = largest ;
      largest = num ;
    }
    else if ( num !== largest && num > secondlargest ){
      secondlargest = num ; 
    }
  }
  return secondlargest ;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  const freq = {};

  for (const char of string) {
    if (char >= "a" && char <= "z") {
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
  }

  return freq;
}


// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

function flatten(unflatObject) {
  const flatObject = {};

  function flattenObject(object, prefix = "") {
    for (const key in object) {
      const newKey = prefix ? prefix + "." + key : key;

      if (typeof object[key] === "object" && object[key] !== null) {
        flattenObject(object[key], newKey);
      } else {
        flatObject[newKey] = object[key];
      }
    }
  }

  flattenObject(unflatObject);

  return flatObject;
}



// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  const result = {};

  for (const key in flatObject) {
    
    const parts = key.split(".");
    
    let obj = result;

    for (let i = 0; i < parts.length; i++) {
      if (i === parts.length - 1) {
        
        obj[parts[i]] = flatObject[key];
      } else {
        if (!obj[parts[i]]) {
          obj[parts[i]] = {};
        }

        obj = obj[parts[i]];
        
      }
      
    }
  }

  return result;
}
