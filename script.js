const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// belanja code
let cartItems = [];
let totalPrice = 0;

function addToCart(card) {
    let itemName = card.querySelector('h5').innerText;
    let itemPrice = parseFloat(card.querySelector('h4').innerText.substring(1));

    let item = cartItems.find(item => item.name === itemName);
    if (item) {
        item.quantity++;
    } else {
        cartItems.push({ name: itemName, quantity: 1, price: itemPrice });
    }

    totalPrice += itemPrice;
    updateCart();

    window.open(keranjang.html);
}

function updateCart() {
    let cartItemsHTML = '';
    cartItems.forEach(item => {
        cartItemsHTML += `
            <div class="cart-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${item.price * item.quantity}</span>
            </div>
        `;
    });

    document.getElementById('cart-items').innerHTML = cartItemsHTML;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

document.getElementById('btn-bayar').addEventListener('click', function(){
    alert('Pesanan anda berhasil');
    document.getElementById('cart-items').textContent = '0';
    document.getElementById('total-price').textContent = '0';
});