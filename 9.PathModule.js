const p = require("path");

console.log(p.sep);

const filePath = p.join("/content", "subfolder", "test.txt"); // The .join() method Join all arguments together and normalize the resulting path.
console.log(filePath);

const base = p.basename(filePath); // The basename() method return the last portion of a path.
console.log(base);

const absolute = p.resolve(__dirname, "content", "subfolder", "test.txt"); // The right-most parameter is considered {to}. Other parameters are considered an array of {from}.Starting from leftmost {from} parameter, resolves {to} to an absolute path.
console.log(absolute);
