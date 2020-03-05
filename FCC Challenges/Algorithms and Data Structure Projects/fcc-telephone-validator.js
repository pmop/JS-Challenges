let regex = /^(1\s?)?(\d{3}|\(\d{3}\)){1}(\d{3}|\-\d{3}\-|\s\d{3}\s|\s\d{3}\-){1}\-?\d{4}$/

function telephoneCheck(str) {
  // Good luck!
  return str.match(regex) !== null;
}

console.log(telephoneCheck("555-5555"));
