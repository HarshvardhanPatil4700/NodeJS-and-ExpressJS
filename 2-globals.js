// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log("GLOBAL VARIABLES");
console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("hello world");
}, 2000); // the setInterval() function runs the code block present inside it after every 2000 ms
