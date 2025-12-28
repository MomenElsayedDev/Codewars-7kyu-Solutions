// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = "aeiou";
  let count = 0;
  let strArray = str.replaceAll(" ", "").split("");
  for (let i = 0; i < strArray.length; i++) {
    if (vowels.includes(strArray[i])) {
      count++;
    }
  }
  return count;
}
console.log(getCount("ioio"));
//-------------------------------------------------
function getCount(str) {
  let vowelsCount = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for(let char of str) {
      if(vowels.includes(char)) {
          vowelsCount++
      }
  }

  return vowelsCount;
}
console.log(getCount("aeae"));