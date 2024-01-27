/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str1 = str.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
    if(str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i'|| str1[i] === 'o'|| str1[i] === 'u');
    vowelCount++;
  }
  return vowelCount;
}

module.exports = countVowels;