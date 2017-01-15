function addPromise (a,b) {
	return new Promise(function(resolve, reject) {
		if(typeof a == 'number' && typeof b == 'number') {
			resolve(a+b);
		} else {
			reject('Error. Alguno de los valores o los 2 valores no son numeros');
		}
	});
}

addPromise(2,3).then(function(temp) {
	console.log(temp);
}, function(err) {
	console.log(err);
});

addPromise(2,'a').then(function(temp) {
	console.log(temp);
}, function(err) {
	console.log(err);
});
