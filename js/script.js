var clients =[];






function submitForm () {
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;

	var temp = {
		email: email,
		password: pass
	};
	clients.push(temp);
	console.log(clients);
	return submitForm;
}



//intro to objects notes
/*
function createAnimal(namePet, typePet, age, location, feet, tail, eyes, ears) {
	var animalObject = {
		namePet: namePet,
		typePet: typePet,
		age: age,
		location: location,
		feet: feet,
		tail: eyes,
		eyes: eyes,
		ears: ears
	};
	return animalObject;
}

var myFirstAnimal = createAnimal("Manny", "Wild dog", 4, "San Francisco", 4, 1, 2, 2);

console.log(myFirstAnimal.namePet);
console.log(myFirstAnimal.location);

myFirstAnimal.location = "Texas";

console.log(myFirstAnimal.location);

*/







