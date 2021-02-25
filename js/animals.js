//cats * dogs redirect
(function redirectURL() {
	let redirect;
	let currentURL;
  if (!redirect) {
    return;
  }
  if (currentURL.indexOf('dogs.html') > -1) {
    redirect.innerHTML = `<a href="/pets/cats.html">Cats</a>`;
  } else {
    redirect.innerHTML = `<a href="/pets/dogs.html">Dogs</a>`;
  }
}());

//dogs array
(function dogArray() {
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
}());
