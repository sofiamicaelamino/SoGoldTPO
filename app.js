const formulario = document.getElementById('formulario');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const mail = document.getElementById('mail');
const consulta = document.getElementById('consulta');

const alertaNombre  = document.getElementById('alertaNombre')
const alertaApellido  = document.getElementById('alertaApellido')
const alertaMail  = document.getElementById('alertaMail')
const alertaEnviada  = document.getElementById('alertaEnviada')

const regnombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regapellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertaEnviada.removeAttribute("hidden");
    alertaEnviada.textContent = "Consulta enviada con éxito!";

};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.removeAttribute("hidden");
        item.tipo.textContent = item.msg;
    });
};


formulario.addEventListener('submit', e => {
    e.preventDefault();

const errores = []

if (!regnombre.test(nombre.value) || !nombre.value.trim()) {
    nombre.classList.add("is-invalid");

    errores.push({
        tipo: alertaNombre,
        msg: "Escribí un nombre válido",
    });
} else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    alertaNombre.classList.add("d-none");
}

if (!regapellido.test(apellido.value) || !apellido.value.trim()) {
    apellido.classList.add("is-invalid");

    errores.push({
        tipo: alertaApellido,
        msg: "Escribí un apellido válido",
    });
} else {
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");
    alertaApellido.classList.add("d-none");
}

if (!regmail.test(mail.value) || !mail.value.trim()) {
    mail.classList.add("is-invalid");

    errores.push({
        tipo: alertaMail,
        msg: "Escribí un correo válido",
    });
} else {
    mail.classList.remove("is-invalid");
    mail.classList.add("is-valid");
    alertaMail.classList.add("d-none");
}

if (errores.length !== 0) {
    pintarMensajeError(errores);
    return;
}

console.log("Formulario enviado con éxito");
pintarMensajeExito();
});