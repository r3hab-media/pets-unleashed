//All general js references
//pet array
petArray();
function petArray() {
	animals = ["dogs,", " cats,", " birds,", " fish,", " arachnids,", " and amphibians."];

	for (i = 0; i < animals.length; i++) {
		document.querySelector(".viewAnimals").innerHTML += animals[i];
	}
};


// date reference
let d = new Date();
let y = d.getFullYear();
thisYear.textContent = y;
