const InfoContacto = document.createElement("main");
InfoContacto.className = "container";

InfoContacto.innerHTML = `
        <section class="intro">
            <h2>Información de Contacto</h2>
            <p>En esta página encontrarás nuestros datos de contacto, información de la empresa y un formulario para contactarnos directamente.</p>
        </section>
`;

// Agregarlo al cuerpo o a un contenedor específico
document.body.appendChild(InfoContacto);