// Q6 - Event Subscription Panel behaviors
$(function(){
  var $topics = $('#topics');

  // Subscribe -> enable notifications (add class)
  $topics.on('click', '.subscribe', function(){
    var $topic = $(this).closest('.topic');
    $topic.addClass('subscribed');
    showMessage('Subscribed to ' + $topic.contents().get(0).nodeValue.trim());
  });

  // Unsubscribe -> disable notifications
  $topics.on('click', '.unsubscribe', function(){
    var $topic = $(this).closest('.topic');
    $topic.removeClass('subscribed');
    showMessage('Unsubscribed from ' + $topic.contents().get(0).nodeValue.trim());
  });

  // Dynamically add new subscription topics and attach .on() click events
  $('#addTopic').on('click', function(){
    var name = $('#newTopic').val().trim();
    if(!name) return showMessage('Topic name required');
    var $new = $('<div class="topic">'+name+' <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>');
    $topics.append($new);
    $('#newTopic').val('');
    showMessage('Added topic: ' + name);
  });

  // Remove specific subscription -> demonstrate .off() by detaching unsubscribe for matching names
  function detachUnsubscribe(name){
    // find matching topic and remove its unsubscribe handler
    $topics.find('.topic').filter(function(){
      return $(this).text().trim().startsWith(name);
    }).each(function(){
      $(this).find('.unsubscribe').off('click');
      showMessage('Removed unsubscribe handler for ' + name);
    });
  }

  // Example: detachUnsubscribe('Beta') can be called from console

  // Show success message -> dynamically inserted into DOM
  function showMessage(msg){
    var $m = $('<div class="message" style="padding:8px;background:#eef;border-radius:4px;margin-top:6px">'+msg+'</div>');
    $('main').prepend($m);
    setTimeout(function(){ $m.fadeOut(400,function(){ $m.remove(); }); }, 2000);
  }
});
