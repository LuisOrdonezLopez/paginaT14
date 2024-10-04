//-----------------------------------------------------------
// ScrollReveal - Animación de desplazamiento
function animacion (){
    const sr = ScrollReveal({
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: false
    
    });
    
    sr.reveal(".ods-text", { delay: 250 });
    sr.reveal(".buttom-ods", { delay: 250 });
    sr.reveal(".info-section", { delay: 250 });
    sr.reveal(".timeline", { delay: 250 });
    sr.reveal(".timeline2", { delay: 250 });

}
animacion();


//-----------------------------------------------------------

// ScrollReveal - Animación de desplazamiento
function pagina(){

    document.querySelector('.buttom-ods button').addEventListener('click', function() {
        window.location.href = 'https://www.un.org/sustainabledevelopment/es/';
    });

}