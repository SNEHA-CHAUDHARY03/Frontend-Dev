// Q10 - Registration Form Validation
$(function(){
  var existingEmails = ['existing@example.com','used@domain.com']; // simulate uniqueness check

  function isEmailValid(email){
    var re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  }

  function resetErrors(){
    $('#name,#email,#password').removeClass('invalid');
    $('#result').empty();
  }

  $('#regForm').on('submit', function(e){
    e.preventDefault();
    resetErrors();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var pass = $('#password').val();
    var valid = true;

    // 1. Name not empty
    if(!name){ $('#name').addClass('invalid'); valid = false; }

    // 2. Email format and uniqueness
    if(!isEmailValid(email)){ $('#email').addClass('invalid'); valid = false; }
    else if(existingEmails.indexOf(email.toLowerCase()) !== -1){
      $('#email').addClass('invalid');
      $('#result').append('<div class="error">Email already in use.</div>');
      valid = false;
    }

    // 3. Password length
    if(!pass || pass.length < 8){ $('#password').addClass('invalid'); valid = false; }

    if(valid){
      // 4. Show success message
      $('#result').html('<div class="success">Registration successful! Welcome, '+$('<div>').text(name).html()+'</div>');
      // Optionally add to existingEmails to simulate persistence
      existingEmails.push(email.toLowerCase());
    } else {
      $('#result').append('<div class="error">Please fix the highlighted fields.</div>');
    }
  });

  // 5. Highlight invalid fields dynamically on input
  $('#name,#email,#password').on('input', function(){
    if($(this).hasClass('invalid')) $(this).removeClass('invalid');
  });

  $('#clear').on('click', function(){
    $('#regForm')[0].reset(); resetErrors(); $('#result').empty();
  });
});
