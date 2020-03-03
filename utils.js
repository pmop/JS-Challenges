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

var _primeTable = allPrimes(20);


function nextPrime(number, primeTable=_primeTable) {
	let index = primeTable.indexOf(number)
	if( index >=0 ) return primeTable[index+1];
	else {
		//Generate a new prime and push into end of the table
		//    //and return it
		let _nextPrime = number+1;
		while( !isPrime(_nextPrime) ) _nextPrime++;
		primeTable.push(_nextPrime);
		return _nextPrime;
	}
}

// I'm expecting an integer and I'll return an array of primes which total quoscient is the integer
function primeFactorization(arg, primeTable=_primeTable) {
	let number = arg;
	if (isPrime(number)) return [number];
	else {
		let p = primeTable[0];
		let result = [];
		while(number >= p*p) {
			if(number%p === 0) {
				result.push(p);
				number /= p;
			}
			else p = nextPrime(p);
		}
		result.push(number);
		return result;
	}
}

/*Greatest common divisor - Euclidean Algorithm - Recursive*/
function gcdRecursive(num1,num2) {
	  let bigger = max(num1,num2);
	  let smaller = min(num1,num2);
	  let difference = bigger - smaller;
	  if (difference%smaller === 0) return difference;
	  else
		    bigger = max(smaller,difference);
	    smaller = min(smaller,difference);
	    return gcdRecursive(bigger,smaller);
}
