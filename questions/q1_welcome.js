// Q1 - Welcome Page Greeting
$(document).ready(function(){
  // Set initial greeting based on time of day
  function setGreeting(){
    var hour = new Date().getHours();
    var text = 'Hello!';
    if(hour>=5 && hour<12) text = 'Good Morning!';
    else if(hour>=12 && hour<18) text = 'Good Afternoon!';
    else text = 'Good Evening!';
    $('#greetingText').text(text);
  }

  setGreeting();

  // Clicking greeting shows an alert
  $('#greetingText').on('click', function(){
    alert('You clicked the greeting: ' + $(this).text());
  });

  // Change greeting to a motivational quote
  $('#changeGreeting').on('click', function(){
    $('#greetingText').text('Keep going — small steps every day.');
  });

  // Toggle visibility of welcome message
  $('#toggleWelcome').on('click', function(){
    $('#welcomeMsg').toggle();
  });

  // Reset to time-based greeting
  $('#resetGreeting').on('click', function(){
    setGreeting();
  });
});
