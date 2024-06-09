function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 

  document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.querySelector(".overlay");
    var loader = document.querySelector(".loader");

    function removeOverlay() {
        overlay.parentNode.removeChild(overlay);
    }

    
    setTimeout(removeOverlay, 3000); 
});

  
