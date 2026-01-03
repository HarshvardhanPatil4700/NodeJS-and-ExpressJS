const a = require("os");

// Info about current user
const user = a.userInfo();
console.log(user);

// uptime() : method returns the system uptime(time for which system is active or on) in seconds
console.log(
  `The System uptime is ${a.uptime()} seconds i.e ${
    a.uptime() / 60
  } minutes or ${a.uptime() / 3600} hours`
);

console.log(a.tmpdir()); // Returns the operating system's default directory for temporary files as a string.

const currentOS = {
  name: a.type(), // Returns the operating system name as returned by uname
  release: a.release(), // Returns the operating system as a string.
  totalMemory: a.totalmem(), // Returns the total amount of system memory in bytes as an integer.
  freeMemory: a.freemem(), // Returns the amount of free system memory in bytes as an integer.
};
console.log(currentOS);
