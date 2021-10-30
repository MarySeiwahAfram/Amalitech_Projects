let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(`The original length of secretMessage is ${secretMessage.length}`);
//removing the last string
secretMessage.pop();
console.log(`New length is ${secretMessage.length}`);

//adding 'to' and 'Program' to the end of array.
secretMessage.push('to', 'Program');
//console.log(secretMessage);

//accessing 'easily' and replacing with 'right'
let index = secretMessage.indexOf('easily');
console.log(index);
secretMessage[7] = 'right';
console.log(`The new element in index 7 is ${secretMessage[7]}`);

//removing the first string of the array
let removed = secretMessage.shift();
console.log(`Romoved element is ${removed}`);

//adding an element to the beginning of the array
secretMessage.unshift('Programming');
//console.log(secretMessage);

//removing a number of strings and replacing with a single string
console.log(secretMessage.indexOf('get'));
secretMessage.splice(6,5,'know');
//console.log(secretMessage);

//using join to print elements of array as a sentence
console.log(secretMessage.join(' '));
