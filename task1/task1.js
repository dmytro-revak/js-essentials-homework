(function showTheMessage() {
	var name = prompt('Please enter your name');
	var event = prompt('Which event do you have today ?');
	var time = prompt('What time does this event start ?');
	var place = prompt('Where does the event start ?');
	console.log(name + " has a " + event + " today at " + time + " in " + place);
})();