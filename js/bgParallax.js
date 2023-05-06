// Objeto con propiedades de Parallax 

var propParallax = {
    seccion: document.querySelector('.parallax'),
}

// objeto con Metodos de Parallax

var metParallax = {

    inicio: function() {
        window.addEventListener('scroll', metParallax.scrollParallax);
    },

    scrollParallax: function() {
    
    }

}

metParallax.inicio();