let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//creating individual words in array
const storyWords = story.split(' ');
//console.log(storyWords);

//log how many words there are 
console.log(`There are ${storyWords.length} words in the array.`)

//remloving an array of unecessary words
const betterWords = storyWords.filter(element => {
  return !unnecessaryWords.includes(element)
} )
//console.log(storyWords)
console.log(`There are ${betterWords.length} words in the array.`)

//counting particular elements in an array
let countReally =0;
let countVery = 0;
let countBasically = 0;

for(element of storyWords){
  if(element =='really'){
    countReally +=1;
   }else if(element =='very'){
    countVery++ ;
  }else if(element =='basically'){
    countBasically++;
  }
}
console.log('really count = '+countReally);
console.log('very count = '+countVery);
console.log('basically count = '+countBasically);

//count how many sentences are in the paragrah (./!)
let sentences =0;
storyWords.forEach(word =>{
  if(word[word.length-1] == '.'|| word[word.length-1]=='!'){
    sentences++;
 };
 
});
console.log('Total number of Sentences are '+sentences);

//logging wordcount sentencecoount and overused frequency to console with a function


  console.log(`Word count = ${storyWords.length}`);
  console.log(`Sentence count = ${sentences}`);
  console.log(  `really count = ${countReally}
      very count= ${countVery}
      basically count = ${countBasically}`)

//logging betterWords array to the console as a single string
console.log(betterWords.join(' '))



