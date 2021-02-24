function dogArray() {
	dogs = [
		"German Shepherd",
		"Bulldog",
		"Poodle",
		"Labrador Retriever",
		"Golden Retriever",
		"Siberian Husky",
		"Chihuahua",
		"Dachshund",
		"French Bulldog",
		"Great Dane",
	];

	for (i = 0; i < dogs.length; i++) {
		document.querySelector(".dogs").innerHTML += '<i class="fas fa-dog"></i> ' + dogs[i] + "<br>";
	}
}
dogArray();
