const test = require('tape');
const logic = require('../src/logic.js');


test('findMatches test 1', function(t) {
	let expected = ['alpha centauri', 'alpha cephei'];
	logic('alpha ce', (arr) => {
	  	t.deepEqual(arr, expected, "Should return str1 that matches star");
	  	t.end();
	});
});

test('findMatches test 2', function(t) {
	let expected = ['san 128', 'san 224', 'san 241', 'san 39'];
	logic('san', (arr) => {
		t.deepEqual(arr, expected, "Should return str2 that matches star");
		t.end();
	});
});

