var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		const squares = []
		arr.forEach(function(number) {
				squares.push(number**2);
		});
		return squares;
	},

	sum: function (arr) {
		let sum = 0;
		arr.forEach(function(number) {
			sum += number;
		});
		return sum;
	},

	findDuplicates: function (arr) {
	var sorted_arr = arr.slice().sort();
	var results = [];
	for (var i = 0; i < sorted_arr.length - 1; i++) {
	    if (sorted_arr[i + 1] == sorted_arr[i]){
				if (results.includes(sorted_arr[i]) === false)
					results.push(sorted_arr[i]);
				}
	    }
			return results;
	},

	removeAndClone: function (arr, valueToRemove) {
		var results = [];
		for (var i = 0; i < arr.length - 1; i++) {
		    if (valueToRemove !== arr[i]){
					if (results.includes(arr[i]) === false)
						results.push(arr[i]);
					}
		    }
				return results;
	},

	findIndexesOf: function (arr, itemToFind) {
		let results = [];
		arr.forEach(function(number, index) {
			if(number === itemToFind){
				results.push(index);
			}
		});
		return results;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let total = 0;
		arr.forEach(function(number){
			if(number % 2 === 0){
				total += (number**2);
			}
		})
		return total;
	}

}

module.exports = arrayTasks
