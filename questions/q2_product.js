// Q2 - Product Highlight behaviors
$(function(){
  var $products = $('.product');

  // Click on a product highlights it (toggle)
  $products.on('click', function(e){
    // Avoid toggling when favorite icon clicked
    if($(e.target).hasClass('favorite')) return;
    $(this).toggleClass('selected');
  });

  // Hover to show additional product details
  $products.hover(
    function(){ $(this).find('.details').slideDown(150); },
    function(){ $(this).find('.details').slideUp(150); }
  );

  // Favorite icon toggle selected class (visual)
  $products.find('.favorite').on('click', function(e){
    e.stopPropagation(); // prevent parent click
    var $icon = $(this);
    $icon.toggleClass('fav-selected');
    $icon.text($icon.hasClass('fav-selected')? '♥' : '♡');
    $icon.closest('.product').toggleClass('selected', $icon.hasClass('fav-selected'));
  });

  // Apply style for products with discounts using attribute selector
  // Adds a visible badge for products with data-discount attribute
  $('[data-discount]').each(function(){
    $(this).addClass('has-discount');
    $(this).find('.discount-tag').addClass('discount');
  });

  // Alert if product is out of stock using data attribute
  $products.filter('[data-stock="0"]').on('click', function(e){
    // If favorite clicked, let that proceed
    if($(e.target).hasClass('favorite')) return;
    alert($(this).find('h3').text() + ' is out of stock.');
  });
});
