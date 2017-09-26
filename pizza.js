// Gloabal Variables

var i = 0;
var totalPizzas = 10;
var pTypes = ["Cheese", "Pepperoni", "Supreme", "Meat Lovers", "Hawaiian"];
var userName = document.getElementById('nameInput');
var userNumber = document.getElementById('phoneInput');
var typeSelection = document.getElementById('pizzaType');
var orderBox = document.getElementById('customerOrder');
var sBtn = document.getElementById('submitButton');



//  FUnctions

// Sets the values in the Number of Pizzas Dropdown
function numberDropdown() {
    for (i = 0; i < totalPizzas; i++) {
      document.getElementById("ddNum" + i).innerHTML = (i + 1);
    }
}

//Event Listener for Number of Pizzas Dropdown on page load
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
//Event Listener for Type of Pizzas Dropdown on page load
  if (window.addEventListener) {
    window.addEventListener("load", typeDropdown, false);
  } else if (window.attachEvent) {
    window.addEventListener("onload", typeDropdown);
  }

  //Submit buttons
  function submitOrder() {
    var pNumber = document.getElementById('pizzaAmt').value;
    var pText = typeSelection.options[typeSelection.selectedIndex].text;
    // alert(pNumber + " " + pText);
    document.getElementById('orderNum').innerHTML = pNumber;
    document.getElementById('orderType').innerHTML = pText;

    //Hide/Show order
    if (orderBox.style.display == 'none') {
        orderBox.style.display = 'block';
        // sBtn.disabled = true;
    } else {
        orderBox.style.display = 'none';
    }
  }

//Event Listerner for the Submit Button on click
    if (sBtn.addEventListener) {
      sBtn.addEventListener("click", submitOrder, false);
    } else if (window.attachEvent) {
      sBtn.addEventListener("onload", submitOrder);
    }
