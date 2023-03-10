$(document).ready(function() {
    $('.dropdown').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('open');
      $(this).find('.dropdown-menu').toggleClass('open');
    });
  
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is('.dropdown') && !$(target).parents().is('.dropdown')) {
        $('.dropdown').removeClass('open');
        $('.dropdown-menu').removeClass('open');
      }
    });
  });

  var images = document.getElementsByClassName('slide-image');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', function() {
    var text = this.nextElementSibling;
    text.classList.add('show');
  });

  images[i].addEventListener('mouseout', function() {
    var text = this.nextElementSibling;
    text.classList.remove('show');
  });
}