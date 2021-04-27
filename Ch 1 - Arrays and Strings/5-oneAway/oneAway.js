//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  if (str1.length === str2.length) {
    let isDifferent = false;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (isDifferent) {
          return false;
        }
        isDifferent = true;
      }
    }
    return true;
  }

  if (str1.length + 1 === str2.length || str1.length - 1 === str2.length) {
    let first = str1.length < str2.length ? str1 : str2;
    let second = str1.length < str2.length ? str2 : str1;

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < first.length && pointer2 < second.length) {
      if (first[pointer1] !== second[pointer2]) {
        if (pointer1 !== pointer2) {
          return false;
        }
        pointer2++;
      } else {
        pointer1++;
        pointer2++;
      }
    }
    return true;
  }
}

module.exports = oneAway;
