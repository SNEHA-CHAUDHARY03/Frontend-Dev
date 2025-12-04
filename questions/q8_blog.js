// Q8 - Dynamic Blog Posts behaviors
$(function(){
  var $posts = $('#posts');

  // Add new post -> append
  $('#addPost').on('click', function(){
    var t = $('#postTitle').val().trim() || 'Untitled';
    var c = $('#postContent').val().trim() || '';
    var $p = $('<article class="post">'+t+'<div class="content">'+c+'</div></article>');
    $posts.append($p);
    $('#postTitle,#postContent').val('');
  });

  // Prepend featured post
  $('#prependFeatured').on('click', function(){
    var $p = $('<article class="post featured">Featured Post - '+new Date().toLocaleString()+'</article>');
    $posts.prepend($p);
  });

  // Remove last post
  $('#removeLast').on('click', function(){
    $posts.children('.post').last().remove();
  });

  // Add tags using .before()/.after()
  $posts.on('click', '.post', function(){
    var $p = $(this);
    if($p.next('.tagline').length===0){
      $p.after('<div class="tagline">Tags: sample, demo</div>');
    } else {
      $p.next('.tagline').remove();
    }
  });

  // Highlight posts with specific keywords dynamically
  function highlightKeyword(keyword){
    $('.post').each(function(){
      var $p = $(this);
      if($p.text().toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
        $p.css('background','#fff2cc');
      } else $p.css('background','');
    });
  }

  // Example usage: highlightKeyword('jQuery'); // call from console
});
