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
    return `In your cart, you have ${Object.key(cart[0])} at $${cart[0][Object.key(cart[0])]} and ${Object.key(cart[1])} at $${cart[1][Object.key(cart[1])]}.`
  } else {
    var message = 'In your cart, you have'
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        message += ` and ${Object.key(cart[i])} at $${cart[i][Object.key(cart[i])]}.`
      } else {
        message += ` ${Object.key(cart[i])} at $${cart[i][Object.key(cart[i])]},`
      }
    }
    return message
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.key(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  if (item not in cart) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
