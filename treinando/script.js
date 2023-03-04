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
  const images = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg"
  ];
  
  const container = document.querySelector(".container");
  
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = `./treinando/${image}`;
    container.appendChild(img);
  });
  
  let zoomLevel = 1;
  
  window.addEventListener("resize", () => {
    const zoomThreshold = window.innerWidth / 1000;
    if (zoomThreshold < 1) {
      zoomLevel = zoomThreshold;
    } else {
      zoomLevel = 1;
    }
    container.style.transform = `scale(${zoomLevel})`;
  });