console.log("Sum Module executed");

var x ="Hello World";

function calculateSum(a,b){
    const sum = a+b;
    console.log(sum)
}

// module.exports = calculateSum; // Single functions

// export x, and functions
module.exports = {
    x,
    calculateSum,
}