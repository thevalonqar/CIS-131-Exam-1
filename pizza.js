// Gloabal Variables

var i = 0;


//  FUnctions

// Sets the values in the Number of Pizzas Dropdown
function numberDropdown() {
    for (i = 0; i < 10; i++) {
      document.getElementById("ddNum" + i).innerHTML = (i + 1);
    }
}

  if (window.addEventListener) {
    window.addEventListener("load", numberDropdown, false);
  } else if (window.attachEvent) {
    window.addEventListener("onload", numberDropdown);
  }
