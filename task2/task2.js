(function showTheDistance() {
	var x1 = 0;
	var y1 = 0;
	var x2 = parseInt(prompt('Please enter the X coordinat for second point'), 10);
	var y2 = parseInt(prompt('Please enter the Y coordinat for second point'), 10);
	var result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
	alert('The distance between points A (' + (x1) + ',' + (y1) + ') and B ('+ (x2) + ',' + (y2) + ') is ' + (result) + ' points');
})();