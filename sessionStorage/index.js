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

    botonDatos.addEventListener("click",itemNuevo,false);
}

function itemNuevo(){
    var nombreClave = document.getElementById("name").value;
    var telefonoValor = document.getElementById("tel").value;

    //Guardamos el item donde nombre es la clave y el telefono es el valor
    sessionStorage.setItem(nombreClave,telefonoValor);  //sessionStorage[nombreClave]=telefonoValor;  es lo mismo

    //Funcion para leer los datos del item
    leerMostrar(nombreClave);
}

function leerMostrar(nombreClave){

    var zonaDatos = document.getElementById("zonaLectura");

    var claveValor = sessionStorage.getItem(nombreClave);

    var stringDatos = "Clave: "+ nombreClave + " - Valor: " + claveValor;

    var linea = document.createElement("div");
    linea.textContent = stringDatos;

    zonaDatos.appendChild(linea);
}