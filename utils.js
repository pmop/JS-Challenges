//Returns an array without value at index
function remove(array, index) {
	  let before = array.slice(0,index);
	  let after = array.slice(index+1);
	  return before.concat(after);
}

//Returns the tail of the array
function tail(array) {
	  return array[array.length-1];
}

//Returns tail index
function end(array) {
	  return array.length-1;
}


//Simple range function to simulate Python's range function
//I could have turned it into a generator but I'd have to modify more code than I want now
function range(end,start=0) {
  let r = [];
    for (let i = start; i <= end; ++i) r.push(i);
      return r;
 }

// Expecting varargs, returns the smallest
function min(...varargs) {
	  let notUndefined = varargs.filter(elem=> typeof elem != 'undefined');
	  return Math.min(...notUndefined);
}

// Expecting varargs, returns the greatest
function max(...varargs) {
	  let notUndefined = varargs.filter(elem=> typeof elem != 'undefined');
	  return Math.max(...notUndefined);
}

// Prime checking using classic squareroot method
function isPrime(num) {
	let index = num-1;
	const table = [false,true,true,false,true,false,true,false,false,false];
	if (index < table.length) return table[index];
	else {
		let prime = true;
		for(let i = 2; (i <= ~~(Math.sqrt(num))) && prime; ++i) {
			if (num%i === 0) prime = false;
		}
		return prime;

	}
}


//Returns range of prime numbers
function allPrimes(end,start=0) {
	  range(end,start)
	    .filter(elem=> isPrime(elem));
}
