// Q2 - Employee Status Dashboard using XMLHttpRequest + PATCH
// JSON Server: json-server --watch questions/q2_db_employees.json --port 3002
(function(){
  var base = 'http://localhost:3002/employees';
  var $list = document.getElementById('list');
  var $error = document.getElementById('error');

  function showError(msg){ $error.textContent = msg; setTimeout(function(){ $error.textContent = ''; }, 3000); }

  function fetchEmployees(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', base);
    xhr.onload = function(){
      if(xhr.status >=200 && xhr.status <300){
        var data = JSON.parse(xhr.responseText);
        render(data);
      } else showError('Failed to load employees');
    };
    xhr.onerror = function(){ showError('Network error loading employees'); };
    xhr.send();
  }

  function render(items){
    $list.innerHTML = '';
    items.forEach(function(emp){
      var row = document.createElement('div'); row.className = 'row';
      row.innerHTML = '<div>'+emp.name+'</div>';
      var btn = document.createElement('button');
      btn.textContent = emp.status === 'active' ? 'Active' : 'Inactive';
      btn.dataset.id = emp.id;
      btn.dataset.status = emp.status;
      btn.addEventListener('click', toggleStatus);
      row.appendChild(btn);
      $list.appendChild(row);
    });
  }

  function toggleStatus(e){
    var btn = e.currentTarget;
    var id = btn.dataset.id;
    var oldStatus = btn.dataset.status;
    var newStatus = oldStatus === 'active' ? 'inactive' : 'active';

    // Optimistic UI update
    btn.textContent = newStatus === 'active' ? 'Active' : 'Inactive';
    btn.dataset.status = newStatus;

    // Send PATCH via XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('PATCH', base + '/' + id);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function(){
      if(!(xhr.status >=200 && xhr.status <300)){
        // revert on failure
        btn.textContent = oldStatus;
        btn.dataset.status = oldStatus;
        showError('Failed to update status (server error)');
      }
    };
    xhr.onerror = function(){
      // revert on network error
      btn.textContent = oldStatus;
      btn.dataset.status = oldStatus;
      showError('Network error while updating status');
    };
    xhr.send(JSON.stringify({ status: newStatus }));
  }

  // initial load
  fetchEmployees();
})();
