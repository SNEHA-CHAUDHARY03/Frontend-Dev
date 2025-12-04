// Q1 - Live Search using jQuery AJAX
// JSON Server: use file questions/q1_db_products.json and run: json-server --watch questions/q1_db_products.json --port 3001
$(function(){
  var $input = $('#search');
  var $results = $('#results');
  var $loading = $('#loading');
  var timer = null;
  var baseUrl = 'http://localhost:3001/products';

  function render(items){
    $results.empty();
    if(!items || items.length === 0){
      $results.append('<div class="no-results">No products found</div>');
      return;
    }
    items.forEach(function(p){
      var $div = $('<div class="result"></div>');
      $div.append('<img src="'+p.image+'" alt="'+p.name+'" width="60">');
      $div.append('<div><strong>'+p.name+'</strong><div>$'+p.price.toFixed(2)+'</div></div>');
      $results.append($div);
    });
  }

  $input.on('input', function(){
    var q = $(this).val().trim();
    clearTimeout(timer);
    // debounce to avoid flooding
    timer = setTimeout(function(){
      $loading.show();
      $.ajax({
        url: baseUrl,
        data: { q: q },
        success: function(data){ render(data); },
        error: function(){ $results.html('<div class="no-results">Error loading results</div>'); },
        complete: function(){ $loading.hide(); }
      });
    }, 250);
  });

  // initial load (all)
  $input.trigger('input');
});
