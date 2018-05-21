// Inicio de la configuración de diapositivas.

	// Declaración de variables.
    var Fotos; // Lugar donde se almacenara la ruta de la imagen.
    var V_max; // Longitud máxima del vector "Fotos".
    var aux;   // Auxiliar para configuración.
    var aux_2; // Auxiliar para programación.
    var contador = 0;

// Inicio de variables.
    Fotos = new Array(); // Crea el vector para las fotos.
    aux_2 = 0; // Inicia la variable auxiliar de programación con valor 0.

// Rutas de imagenes.
    Fotos [0] = "img/ejercicios/ejercicio1.gif" /* Aqui pones la ruta del enlace a la imagen */ /*PD: eta primera imagen se debe repetir en el HTML*/
    Fotos [1] = "img/ejercicios/ejercicio2.gif" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [2] = "img/ejercicios/ejercicio3.gif" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [3] = "img/ejercicios/ejercicio4.gif" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [4] = "img/ejercicios/ejercicio5.gif" /* Aqui pones la ruta del enlace a la imagen */

    /* Para añadir nuevas imagenes simplemente adicionas "Fotos[] = "ruta imagen" */

    V_max = Fotos.length; // Obtiene la longitud del vector.
    V_max = V_max-1; // Diminuye uno su valor dado que V_max coge un valor a más.

    /* Lógica para saltos barra de progreso */
    var salto_progreso = 100/V_max; // 100% divido entre cantidad de ejercicios da como total el salto.
    var progreso = 0;

// Fin de la configuración de diapositivas.

// Inicio de la programación de diapositivas.

// Pasar a la siguiente imagen.
    function siguiente () {
        
        if (aux_2 == V_max ) {
            //Lógica para continuar en círculo
            //aux_2 = 0;
            
            //Lógica para terminar rutina. (Desactivo el boton siguiente)
			document.getElementById("tiempo_ejercicio").innerHTML = 'Tu rutina ha finalizado.';
			document.getElementById("temporizador").hidden = true;
			document.getElementById("Diapositiva").hidden = true;
			document.getElementById("boton_2").hidden = true;    
            document.getElementById("terminar_rutina").style.visibility = "visible";
        }

        else{

            aux_2 = aux_2+1;

        }
        
        document.getElementById("boton_2").disabled = true;
        progreso = progreso + salto_progreso;
        $('.progress-bar').css('width', progreso+'%').attr('aria-valuenow', progreso); 
        contador = 0;
        document.getElementById("reloj").innerHTML = ' '+contador+' segundos.';
        document.images.Diapositiva.src = Fotos[aux_2];
    }

// Pasar a la siguiente imagen.
    function anterior () {
        
        if (aux_2 == 0){
        
            aux_2 = V_max;
        
        }

        else{

            aux_2 = aux_2-1;

        }

        document.images.Diapositiva.src = Fotos[aux_2];
    }
// Fin de la programación de diapositivas.



function activarSiguiente()
{
    var tiempoEjercicio = 5; //Segundos inhabilitado el boton siguiente.
    if(contador == tiempoEjercicio) 
    {
        document.getElementById("boton_2").disabled = false;
    }
}

function muestraReloj() {
    contador = contador + 1; 
    document.getElementById("reloj").innerHTML = ' '+contador+' segundos.';
    activarSiguiente();
}

function iniciarRutina() {
    document.getElementById("btn_inicio").style.visibility = "hidden";
    document.getElementById("bloque_rutina").style.visibility = "visible";
    document.getElementById("terminar_rutina").style.visibility = "hidden";
    setInterval(muestraReloj, 1000);
}

window.onload = function() {
    document.getElementById("bloque_rutina").style.visibility = "hidden";
}

