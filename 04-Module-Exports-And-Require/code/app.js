require("./xyz.js") // One Module into another module
const obj = require("./sum.js"); // importing into object
const {x, calculateSum} = require("./sum.js");  // Destructuring while importing

var name = "Exploring Node JS";
var a = 10;
var b = 20;

obj.calculateSum(a,b);
console.log(obj.x);
console.log(x);
console.log(this === global);