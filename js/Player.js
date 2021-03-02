class Player{
	constructor(){}
	// read the value of playerCount from the database
	getCount(){
		var playerCountRef = database.ref('playerCount');
		playerCountRef.on("value", function (data) {
			playerCount = data.val();
		})
	}

// write a new value to playerCount in the database
	updateCount(count){
		database.ref('/').update({
			playerCount : count
		})
	}

// write name of the player in database
	update(name){
		var playerIndex = "player"+playerCount;
		database.ref(playerIndex).set({
			name : name
		})
	}
}