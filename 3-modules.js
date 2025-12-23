// Modules : reusable blocks of code that help organize, manage, and separate functionality within an application (Encapsulated code)

const john = "john";
const dale = "dale";
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};
sayHi("Jack");
sayHi(john);
sayHi(dale);

// NodeJS uses CommonJS in which every file is a module (by default)
