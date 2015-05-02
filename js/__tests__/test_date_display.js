jest.dontMock('../components/DateDisplay.js');
describe("DateDisplay", function(){
	it("shows current date", function() {
		var React = require("react/addons");
		var DateDisplay = require("../components/DateDisplay");
		var TestUtils = React.addons.TestUtils;

		var display = TestUtils.renderIntoDocument(
			<DateDisplay />
			);
		var expectedDate = new Date();
		var dateSpan = TestUtils.findRenderedDOMComponentWithTag(display, "span");
		expect(dateSpan.getDOMNode().textContent).toEqual(expectedDate.toGMTString());
	});
});