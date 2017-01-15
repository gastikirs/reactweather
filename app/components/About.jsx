var React = require('react');

var About = (props) => {
	return (
		<div>
		<h1 className="text-center">About</h1>
		<p>This is a weather app build on React. I have built this for the Complete React Web App Developer Course.</p>
		<p>Tools used:</p>
		<ul>
			<li>
				<a href="https://facebook.github.io/react"> React </a> - JavaScript framework used.
			</li>
			<li>
				<a href="http://openweathermap.org"> Open Weather App</a> - Open Weather App used for search weather data by city.
			</li>
		</ul>

		</div>
	)
};

module.exports = About;