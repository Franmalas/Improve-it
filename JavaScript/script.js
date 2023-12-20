document.addEventListener("DOMContentLoaded", function () {
    // Desplazamiento suave para los enlaces de la barra de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener el valor del correo electrónico ingresado
            const email = document.getElementById('email').value;

            // Aquí puedes agregar lógica para manejar el envío del formulario, por ejemplo, enviar datos a un servidor
            alert(`¡Formulario enviado!\nCorreo Electrónico: ${email}`);
        });
    }
});
