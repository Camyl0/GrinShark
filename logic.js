// entender el codigo, para lograr ajustarlo con el css
// 1. SELECCIONAR ELEMENTOS DEL HTML
// ------------------------------------------------
// Busca todos los enlaces que están dentro de un elemento con clase "nav"
// y los guarda en una variable llamada 'enlaces'
const enlaces = document.querySelectorAll(".nav a");

// Busca todos los elementos con clase "section" (las secciones de contenido)
// y los guarda en una variable llamada 'secciones'
const secciones = document.querySelectorAll(".section");


// 2. AGREGAR EVENTOS A CADA ENLACE
// ------------------------------------------------
// Recorremos cada enlace uno por uno usando forEach
enlaces.forEach(function(enlace) {
    
    // A cada enlace le agregamos un "escuchador de eventos"
    // que reaccionará cuando el usuario haga clic (click)
    enlace.addEventListener("click", function(evento) {
        
        // Prevenimos el comportamiento por defecto del enlace 
        // (que es recargar la página o ir a otra URL)
        evento.preventDefault();


        // 3. OCULTAR TODAS LAS SECCIONES
        // ------------------------------------------------
        // Recorremos todas las secciones y les agregamos la clase "hidden"
        // (que seguramente tiene CSS con display: none)
        secciones.forEach(function(seccion) {
            seccion.classList.add("hidden");
        });


        // 4. MOSTRAR LA SECCIÓN SELECCIONADA
        // ------------------------------------------------
        // Obtenemos el valor del atributo personalizado "data-section"
        // que pusimos en el enlace HTML, por ejemplo: data-section="inicio"
        const idSeccion = this.dataset.section;
        
        // Buscamos el elemento HTML que tenga ese ID (por ejemplo, <div id="inicio">)
        const seccionAMostrar = document.getElementById(idSeccion);
        
        // Le quitamos la clase "hidden" a esa sección para que se vuelva visible
        seccionAMostrar.classList.remove("hidden");
        
    }); // Fin del evento click
    
}); // Fin del forEach