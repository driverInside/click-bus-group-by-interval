/**
 * Checks if a 'number' is an integer.
 * @param {Integer} number. Value to validate.
 * @return {Bool}
 * @public
 */

function isInteger(number) {
  return number === parseInt(number, 10);
}

/**
 * Sorts an array.
 * Note: Implements bubble sorts (time reasons)
 * @param {Array} set Array to sort.
 * @return {Array} Copy of original array;
 * @throw {TypeError} When an element of the array is invalid.
 * @public
 */

function sort (set) {
  var len = set.length;
  var arr = set;
  
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if(!isInteger(arr[j])){
        throw new TypeError('InvalidArgumentException');
      } 
      if(arr[j - 1] > arr[j]){
        var t = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = t;
      }
    }
  }  
  
  return arr;
}

/**
 * Gets the 'range' of a number.
 * @param {Integer} number. 
 * @return {Integer} The range of the number.
 * @private
 */

function getNumberRange (range, number) {
  if(number === 0) return 0;

  return Math.ceil(number/range);
}

/**
 * Groups by interval
 * @param {Int} range. Range
 * @param {Array} set. The array to group.
 * @return {Array} The array grouped
 * @public
 */

function group (range, set) {
  if(range == null || set.length === 0) return [];

  var sortSet = sort(set);
  var partialArray = [];
  var finalArray = [];
  var prevIndex = getNumberRange(range, sortSet[0]);

  partialArray.push(sortSet[0]);

  for (var i = 1; i < sortSet.length; i++) {
    var index = getNumberRange(range, sortSet[i]);
    
    if(index !== prevIndex){
      finalArray.push(partialArray);
      partialArray = [sortSet[i]];
      prevIndex = index;
    } else {
      partialArray.push(sortSet[i]);
    }

  }

  finalArray.push(partialArray);

  return finalArray;

}


exports.sort = sort;
exports.isInteger = isInteger;
exports.group = group;


