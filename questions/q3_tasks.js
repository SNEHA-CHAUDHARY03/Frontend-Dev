// Q3 - Task Manager using jQuery AJAX + query params
// JSON Server: json-server --watch questions/q3_db_tasks.json --port 3003
$(function(){
  var base = 'http://localhost:3003/tasks';
  var $tasks = $('#tasks');
  var $filter = $('#filter');

  function load(filterVal){
    var data = {};
    if(filterVal === 'completed') data.completed = true;
    else if(filterVal) data.priority = filterVal;

    $.ajax({url: base, data: data, success: function(items){ render(items); }, error: function(){ $tasks.html('<div>Error loading tasks</div>'); }});
  }

  function render(items){
    $tasks.empty();
    items.forEach(function(t){
      var $row = $('<div class="task"></div>');
      $row.append('<div><strong>'+t.title+'</strong> <small>('+t.priority+')</small></div>');
      var $chk = $('<input type="checkbox">').prop('checked', !!t.completed).data('id', t.id);
      $chk.on('change', function(){ toggleCompleted($(this)); });
      $row.append($chk);
      $tasks.append($row);
    });
  }

  function toggleCompleted($chk){
    var id = $chk.data('id');
    var newVal = $chk.is(':checked');
    $.ajax({ url: base + '/' + id, method: 'PATCH', contentType: 'application/json', data: JSON.stringify({ completed: newVal }), success: function(){ /* UI already updated */ }, error: function(){ alert('Failed to update task'); $chk.prop('checked', !newVal); } });
  }

  $filter.on('change', function(){ load($(this).val()); });

  // initial
  load('');
});
