//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  if (str1.length === str2.length) {
    return changeOne(str1, str2);
  }
  if (str1.length < str2.length) {
    return addOne(str1, str2);
  }
  return removeOne(str1, str2);
}

function changeOne(str1, str2) {
  let mods = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      mods++;
    }
    if (mods > 1) {
      return false;
    }
  }
  return true;
}

function addOne(str1, str2) {
  let mods = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i - mods] !== str2[i]) {
      mods++;
    }
    if (mods > 1) {
      return false;
    }
  }
  return true;
}

function removeOne(str1, str2) {
  let mods = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i - mods]) {
      mods++;
    }
    if (mods > 1) {
      return false;
    }
  }
  return true;
}

module.exports = oneAway;
