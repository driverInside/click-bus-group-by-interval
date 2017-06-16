var group  = require('./app/group');

// Test 1
var rangeOne = 10;
var setOne = [10, 1, -20,  14, 99, 136, 19, 20, 117, 22, 93,  120, 131];
console.log(group.group(rangeOne, setOne)); // [[-20], [1, 10], [14, 19, 20], [22], [93, 99], [117, 120], [131, 136]]

// Test 2
var rangeTwo = 15;
var setTwo = [10, 1, -20,  14, 99, 136, 19, 20, 117, 22, 93, 120, 131];
console.log(group.group(rangeTwo, setTwo)); // [[-20], [1, 10, 14], [19, 20, 22], [93, 99], [117, 120], [131], [136]]

// Test 4
var rangeFour = null;
var setFour = [];
console.log(group.group(rangeFour, setFour)); // []

// Test 3
var rangeThree = 15;
var setThree = [10, 1, 'A',  14, 99, 133, 19, 20, 117, 22, 93,  120, 131];
console.log(group.group(rangeThree, setThree)); // throws InvalidArgumentException
