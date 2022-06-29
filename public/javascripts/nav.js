var toggle = document.getElementById('menuToggle');
var nav = document.getElementsByTagName('nav')[0];
/*los dos primeros renglones como yo llamo a esos elementos por un lado por el id en el otro por la etiqueta,  */


/*event, es un evento que sucede, en este caso estoy llamando al elemento y le digo que se abra*/
document.addEventListener('click', function(e) {
    var navClicked = nav.contains(e.target);
    if (!navClicked) { /*if es una condicion para tomar una decision, por ej si una orden se cumple o no*//*por ej si la condicion tiene cierto valor queremos que se ejecute lo siguiente*/ /*y si no queremos que se cumplan estas otras condiciones*/
        nav.classList.remove('abierto');
    }
});

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle('abierto');
});


/*variales de JS, estudiar*/
/*ver codigos de JS*/