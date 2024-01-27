/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   const st1 = str1.toLowerCase().split('').sort().join('');
//   const st2 = str2.toLowerCase().split('').sort().join('');
//   // console.log(st1==st2)
//   return st1==st2;
// }
// module.exports = isAnagram;
function isAnagram(str1, str2) {
  const val1= str1.toLowerCase().split('').sort().join('');
  const val2 = str2.toLowerCase().split('').sort().join('');
  return val1==val2;
}

module.exports = isAnagram;