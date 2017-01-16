var React = require('react');

var WeatherMessage = (props) => {
	var {temp, location} = props

	return (
			<h3 className="text-center">It's <strong>{temp}°C</strong> in <strong>{location}</strong>.</h3>
		);
}

module.exports = WeatherMessage;