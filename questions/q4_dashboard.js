// Q4 - Multi-API Dashboard using Fetch + Promise.all
// JSON Server: json-server --watch questions/q4_db_multi.json --port 3004
(function(){
  var base = 'http://localhost:3004';
  var $users = document.getElementById('usersCount');
  var $orders = document.getElementById('ordersCount');
  var $products = document.getElementById('productsCount');
  var $warning = document.getElementById('warning');

  function setSkeletons(){
    [$users,$orders,$products].forEach(function(el){ el.innerHTML = '<div class="skeleton"></div><div class="skeleton" style="width:60%"></div>'; });
  }

  function loadAll(){
    setSkeletons();
    $warning.textContent = '';

    var pUsers = fetch(base + '/users').then(function(r){ if(!r.ok) throw new Error('users'); return r.json(); });
    var pOrders = fetch(base + '/orders').then(function(r){ if(!r.ok) throw new Error('orders'); return r.json(); });
    var pProducts = fetch(base + '/products').then(function(r){ if(!r.ok) throw new Error('products'); return r.json(); });

    Promise.allSettled([pUsers, pOrders, pProducts]).then(function(results){
      // results: array of {status: 'fulfilled'|'rejected', value|reason}
      var anyFailed = false;
      if(results[0].status === 'fulfilled') $users.textContent = results[0].value.length;
      else { $users.textContent = '—'; anyFailed = true; }

      if(results[1].status === 'fulfilled') $orders.textContent = results[1].value.length;
      else { $orders.textContent = '—'; anyFailed = true; }

      if(results[2].status === 'fulfilled') $products.textContent = results[2].value.length;
      else { $products.textContent = '—'; anyFailed = true; }

      if(anyFailed) $warning.textContent = 'Some data could not be loaded.';
    });
  }

  loadAll();
  // optional: refresh every 30s
  // setInterval(loadAll, 30000);
})();
