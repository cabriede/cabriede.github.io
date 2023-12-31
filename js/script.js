
// Function to show current regions based on URL hash
(function ($) {
  $(window).on('load hashchange', function(){
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
        $('.main-menu a[href="'+ region +'"]').addClass('active');    
  });
})(jQuery);

// Loading content from external files
document.addEventListener('DOMContentLoaded', function() {
  loadContent('home-content', '/pages/home.html');
  loadContent('ministry-content', '/pages/ministry.html');
  loadContent('about-content', '/pages/about.html');
  loadContent('sermons-content', '/pages/sermons.html');
  loadContent('prayers-content', '/pages/prayers.html');
  loadContent('rites-content', '/pages/rites-of-passage.html');
  loadContent('all-ages-content', '/pages/time-for-all-ages.html');
  loadContent('contact-content', '/pages/contact.html');
});

function loadContent(elementId, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
