document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("ServiciosOfrecidos");

  if (!contenedor) {
    console.error("No se encontró el elemento con id='CuerpoPagina'");
    return;
  }

  contenedor.innerHTML = `
    <section class="services">
      <div class="container">
        <h2 class="section-title">Nuestros Servicios</h2>
        <div class="services-grid">

          <div class="service-card">
            <div class="service-img">
              <img src="./Imagenes/Soporte.avif" alt="Soporte en Computadores">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <i class="fas fa-laptop"></i>
              </div>
              <h3>Soporte en Computadores</h3>
              <p>Reparación, mantenimiento y optimización de equipos de cómputo para hogares y empresas.</p>
            </div>
          </div>

          <div class="service-card">
            <div class="service-img">
              <img src="./Imagenes/SoporteAplicaciones.avif" alt="Soporte en Aplicaciones">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>Soporte en Aplicaciones</h3>
              <p>Instalación, configuración y resolución de problemas en software y aplicaciones especializadas.</p>
            </div>
          </div>

          <div class="service-card">
            <div class="service-img">
              <img src="./Imagenes/Desarrollo.avif" alt="Desarrollo Web">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3>Desarrollo Web</h3>
              <p>Diseño y desarrollo de páginas web modernas, responsivas y optimizadas para SEO.</p>
            </div>
          </div>

          <div class="service-card">
            <div class="service-img">
              <img src="./Imagenes/CCTV.avif" alt="Cámaras de Seguridad">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <i class="fas fa-video"></i>
              </div>
              <h3>Cámaras de Seguridad</h3>
              <p>Instalación y configuración de sistemas de videovigilancia para hogares y empresas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
});
