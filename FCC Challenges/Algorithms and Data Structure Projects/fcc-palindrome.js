function palindrome(str) {
  // Good luck!
  let arr = Array.from(str.toLowerCase().replace(/[^a-z0-9]+/gi,''));
  console.log(arr.join(''));
  let index = 0;
  if (arr.length%2 === 0)
    index = arr.length/2;
  else
    index = (arr.length+1)/2;

  let isPalindrome = true;
  forino: for(let i = 0, j = arr.length-1;
       i < index;
        ++i, --j)
  {
          if(arr[i] != arr[j]) {
            isPalindrome = false;
            break forino;
          }
   }
 
  return isPalindrome;
}


console.log(palindrome("five|\_/|four"));
