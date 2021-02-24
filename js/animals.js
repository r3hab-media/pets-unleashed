//pet array
function petArray() {
	animals = ["dogs,", " cats,", " birds,", " fish,", " arachnids,", " and amphibians."];

	for (i = 0; i < animals.length; i++) {
		document.querySelector(".viewAnimals").innerHTML += animals[i];
	}
}
petArray();
