(function petArray() {
	animals = ["dogs,", " cats,", " birds,", " fish,", " arachnids,", " and amphibians."];

	for (i = 0; i < animals.length; i++) {
		if (document.querySelector(".viewAnimals") != null) {
			document.querySelector(".viewAnimals").innerHTML += animals[i];
		}
	}
})();

//cats * dogs redirect
(function redirectURL() {
	let currentURL = window.location.href;
	if (typeof redirect == "undefined") {
		return;
	}
	if (currentURL.indexOf("dogs.html") > -1) {
		redirect.innerHTML = `<a href="/pets/cats.html">Cats</a>`;
	} else {
		redirect.innerHTML = `<a href="/pets/dogs.html">Dogs</a>`;
	}
})();

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
		if (document.querySelector(".dogs") != null) {
			document.querySelector(".dogs").innerHTML += '<i class="fas fa-dog"></i> ' + dogs[i] + "<br>";
		}
	}
})();

//get ip, city, state & country
$.get(
	"http://ipinfo.io",
	function (response) {
		$("#city").html(response.city);
		$("#state").html(response.region);
		$("#zip").html(response.postal);
		// $("#details").html(JSON.stringify(response, null, 4));
	},
	"jsonp"
);

//collapsible
const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener(
	"click",
	(ev) => {
		const elm = ev.target;
		if (triggers.includes(elm)) {
			const selector = elm.getAttribute("data-target");
			collapse(selector, "toggle");
		}
	},
	false
);

const fnmap = {
	toggle: "toggle",
	show: "add",
	hide: "remove",
};

const collapse = (selector, cmd) => {
	const targets = Array.from(document.querySelectorAll(selector));
	targets.forEach((target) => {
		target.classList[fnmap[cmd]]("show");
	});
};

window.onload = function () {
	var inputs = document.getElementsByClassName("sum"),
		total = document.getElementById("payment-total");

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].onchange = function () {
			var add = this.value * (this.checked ? 1 : -1);
			total.innerHTML = parseFloat(total.innerHTML) + add;
			var new_total = parseFloat(document.getElementById("input").value);
			console.log(new_total);
			document.getElementById("input").value = new_total + add;
		};
	}
};

// date reference
let d = new Date();
let y = d.getFullYear();
thisYear.textContent = y;
