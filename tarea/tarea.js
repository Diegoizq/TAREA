let cart = [];

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let totalPrice = 0;
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent =` ${item.name} - $${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        
        cartItems.appendChild(listItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}
