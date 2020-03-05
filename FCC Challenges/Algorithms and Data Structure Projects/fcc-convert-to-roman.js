const subtract = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC',
                 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

// I             1
// IV            4
// V             5
// IX            9
// X             10
// XL            40
// L             50
// XC            90
// C             100
// CD            400
// D             500
// CM            900 
// M             1000  
function convertToRoman(arg) {
    let index = 0;
    let result = [];
    let num = arg;
    while((num > 0) && index < subtract.length) {
        if (num - subtract[index] >= 0) {
            result.push(roman[index]);
            num -= subtract[index];
        }
        else index++
    }
    return result.join('');
}

console.log(convertToRoman(97));
