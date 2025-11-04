const FormacionAcademica = document.createElement("section");
FormacionAcademica.className = "academic-info";

FormacionAcademica.innerHTML = `
            <h3><i class="fas fa-graduation-cap"></i> Formación Académica</h3>
            <p><strong>Programa:</strong> Ingeniería de Software - Fundación Universitaria Compensar</p>
            <p><strong>Curso Actual:</strong> Introducción a los Lenguajes de Internet - Desarrollo de aplicaciones web</p>
        </section>
`;

// Agregarlo al cuerpo o a un contenedor específico
document.body.appendChild(FormacionAcademica);