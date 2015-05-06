var React = require('react');
var DateGenerator = require('../utils/DateGenerator');

var DateDisplay = React.createClass({
	getInitialState: function() {
		return {
			date: DateGenerator.now()
		};
	},
	render: function() {
		var datestring = this.state.date.toGMTString();
		return <div><span>{datestring}</span></div>
	}
});

module.exports = DateDisplay;