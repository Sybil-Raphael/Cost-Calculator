// This function calculates the total cost of the pizza order
function calculatePizzaCost(basePrice, numberOfToppings, toppingPrice) {
  // basePrice: the price of the pizza base
  // numberOfToppings: how many toppings are selected
  // toppingPrice: the price for each topping
  const total = basePrice + (numberOfToppings * toppingPrice);
  return total;
}

// This function handles the form submission and updates the total cost on the page
function handleFormSubmit(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the selected size from the dropdown
  const sizeSelect = document.getElementById('size');
  const size = sizeSelect.value;
  let basePrice = 10; // default for medium

  // Set base price based on size
  if (size === "small") {
    basePrice = 8;
  } else if (size === "medium") {
    basePrice = 10;
  } else if (size === "large") {
    basePrice = 12;
  }

  const toppingPrice = 2;

  // Get all topping checkboxes
  const toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');

  // Count how many toppings are selected
  const numberOfToppings = toppingCheckboxes.length;

  // Check if delivery is selected
  const deliveryCheckbox = document.getElementById('delivery');
  let deliveryFee = 0;
  if (deliveryCheckbox.checked) {
    deliveryFee = 5;
  }

  // Calculate the total cost, including delivery if selected
  const totalCost = calculatePizzaCost(basePrice, numberOfToppings, toppingPrice) + deliveryFee;

  // Show the total cost on the page using template literals
  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total Cost: $${totalCost}`;
}

// Find the form and add an event listener for submit
const form = document.getElementById('pizza-order-form');
form.addEventListener('submit', handleFormSubmit);