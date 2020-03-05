/*
	Functions inside utils.js might depend on other functions declared in utils.js,
	which might depend on static global variables in utils.js;
	
	The information I have read about ES6 import declaration doesn't cover this case and
	many import configurations i tried haven't worked.
	So to make this script work, copy and paste dependencies from utils.js here has needed.
*/
import * from './utils.js';

//This challenge is solved simply by applying the lcm algorith using prime factorization
//utils.js includes a prime factorization implementation.
function smallestCommons(arr) {
	let start = min(...arr);
	let end = max(...arr);
	return lcm(util.range(end,start));
}

console.log(smallestCommons([1,5]));
