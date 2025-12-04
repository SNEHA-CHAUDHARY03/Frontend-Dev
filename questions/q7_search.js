// Q7 - Search Courses behaviors
$(function(){
  var $input = $('#search');
  var $courses = $('#courses .course');

  function updateCount(){
    $('#matchCount').text($courses.filter(':visible').length);
  }

  // Keyup filters courses in real-time
  $input.on('keyup', function(){
    var q = $(this).val().trim().toLowerCase();
    $courses.each(function(){
      var $c = $(this);
      var text = $c.text().toLowerCase();
      if(q === ''){
        $c.show().find('span.match').remove();
        $c.css('background','');
      } else if(text.indexOf(q) !== -1){
        // Highlight matched text using .css()
        var idx = text.indexOf(q);
        // simple highlight by background
        $c.show().css('background','#ffffcc');
      } else {
        // Toggle visibility of courses not matching search
        $c.hide();
      }
    });
    updateCount();
  });

  // Clear search resets list
  $('#clearSearch').on('click', function(){
    $input.val('');
    $courses.show().css('background','');
    updateCount();
  });

  // initialize count
  updateCount();
});
