(function showTheMessage() {
	var name = prompt('Please enter your name', 'Walter White');
	var event = prompt('Which event do you have today ?', 'cooking event');
	var time = prompt('What time does this event start ?', '12 a.m.');
	var place = prompt('Where does the event start ?', 'meth lab');
	console.log(name + " has a " + event + " today at " + time + " in " + place);
})();