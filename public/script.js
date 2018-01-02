// an array with all of our cart items
var cart = {item: []};
var totalCartAmount = 0;


var updateCart = function () {
  $('.cart-list').empty();
  $('.total').empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart);
  $('.cart-list').append(newHTML);
  for(var i =0; i <cart.item.length; i++) {
    totalCartAmount += cart.item[i].price;
  }
  $('.total').append(totalCartAmount)
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function (item) {
  cart.item.push(item)
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
   cart = {item: []};
   updateCart()
   $('.total').empty();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data()
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
