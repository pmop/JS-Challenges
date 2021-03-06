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


//I'm expecting an array of numbers and I'll return an object key:pair integer:integer representing
////the number and it's frequency
function frequency(numbers){
	  let counter = {
		    }
	  numbers.forEach(val=> counter[val] = ~~counter[val] + 1);
	  return counter;
}


//Im expecting two key value pair objects, integer:integer,
// representing the number and its frequency
//I'll return an object key:value integer:integer whose keys represent numbers and is
//it's frequency, and its composed by the greatest frequency for numbers in both objects
function maxFrequency(freq1, freq2) {
	  let result = {};
	  let keys = uniquefyIterative(Object.keys(freq1).concat(Object.keys(freq2)));

	  keys.forEach(key => {
		      result[key] = max(freq1[key],freq2[key]);
		    })
	  return result;
}


//Im expecting a key value pair integer:integer representing the number and its frequency
//I'll return an array of  numbers repeated by  their frequency
function defreq(frequency) {
	  let result = [];
	  for(let key in frequency) {
		      for(let i = frequency[key]; i > 0; --i) result.push(parseInt(key));
		    }
	  return result;
}


//I'm expecting  an array of unique numbers
//I'll return a number that evenly divides all numbers in nums
function lcm (nums) {
	  let result = nums.map(num => primeFactorization(num))
	  .map(elem=> frequency(elem))
	  .reduce((acc,elem) => maxFrequency(acc,elem)); 
	  
	  return defreq(result).reduce((a,b) => a*=b);
}
