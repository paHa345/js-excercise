// палиндром

const isPalindrome = (isPalindromString) => {
  if (
    isPalindromString.toLowerCase().split("").reverse().join("") ===
    isPalindromString
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("paHa"));
