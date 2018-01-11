var namesOfWomen = ['Karolina', 'Klementyna', 'Katarzyna', 'Paulina', 'Patrycja'];
	namesOfMan = ['Janusz', 'Bogumił', 'Patrycy', 'Dobromir', 'Anastazy'];
	var completList = namesOfWomen.concat(namesOfMan);

var newPosition = 'Franciszek';
	if (completList.indexOf(newPosition) === -1) {
		console.log('newPosition is not on completList');
	}
var x = completList.push(newPosition);

console.log(completList);

 