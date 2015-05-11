var React = require('react');
var DateGenerator = require('../utils/DateGenerator');
var moment = require('moment');

var DateDisplay = React.createClass({
	getInitialState: function() {
		return {
			date: DateGenerator.now()
		};
	},
	render: function() {
		var m = moment(this.state.date).locale("de"),
			timestring = m.format("LTS"),
			datestring = m.format("LL");

		return <div>
				<h3>{timestring}</h3>
				<h4>{datestring}</h4>
			</div>
	}
});

module.exports = DateDisplay;