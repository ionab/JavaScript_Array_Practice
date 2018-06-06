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
	let sorted_arr = arr.slice().sort();
	let results = [];

	sorted_arr.forEach(function(number){
		if (sorted_arr[number + 1] === sorted_arr[number]){
	 	 if (results.includes(sorted_arr[number]) === false){
	 		 results.push(sorted_arr[number]);
	 	 }
	  }
	})
	return results;
	},

	removeAndClone: function (arr, valueToRemove) {
		let results = [];
		arr.forEach(function(number){
			if (valueToRemove !== arr[number]){
					if (results.includes(arr[number]) === false){
						results.push(arr[number]);
					}
		    }
		})
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
