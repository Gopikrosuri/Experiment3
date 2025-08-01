let cart = [];
let totalAmount = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  totalAmount += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  document.getElementById("cart-count").textContent = cart.length;
  const items = document.getElementById("cart-items");
  items.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    items.appendChild(li);
  });
  document.getElementById("total-amount").textContent = totalAmount;
}

function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("open");
}

