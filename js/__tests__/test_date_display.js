jest.dontMock('../components/DateDisplay.js');
jest.dontMock('moment');

describe("DateDisplay", function(){
	it("shows current date", function() {
		var React = require("react/addons");
		var DateDisplay = require("../components/DateDisplay");
		var DateGenerator = require("../utils/DateGenerator");
		var TestUtils = React.addons.TestUtils;

		DateGenerator.now.mockReturnValueOnce(new Date("2015-05-04 03:02:01"));

		var display = TestUtils.renderIntoDocument(
			<DateDisplay />
			);
		
		var timeSpan = TestUtils.findRenderedDOMComponentWithTag(display, "h3");
		var dateSpan = TestUtils.findRenderedDOMComponentWithTag(display, "h4");

		expect(timeSpan.getDOMNode().textContent).toEqual("03:02:01");
		expect(dateSpan.getDOMNode().textContent).toEqual("4. Mai 2015");
	});
});