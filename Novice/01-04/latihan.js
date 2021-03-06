//STRING SEBAGAI OBJEK
const foo = new String('foo'); // buat String object
console.log(foo); // Displays: [String: 'foo']
document.write(foo); // Displays: [String: 'foo']
typeof foo;


const firstString = '2 + 2'; // string karakter
const secondString = new String('2 + 2'); // buat String object
eval(firstString); // Returns the number 4
console.log(firstString);
eval(secondString); // Returns the string "2 + 2"
  console.log(secondString);
document.write(firstString); //string
document.write(secondString);//string objek

//Baris STRING
console.log('string text line 1\n\
            string text line 2');

console.log(`string text line 1
string text line 2`);
document.write('string text line 1\n\
            string text line 2');

document.write(`string text line 1
string text line 2`);

//menyisipka ke dalam STRING
const five = 5;
const ten = 10;
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
document.write('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
// "Fifteen is 15 and not 20."
const lima = 5;
const sep = 10;
console.log(`Fifteen is ${lima + sep} and not ${2 * lima + sep}.`);
document.write(`Fifteen is ${lima + sep} and not ${2 * lima + sep}.`);
// "Fifteen is 15 and not 20."

//WAKTU
const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
              hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT

//ANGKA
const gasPrice = new Intl.NumberFormat('en-US',
                      { style: 'currency', currency: 'USD',
                        minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                      { style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五

//SORTIr
const nama = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(nama.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"

document.write("<br>");

//REGEX
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
document.write(newstr);

// "Smith, John"

//Manipulasi Dengan REGEX

// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = 'Orange Carrot ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ';

var output = ['---------- Original String\n', names + '\n'];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// Below is the new array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—the second memorized portion
// followed by a comma, a space and the first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push('---------- After Split by Regular Expression');

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
output.push(nameList[i]);
bySurnameList[i] = nameList[i].replace(pattern, '$2, $1');
}

// Display the new array.
output.push('---------- Names Reversed');
for (i = 0, len = bySurnameList.length; i < len; i++) {
output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push('---------- Sorted');
for (i = 0, len = bySurnameList.length; i < len; i++) {
output.push(bySurnameList[i]);
}

output.push('---------- End');

console.log(output.join('\n'));

// produces:
//
// ---------- Original String
//
// Orange Carrot ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand
//
// ---------- After Split by Regular Expression
// Orange Carrot
// Fred Barney
// Helen Rigby
// Bill Abel
// Chris Hand
// ---------- Names Reversed
// Carrot, Orange
// Barney, Fred
// Rigby, Helen
// Abel, Bill
// Hand, Chris
// ---------- Sorted
// Abel, Bill
// Barney, Fred
// Carrot, Orange
// Hand, Chris
// Rigby, Helen
// ---------- End
