var React = require('react');

var DateDisplay = React.createClass({
	getInitialState: function() {
		return {
			date: new Date()
		};
	},
	render: function() {
		var datestring = this.state.date.toGMTString();
		return <div><span>{datestring}</span></div>
	}
});

module.exports = DateDisplay;