// There are 2 ways : destructuring variable and normal var declaration
// fs.readFileSync() : Synchronously reads the contents of a file.
// fs.writeFileSync(): Synchronously writes data to a file.
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-syn.text",
  `Here is the result : ${first} and ${second}`,
  { flag: "a" } // flad a = append
);
// The writeFileSync method takes the filename and value and write it to the file. if the file name is not found it creates a new file else it adds the value to the respective file
// Also if the file has some content then the content via writeFileSync overwrites the old value of file
// Example :
writeFileSync(
  "./content/second.txt",
  "This is new Data to the file via writeFileSync"
);
