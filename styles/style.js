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

//Modo escuro
function alternarModoNoturno() {
    var modoNoturnoAtivo = document.body.classList.toggle('modo-noturno');

    atualizarVariaveisCSS(modoNoturnoAtivo);
}

function atualizarVariaveisCSS(modoNoturnoAtivo) {
    var root = document.documentElement;

    if (modoNoturnoAtivo) {
        // Modo noturno ativado, atualize as variáveis para as cores escuras
        root.style.setProperty('--color-a', '#353535');
        root.style.setProperty('--color-b', '#111111');
        root.style.setProperty('--color-c', '#dee2e6');
        root.style.setProperty('--color-d', '#fafafa');
        root.style.setProperty('--color-e', '#141414');
        root.style.setProperty('--color-f', '#ffffff');
        root.style.setProperty('--color-g', '#204766');
        root.style.setProperty('--color-h', '#336792');
        root.style.setProperty('--color-i', '#353535');

        // Adicione a classe modo-noturno aos elementos com ícones SVG
        document.querySelectorAll('.aside-container-icons a svg').forEach(function (icon) {
            icon.classList.add('modo-noturno');
        });
        document.querySelectorAll('.contato-container-icones a svg').forEach(function (icon) {
            icon.classList.add('modo-noturno');
        });
    } else {
        // Modo noturno desativado, volte às cores originais
        root.style.setProperty('--color-a', '#dee2e6');
        root.style.setProperty('--color-b', '#fafafa');
        root.style.setProperty('--color-c', '#353535');
        root.style.setProperty('--color-d', '#141414');
        root.style.setProperty('--color-e', '#ffffff');
        root.style.setProperty('--color-f', '#152e42');
        root.style.setProperty('--color-g', '#204766');
        root.style.setProperty('--color-h', '#336792');
        root.style.setProperty('--color-i', '#ffffff');

        // Remova a classe modo-noturno dos elementos com ícones SVG
        document.querySelectorAll('.aside-container-icons a svg').forEach(function (icon) {
            icon.classList.remove('modo-noturno');
        });
        document.querySelectorAll('.contato-container-icones a svg').forEach(function (icon) {
            icon.classList.add('modo-noturno');
        });
        document.querySelectorAll('.sobre-container-item-icon svg').forEach(function (icon) {
            icon.classList.add('modo-noturno');
        });
        

    }
}

//Navegação mobile
    var sectionOrder = ["inicio", "projetos", "projetoB", "projetoC", "sobre", "contato"];
    var currentSectionIndex = 0;

  function goToNextSection() {
    var nextSectionId = sectionOrder[currentSectionIndex];

    var nextSection = document.getElementById(nextSectionId);

    nextSection.scrollIntoView({ behavior: 'smooth' });

    currentSectionIndex = (currentSectionIndex + 1) % sectionOrder.length;
    
     var iconeMobile = document.querySelector('.aside-mobile-nav');
        if (currentSectionIndex === 0) {
        iconeMobile.style.transform = 'rotate(180deg)';
        } else {
        iconeMobile.style.transform = 'rotate(0deg)';
        }
    }
