// Q9 - Multi-jQuery Widgets using noConflict
// Both jQuery versions loaded: v1.12.4 and v3.6.0

// Capture references using noConflict to avoid collisions
var j1 = jQuery.noConflict(true); // releases both jQuery names and returns current (v3 was loaded last, but noConflict(true) returns one then releases; we handle both below)
// After first noConflict, we need to re-acquire the second library: re-load in memory is not possible here reliably; instead assume the second is available as window.jQuery || window.$
var j2 = window.jQuery || window.$ || j1;

// If both are same, we can still proceed; demo shows usage with separate aliases

(function($){
  // Version 1 behavior: handles carousel rotation (use $ as alias)
  $(function(){
    var $slides = $('#carousel .slide');
    var idx = 0;
    $slides.hide().eq(0).show().addClass('active');
    setInterval(function(){
      $slides.eq(idx).fadeOut(300).removeClass('active');
      idx = (idx+1) % $slides.length;
      $slides.eq(idx).fadeIn(300).addClass('active');
    }, 3000);
  });
})(j1);

(function($){
  // Version 2 behavior: manages modal popups and tooltips
  $(function(){
    $('#openModal').on('click', function(){ $('#modal').fadeIn(200); });
    $('#closeModal').on('click', function(){ $('#modal').fadeOut(200); });

    // Highlight active widget
    $('#widgets .widget').on('click', function(){
      $('#widgets .widget').removeClass('active');
      $(this).addClass('active').css('background','#e6f7ff');
    });

    // Attach tooltips on hover
    $('#widgets .widget').hover(function(){
      var $t = $('<div class="tooltip" style="position:absolute;left:10px;top:10px;padding:6px;background:#333;color:#fff">Info</div>');
      $('body').append($t);
      $(this).data('tooltip',$t);
    }, function(){
      var $t = $(this).data('tooltip'); if($t) $t.remove();
    });
  });
})(j2);
