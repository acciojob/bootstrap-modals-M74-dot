document.addEventListener("DOMContentLoaded", function() {
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
