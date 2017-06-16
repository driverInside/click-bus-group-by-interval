angular.module('groupApp', [])
	.controller('groupController', function () {
		var group = this;

		group.set = [];
		group.range = 10;

		group.result = [];
		group.showResult = false;
		
		group.addNumber = function () {
			group.set.push(group.number);
			group.number = '';
		}

		group.group = function () {

			if(group.range == null || group.set.length === 0) {
				group.showResult = true;
				return;
			}

			group.result = groupSet(group.range, group.set);
			group.showResult = true;
		}

		function isInteger(number) {
		  return number === parseInt(number, 10);
		}

		function sort (set) {
		  var len = set.length;
		  var arr = set;

		  try {
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
		  } catch(e) {
		  	group.showResult = true;
		  	console.log(e);
		  }

		  return arr;
		}

		function getNumberRange (range, number) {
		  if(number === 0) return 0;

		  return Math.ceil(number/range);
		}

		function groupSet (range, set) {
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
	});







function groupSet (range, set) {
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