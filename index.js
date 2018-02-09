var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({item: Math.floor(Math.random() * 10)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${Object.key(cart[0])} at $${cart[0][Object.key(cart[0])]}.`
  } else if (cart.length === 2){
    return `In your cart, you have ${} at $${} and ${} at $${}.`
  } else {
    return
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
