document.addEventListener("DOMContentLoaded", function() {
  const asideContainer = document.querySelector(".aside-container");

  window.addEventListener("scroll", function() {
    const scrollPercentage = (window.scrollY / window.innerHeight) * 100;

    if (scrollPercentage >= 100) {
      mostrarAsideContainer();
    } else if (scrollPercentage < 100) {
      esconderAsideContainer();
    }
  });

  function esconderAsideContainer() {
    if (asideContainer) {
      asideContainer.style.display = "none";
    }
  }

  function mostrarAsideContainer() {
    if (asideContainer) {
      asideContainer.style.display = "block";
    }
  }
});


//Rolamento suave:
function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}