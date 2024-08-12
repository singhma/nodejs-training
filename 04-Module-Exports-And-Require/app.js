// require("./xyz.js") // One Module into another module
// //import { calculateSum } from "./sum.js";
//const obj = require("./sum.js"); // importing into object
// const {x, calculateSum} = require("./calculate/sum.js")  // Destructuring while importing
// const {calculateMultiply} = require("./calculate/multiple.js")

const {calculateMultiply,calculateSum} = require('./calculate')

const data = require("./sample.json");
console.log(JSON.stringify(data));

var a = 10;
var b = 20;


// obj.calculateSum(a,b);
// console.log(this === global);
calculateSum(a,b)
calculateMultiply(a,b);