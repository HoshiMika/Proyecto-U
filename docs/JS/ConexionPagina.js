document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ConexionPagina").innerHTML = `
    <header>
        <div class="container">
            <div class="logo-container">
                <div class="logo">
                    <img src="/Imagenes/Logo.png" alt="Soqual Logo">
                    <div>
                        <h1>Soqual <span>Soluciones Tecnológicas</span></h1>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html"><i class="fas fa-home"></i> Inicio</a></li>
                        <li><a href="Servicios.html"><i class="fas fa-cogs"></i> Servicios</a></li>
                        <li><a href="Nosotros.html"><i class="fas fa-users"></i> Nosotros</a></li>
                        <li><a href="Contacto.html"><i class="fas fa-phone"></i> Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  `;
});
