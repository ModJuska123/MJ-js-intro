// CW#1
function even_or_odd(n) {
  if(n % 2 === 0)
  {return `Even`} else 
  {return `Odd`}
};
console.log(even_or_odd(1));
console.log(even_or_odd(2));

console.clear();
// It's pretty straightforward. Your goal is to 
// create a function that removes the first and 
// last characters of a string. You're given one 
// parameter, the original string. You don't have 
// to worry with strings with less than two 
// characters.


function removeChar(str){
  const word = str.slice(1,-1); 
  return word};
  console.log(removeChar('Jurasic Park'));

  // I'm new to coding and now I want to get the 
  // sum of two arrays... Actually the sum of all 
  // their elements. I'll appreciate for your help.



// The code provided is supposed replace all the dots . 
// in the specified String str with dashes -
// But it's not working properly.
// Task Fix the bug so we can all go home early.
// Notes String str will never be null.

function replaceDots(str){
  const replacement = str.replaceAll('.', '-'); 
  return replacement;
} 
console.log(replaceDots('st.replace'));

// Get ASCII value of a character.

function getASCII(index) {
 const indexASCII = index.charCodeAt();
 return indexASCII;
}
console.log(getASCII('c'));

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// function testEven(n) {

function testEven(n) {
  if(n % 2 === 0)
  {return `true`} else 
  {return `false`};
}
console.log(testEven(0));
console.log(testEven(1));


// Your task is to write a function that takes a String and 
// returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will 
// always be separated by a space.

function addLength(str2) {
const words = str2.split(" ");
return words.map(str2 => `${str2} ${str2.length}`);}
console.log(addLength('Hello World'));