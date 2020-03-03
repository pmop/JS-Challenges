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


