jest.dontMock('../components/DateDisplay.js');
describe("DateDisplay", function(){
	it("shows current date", function() {
		var React = require("react/addons");
		var DateDisplay = require("../components/DateDisplay");
		var DateGenerator = require("../utils/DateGenerator");
		var TestUtils = React.addons.TestUtils;

		DateGenerator.now.mockReturnValueOnce(new Date("2015-05-04 03:02:01 GMT"));

		var display = TestUtils.renderIntoDocument(
			<DateDisplay />
			);
		
		var dateSpan = TestUtils.findRenderedDOMComponentWithTag(display, "span");
		expect(dateSpan.getDOMNode().textContent).toEqual("Mon, 04 May 2015 03:02:01 GMT");
	});
});