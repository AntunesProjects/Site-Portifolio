//Animação da barra lateral
document.addEventListener("DOMContentLoaded", function() {
    const asideContainer = document.querySelector(".aside-container");

    window.addEventListener("scroll", function() {
        const scrollPercentage = (window.scrollY / window.innerHeight) * 100;

        if (scrollPercentage >= 80) {
            mostrarAsideContainer();
        } else if (scrollPercentage < 80) {
            esconderAsideContainer();
        }
    });

    function esconderAsideContainer() {
        if (asideContainer) {
            asideContainer.style.left = '-20vw'; // Move para fora da tela
        }
    }

    function mostrarAsideContainer() {
        if (asideContainer) {
            asideContainer.style.left = '0.4vw'; // Traga de volta para a tela
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


//Onclick
    function redirecionarParaURL(url) {
        window.location.href = url;
    }