const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_seccion");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-izq");
const btnRight = document.querySelector("#btn-der");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Siguiente() {
    let sliderSectionFirst = document.querySelectorAll(".slider_seccion")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Anterior() {
    let sliderSection = document.querySelectorAll(".slider_seccion");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function () {
    Siguiente();
});

btnLeft.addEventListener('click', function () {
    Anterior();
});

setInterval(function () {
    Siguiente();
}, 10000); //avanza cada 10 seg

function validar() {
    var nombreCompleto = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value;
    expresionNombre= /^(?!.* (?: |$))[A-Z][a-z ]+$/;
    expresionCorreo = /\w+@\w+\.+[a-z]/;

    if (nombreCompleto === "" || correo === "" || telefono === "" || comentario === "") {
        alert("Debe completar todo los campos");
        return false;
    }
    else if(!expresionNombre.test(nombreCompleto)) {
        alert("El nombre ingresado no es valido");
        return false;
    }
    else if (nombreCompleto.length < 3) {
        alert("el nombre es muy corto");
        return false;
    }
    else if (nombreCompleto.length > 30) {
        alert("el nombre es muy largo");
        return false;
    }
    else if (!expresionCorreo.test(correo)) {
        alert("El correo ingresado no es valido");
        return false;
    }
    else if (isNaN(telefono)) {
        alert("El telefono ingresado no es un numero");
    }
    else if (telefono.length < 10) {
        alert("el telefono es muy corto");
    }
    else if (telefono.length > 10) {
        alert("el telefono es muy largo");
    }
    
    return true;
}

function confirmarEnvio() {
    if(validar()) {
        if(confirm("¿Esta seguro que desea enviar?")) {
            alert("El formulario ha sido enviado, muchas gracias por tu tiempo.")
        }
    }
}