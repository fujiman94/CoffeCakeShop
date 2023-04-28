//Objeto con las propiedades del efecto LightBox
var propLightbox = {

    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null
}

//Objeto con los Metodos del efecto lightBox
var metLightbox = {
    inicio: function() {
        for (var i = 0; propLightbox.imgContainer.length; i++) {

            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },
    
    captureImagen: function(){
        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
    }
}

metLightbox.inicio();