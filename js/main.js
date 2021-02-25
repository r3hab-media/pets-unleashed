(function petArray() {
	animals = ["dogs,", " cats,", " birds,", " fish,", " arachnids,", " and amphibians."];

	for (i = 0; i < animals.length; i++) {
		if (document.querySelector('.viewAnimals') != null) {
      document.querySelector(".viewAnimals").innerHTML += animals[i];
    }
	}
}());


//cats * dogs redirect
(function redirectURL() {
  let currentURL = window.location.href;
  if (typeof redirect == 'undefined') {
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
    if (document.querySelector('.dogs') != null) {
      document.querySelector(".dogs").innerHTML += '<i class="fas fa-dog"></i> ' + dogs[i] + "<br>";
    }
	}
}());


// date reference
let d = new Date();
let y = d.getFullYear();
thisYear.textContent = y;