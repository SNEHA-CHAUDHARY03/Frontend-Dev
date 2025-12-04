// Q3 - Interactive FAQ behaviors
$(function(){
  var $questions = $('.question');

  // Click toggles answer visibility
  $questions.on('click', function(){
    $(this).next('.answer').slideToggle(150);
  });

  // Hover changes question color
  $questions.hover(
    function(){ $(this).css('color','#d35400'); },
    function(){ $(this).css('color',''); }
  );

  // Double-click collapses all answers
  $questions.on('dblclick', function(){
    $('.answer').slideUp(150);
  });

  // Focus on an input highlights the parent question
  $('.ans-input').on('focus', function(){
    $(this).closest('article').find('.question').addClass('focused');
  }).on('blur', function(){
    // Blur resets background color
    $(this).closest('article').find('.question').removeClass('focused');
  });
});
