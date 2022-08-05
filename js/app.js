// responsive menu
var hamburger = document.querySelector(".hamburger");
//on click
hamburger.addEventListener("click", function () {
  //toggle class "is-actice"
  hamburger.classList.toggle("is-active");
  // do something alese, like open/close
});

/* Toggle between adding and removing the "responsive" class to nav-bar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNav-bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

//skills selection
function Skill(text) {
  document.getElementById("skill-selection-text").innerHTML = text;
}
