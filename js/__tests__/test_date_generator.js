jest.dontMock('../utils/DateGenerator.js');

describe("DateGenerator", function() {
	it("creates a Date object", function() {
		var DateGenerator = require('../utils/DateGenerator');
		expect(DateGenerator.now() instanceof Date).toBeTruthy();
	});
	it("creates a Date Object that is newer or equal to current Date", function() {
		var DateGenerator = require('../utils/DateGenerator');
		var expectedDate = new Date();
		var dateDiff = DateGenerator.now().getTime() - expectedDate.getTime();
		expect(dateDiff >= 0 && dateDiff < 3000).toBeTruthy();
	});
});