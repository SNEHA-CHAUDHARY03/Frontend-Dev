// Q4 - Special Offer Banner behaviors
$(function(){
  var $banners = $('#banners .banner');
  var rotateIndex = 0;
  var rotationTimer;

  $('#hide').on('click', function(){ $banners.hide(); });
  $('#show').on('click', function(){ $banners.show(); });

  // Slide toggle: slideUp if visible, slideDown if hidden
  $('#slideToggle').on('click', function(){
    $banners.each(function(){
      var $b = $(this);
      $b.is(':visible') ? $b.slideUp(200) : $b.slideDown(200);
    });
  });

  // Fade toggle
  $('#fadeToggle').on('click', function(){
    $banners.each(function(){
      var $b = $(this);
      $b.is(':visible') ? $b.fadeOut(200) : $b.fadeIn(200);
    });
  });

  // Automatic rotate every 5 seconds using fadeOut/fadeIn
  function startRotation(){
    rotationTimer = setInterval(function(){
      var $all = $banners;
      var $current = $all.eq(rotateIndex % $all.length);
      $current.fadeOut(400, function(){
        rotateIndex++;
        var $next = $all.eq(rotateIndex % $all.length);
        $next.fadeIn(400);
      });
    }, 5000);
  }

  function stopRotation(){ clearInterval(rotationTimer); }

  // Start with only first banner visible
  $banners.hide().first().show();
  startRotation();

  // Pause rotation when hovering banners, resume on leave
  $('#banners').hover(stopRotation, startRotation);
});
