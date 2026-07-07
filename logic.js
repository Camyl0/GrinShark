// 1. DEFINIR VARIABLES y LOS ELEMENTOS DEL HTML 
// ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
// Busca todos los enlaces que están dentro de un elemento con clase "nav"
// y los guarda en una variable llamada 'enlaces'
const enlaces = document.querySelectorAll(".nav a");

// Busca todos los elementos con clase "section" (las secciones de contenido)
// y los guarda en una variable llamada 'secciones'
const secciones = document.querySelectorAll(".seccion");



// 2. CREAR EVENTOS: para  cada enlace
// ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
// Recorremos cada enlace uno por uno usando forEach
enlaces.forEach(function(enlace) {
    
    // A cada enlace le agregamos un "escuchador de eventos"
    // que reaccionará cuando el usuario haga clic (click)
    enlace.addEventListener("click", function(evento) {
        
        // prevenir el comportamiento:evitar que la pagina se recargue o vaya a otra URL
        evento.preventDefault(); 


        // 3. OBTENER ID: de la seccion desde el atributo data-section o tambien se puede usar
        // ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
        // o getAttribute("data-section")
        const idSeccion = this.dataset.section;


        // 4. OCULTAR SECCION: con la clase hidden
        secciones.forEach(function(seccion) {
            seccion.classList.add("hidden");
        });

        // 5. MOSTRAR LA SECCIÓN SELECCIONADA: quitar la clase hidden
        // const idSeccion = "home";
        const seccionMostrar = document.getElementById(idSeccion);
        
        if (seccionMostrar) {
            seccionMostrar.classList.remove("hidden");
        } else {
            console.warn("No existe la seccion con ID", idSeccion)
        }
        
    }); // Fin del evento enlace:click
    
}); // Fin del forEach