// Gloabal Variables

var i = 0;
var totalPizzas = 10;
var pTypes = ["Cheese", "Pepperoni", "Supreme", "Meat Lovers", "Hawaiian"];


//  FUnctions

// Sets the values in the Number of Pizzas Dropdown
function numberDropdown() {
    for (i = 0; i < totalPizzas; i++) {
      document.getElementById("ddNum" + i).innerHTML = (i + 1);
    }
}

  if (window.addEventListener) {
    window.addEventListener("load", numberDropdown, false);
  } else if (window.attachEvent) {
    window.addEventListener("onload", numberDropdown);
  }

// Sets values in the Type of Pizza dropdown
function typeDropdown() {
    for (i = 0; i < pTypes.length; i++) {
      document.getElementById("ddType" + i).innerHTML = pTypes[i];
    }
}

  if (window.addEventListener) {
    window.addEventListener("load", typeDropdown, false);
  } else if (window.attachEvent) {
    window.addEventListener("onload", typeDropdown);
  }

  //Submit button
  function submitOrder() {
     var x = document.getElementById('customerOrder');
     var y = document.getElementById('submitButton');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.disabled = true;
    } else {
        x.style.display = 'none';
    }

  }
