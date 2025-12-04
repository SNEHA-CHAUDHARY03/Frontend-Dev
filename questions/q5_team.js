// Q5 - Team Members Directory behaviors
$(function(){
  // Click a manager -> highlight all direct reports (siblings in same section)
  $('.manager').on('click', function(){
    var $dept = $(this).closest('.dept');
    $dept.find('.employee').addClass('highlight');
  });

  // Hover on an employee -> show contact info using .next() or .find()
  $('.employee').hover(function(){
    // show the .contact element inside this employee
    $(this).find('.contact').show();
  }, function(){
    $(this).find('.contact').hide();
  });

  // Click on a department -> change background of all members using .children()
  $('.department').on('click', function(){
    var $dept = $(this).closest('.dept');
    $dept.children().toggleClass('highlight');
  });

  // Select a random employee -> highlight sibling employees
  $('#randomEmployee').on('click', function(){
    var $all = $('.employee');
    var idx = Math.floor(Math.random()*$all.length);
    var $picked = $all.eq(idx);
    $picked.siblings('.employee').addClass('highlight');
    // also highlight the chosen one uniquely
    $picked.addClass('highlight');
  });

  // Collapse/expand team using .parent() and .find()
  $('#collapseTeams').on('click', function(){
    $('.dept').each(function(){
      $(this).find('.employee, .manager').hide();
      $(this).find('.department').show();
    });
  });
  $('#expandTeams').on('click', function(){
    $('.dept').each(function(){
      $(this).find('.employee, .manager').show();
    });
  });
});
