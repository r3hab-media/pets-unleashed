let navMenu = `
  <nav>
    <ul class="menu">
      <li class="logo"><a href="/">Pets Unleashed <i class="fas fa-paw"></i></a></li>
      <li class="item"><a href="/">Home</a></li>
      <li class="item"><a href="/about.html">About</a></li>
      <li class="item has-submenu">
        <a tabindex="0">Adoptions</a>
        <ul class="submenu">
          <li class="subitem"><a href="/pets/dogs.html">Dogs</a></li>
          <li class="subitem"><a href="/pets/cats.html">Cats</a></li>
        </ul>
      </li>
      <li class="item"><a href="/locations.html">Locations</a></li>
      <li class="item"><a href="/press.html">Press</a></li>
      <li class="item"><a href="/contact.html">Contact Us</a></li>
      <li class="item button"><a href="#">Log In</a></li>
      <li class="item button secondary"><a href="#">Sign Up</a></li>
      <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
  </nav>
`;

resultNav.innerHTML = navMenu;

//nav menu operation
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);