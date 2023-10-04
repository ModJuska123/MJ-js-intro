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
