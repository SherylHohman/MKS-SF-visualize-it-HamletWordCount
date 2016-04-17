var fs = require('fs');
var freq = require('freq');
var jsonfile = require('jsonfile');
var util = require('util');
var _ = require('underscore');

// var bookname = "hamlet"
// var book = fs.readFileSync('./' + bookname + '.txt', 'utf8');
//
// var frequency = freq(book);
//
// var newBook = './'+ bookname + '.json'
// jsonfile.writeFileSync(newBook, frequency);

// var newWordArray = [];
//
// var wordArray = jsonfile.readFileSync("./hamlet.json");
//
// console.log("wordArray", wordArray);
//
// for(var i = 0; i < wordArray.length; i++) {
//   newWordArray.push([wordArray[i].word, wordArray[i].count]);
// }
//
// var hamlet = {
//   "data": newWordArray
// };
//
// console.log("hamlet", hamlet);
//
// jsonfile.writeFileSync("./hamlet2.json", hamlet);

// var stopWords = jsonfile.readFileSync("./stopWords.json");

var hamlet2 = [];

var hamlet = jsonfile.readFileSync("./hamlet.json");

var hamlet = hamlet.data;

for(var i = 0; i < hamlet.length; i++) {
  if(i < 100) {
     hamlet2.push(hamlet[i]);
  }
}
// console.log(hamlet3);
hamlet2 = {
  "data": hamlet2
};

jsonfile.writeFileSync("./hamlet2.json", hamlet2);
