// docs/JS/ConexionPagina.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("ConexionPagina");
  if (!container) {
    console.warn("ConexionPagina: contenedor #ConexionPagina no encontrado.");
    return;
  }

  // Nota: las rutas en el HTML (src/href) se resuelven relativas al documento HTML,
  // no al archivo .js. Si tus HTML están en docs/HTML/, la ruta a las imágenes es ../Imagenes/...
  container.innerHTML = `
    <header>
      <div class="container">
        <div class="logo-container">
          <div class="logo">
            <img src="../Imagenes/Logo.png" alt="Soqual Logo" class="site-logo">
            <div>
              <h1>Soqual <span>Soluciones Tecnológicas</span></h1>
            </div>
          </div>

          <nav>
            <ul class="main-nav">
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

  // Marcar link activo según la ruta actual
  try {
    const current = location.pathname.split("/").pop(); // e.g. "Servicios.html"
    const links = container.querySelectorAll("nav a");
    links.forEach(a => {
      // normalizar: si el href es "index.html" y current es "" o "/", tratar como index.html
      const hrefFile = a.getAttribute("href");
      if (!hrefFile) return;
      if (hrefFile === current || (hrefFile === "index.html" && (current === "" || current === "index.html"))) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  } catch (err) {
    // no crítico
    console.debug("ConexionPagina: no se pudo marcar link activo", err);
  }

});