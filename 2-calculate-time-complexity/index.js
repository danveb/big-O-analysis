function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
}

// Time Complexity: O(n) 
// - linear time; loop runs "n" times and returns at constant time -> O(n + 1) => O(n)

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
}

// Time Complexity: O(n) 
// - linear time; loop runs "n" times and returns at constant time -> O(n + 1) => O(n)

function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
}

// Time Complexity: O(1) 
// - constant time; if "n" is 5 we loop just 5 times as Math.min takes the smallest value from the 2 arguments. If "n" is 11 times we loop just 10 times as it's the minimum -> O(10) => O(1) 

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
}

// Time Complexity: O(n) 
// - linear time 

function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
}

// Time Complexity: O(n^2)
// - quadratic time; first loop runs "n" times and second loop runs "n" times 

function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
}

// Time Complexity: O(n) 
// - linear time; 
  
  