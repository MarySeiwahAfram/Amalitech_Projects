/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for(let i=0; i<input.length;i++){
  //console.log(`Iterator number ${i}`);
  for(let j=0; j< vowels.length; j++){
    //console.log(`array element ${j}`);
    if(input[i] === vowels[j]){
      if(input[i]==='e'){
        resultArray.push('ee');
      }else if(input[i] ==='u'){
        resultArray.push('uu');
      }else{
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());