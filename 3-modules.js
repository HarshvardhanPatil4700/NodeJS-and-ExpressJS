// Modules : reusable blocks of code that help organize, manage, and separate functionality within an application (Encapsulated code (only share minimum)). NodeJS uses CommonJS in which every file is a module (by default)

const names = require("./4-names"); // require hives the access to exported data
const sayHi = require("./5-utils");
const data = require("./6-alternativeSyntax");
console.log(data); // this is another way we can make the exported data available
require("./7-mind-buster"); // we can also directly run the module without assigning (but it needs a function call in exporting module)

// console.log(names);
// console.log(sayHi);

sayHi("Jack");
// sayHi(john); ReferenceError: john is not defined
// sayHi(peter);
sayHi(names.john);
sayHi(names.peter);
sayHi(names.jack);

// Normal code (i.e if the code was to be places into single module) :
// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// sayHi("Jack");
// sayHi(john);
// sayHi(peter);
