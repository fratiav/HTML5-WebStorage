//API WEB STORAGE: 
    //sessionStorage (Almacenamiento temporal, solo durante sesión de ventana activa) --> Es como una cookie, pero una cookie se mantiene durante toda la vida del navegador y no de la pestaña
    //localStorage (Almacenamiento permanente en local, se guarda aun cerrando el navegador, pero tiene espacio limitado aunque modificable)

    //Metodo setItem --> Guardar informacion
    //Metodo getItem --> Recuperar informacion
    //Metodo removeItem --> Borrar item
    //Metodo clear --> Borrar todos los items
    //Los items tienen clave/valor

window.addEventListener("load",start,false);

function start(){
    var botonDatos = document.getElementById("enviar");
    var botonLimpiar = document.getElementById("limpiar");

    botonDatos.addEventListener("click",itemNuevo,false);
    botonLimpiar.addEventListener("click",limpiarDatos,false);

    var zonaDatos = document.getElementById("zonaLectura");
    zonaDatos.innerHTML="Datos almacenados: "+localStorage.length;
}

function itemNuevo(){
    var nombreClave = document.getElementById("name").value;
    var telefonoValor = document.getElementById("tel").value;

    //Guardamos el item donde nombre es la clave y el telefono es el valor
    localStorage.setItem(nombreClave,telefonoValor);  //sessionStorage[nombreClave]=telefonoValor;  es lo mismo

    //Funcion para leer los datos del item
    leerMostrar(nombreClave);
}

function leerMostrar(nombreClave){

    var zonaDatos = document.getElementById("zonaLectura");

    var claveValor = localStorage.getItem(nombreClave);

    var stringDatos = "<p>Clave: "+ nombreClave + " - Valor: " + claveValor +"</p>";

        //DOS FORMAS DE AÑADIR DATOS
    /*
    var linea = document.createElement("div");
    linea.textContent = stringDatos;

    zonaDatos.appendChild(linea);
    */

    zonaDatos.innerHTML+=stringDatos;
}

function limpiarDatos(){
    //Elimina todos los items
    localStorage.clear();

    var zonaDatos = document.getElementById("zonaLectura");
    zonaDatos.innerHTML="Datos almacenados: "+localStorage.length; //Con localStorage.length se pueden obtener el numero de items almacenados [array]
}