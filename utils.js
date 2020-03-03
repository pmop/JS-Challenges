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
