//read file
var fs = require("fs");
var fileContent = fs.readFileSync("./input.txt", "utf-8");
var textList = fileContent.split('\n');
var numbersList = new Array();

//Convert rows in the file that are supposed to be coordinates to arrays of integer pairs for ease of reference later on
//Does not include the final row of the file which should be for cardinal directions
for (i=0; i < textList.length - 1; i++) {
	var numbers = textList[i].split(' ').map(Number);
	numbersList.push(numbers);
}

//Main executed function
var cleanMyRoom = function() {
	//Define size of room
	var roomSize = numbersList[0];
	
	//Define starting position
	var startCoord = numbersList[1];
	var x = startCoord[0];
	var y = startCoord[1];

	//Create separate array of all dirty spots
	var dirtyList = numbersList.slice(2,);
	//Grab directions list
	var directions = textList[textList.length - 1]

	var cleanedSpots = 0;

	//Iterate through directions
	for (i=0; i < directions.length; i++) {
		switch(directions[i]) {
			case "N":
				y += 1;
				break;
			case "S":
				y -= 1;
				break;
			case "E":
				x += 1;
				break;
			case "W":
				x -= 1;
				break;
		};
		//Temporary array to store indices of dirty spots within dirtyList that get cleaned
		var cleanedList = new Array();

		//On each iteration, check if position matches to a dirty spot coordinate. If a match, push index of dirty spot within dirtyList to temporary array cleanedList
		for (j=0; j < dirtyList.length; j++) {
			if (x == dirtyList[j][0] && y == dirtyList[j][1]) {
				cleanedSpots +=1;
				cleanedList.push(j);
			}
		};
		//Remove dirty spots from dirtyList usingn stored indices as they're now clean!
		if (cleanedList.length != 0) {
			for (k=0; k < cleanedList.length; k++) {
				dirtyList.splice(cleanedList[k],1);
			}
		};
	}

	//Outputs
	console.log(x,y);
	console.log(cleanedSpots);
};

cleanMyRoom();