


 s = "anagram" 
 t = "nagaram"

var isAnagram = function (s, t) {

  // If length not same return false;
  if (s.length !== t.length) return false;

  // Get Two arrays 
  let firstArray = s.split('');
  let secondArray = t.split('');
  
  // Sort them and compare them (If Equals return true)
  if (firstArray.sort().join('') === secondArray.sort().join('')) {
      return true;
  }

  // Otherwise return false;
  return false;

};

console.log(isAnagram(s, t));