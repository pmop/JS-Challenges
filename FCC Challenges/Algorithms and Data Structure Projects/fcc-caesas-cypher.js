function rot13(str) { // LBH QVQ VG! 65
  let result = [];
  for(let char of str) {
    if(char.match(/[A-Z]/)) {
      let charCode = char.charCodeAt(0)
      if (charCode - 13 >= 65) charCode -= 13;
      else charCode+=13;
      result.push(String.fromCharCode(charCode));
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
