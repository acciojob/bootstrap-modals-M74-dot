document.addEventListener("DOMContentLoaded", function() {
  var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
    interval: false // Disable automatic sliding
  });

  var leftControl = document.querySelector('.carousel-control-prev');
  var rightControl = document.querySelector('.carousel-control-next');

  leftControl.addEventListener('click', function() {
    myCarousel.prev();
  });

  rightControl.addEventListener('click', function() {
    myCarousel.next();
  });

  var openModalButton = document.getElementById("open-modal");
  var modal = document.getElementById("newton-modal");
  var closeModalButtons = document.querySelectorAll(".close-modal");

  openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeModalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      modal.style.display = "none";
    });
  });
});
