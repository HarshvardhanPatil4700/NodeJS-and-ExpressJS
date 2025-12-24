// First module

// local (only present/accessible in this module)
const secret = "SUPER SECRET";
// global (share among modules)
const john = "john";
const peter = "peter";

// console.log(module); Check the Exports section of the module

module.exports = { john, peter }; // to export the object and variables
