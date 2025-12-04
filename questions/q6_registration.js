// Q6 - User Registration with duplicate check (Axios)
// JSON Server: json-server --watch questions/q6_db_users.json --port 3006
(function(){
  var base = 'http://localhost:3006/users';
  var form = document.getElementById('regForm');
  var msg = document.getElementById('message');

  function showMessage(text, ok){ msg.innerHTML = '<div class="'+(ok? 'success':'error')+'">'+text+'</div>'; }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    if(!email || !password || !name){ showMessage('All fields required.'); return; }

    // 1. Check if email already exists
    axios.get(base + '?email=' + encodeURIComponent(email)).then(function(res){
      if(res.data && res.data.length > 0){
        showMessage('Email already registered.');
      } else {
        // 2. Submit using POST
        axios.post(base, { name: name, email: email, password: password }).then(function(resp){
          showMessage('Registration successful!', true);
          form.reset();
        }).catch(function(){ showMessage('Failed to register.'); });
      }
    }).catch(function(){ showMessage('Error checking email.'); });
  });
})();
