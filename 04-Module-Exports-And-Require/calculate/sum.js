console.log("Sum Module executed");

z ="Hello World";

var x ="Hello World";
// export function calculateSum(a,b){
function calculateSum(a,b){
    const sum = a+b;
    console.log(sum)
}

//module.exports = calculateSum; // Single functions

// export x, and functions
module.exports = {
    x,
    calculateSum,
}

