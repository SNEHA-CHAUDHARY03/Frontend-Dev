// Q5 - College Timetable Viewer (Fetch + dynamic rendering)
// JSON Server: json-server --watch questions/q5_db_timetable.json --port 3005
(function(){
  var base = 'http://localhost:3005/timetable';
  var $day = document.getElementById('daySelect');
  var $out = document.getElementById('output');

  function render(items){
    $out.innerHTML = '';
    if(!items || items.length === 0){
      $out.textContent = 'No classes today.'; return;
    }
    items.forEach(function(i){
      var d = document.createElement('div'); d.className = 'entry';
      d.innerHTML = '<strong>'+i.subject+'</strong> — '+i.faculty+'<div>'+i.time+'</div>';
      $out.appendChild(d);
    });
  }

  function fetchDay(day){
    $out.innerHTML = '<div>Loading...</div>';
    fetch(base + '?day=' + encodeURIComponent(day)).then(function(r){ if(!r.ok) throw new Error('fetch failed'); return r.json(); }).then(function(data){ render(data); }).catch(function(){ $out.textContent = 'Error loading timetable.'; });
  }

  $day.addEventListener('change', function(){ fetchDay($day.value); });
  // initial
  fetchDay($day.value);
})();
