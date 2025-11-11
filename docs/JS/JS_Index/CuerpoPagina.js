// docs/JS/CuerpoPagina.js
document.addEventListener("DOMContentLoaded", () => {
  const cont = document.getElementById("CuerpoPagina");
  if (!cont) {
    console.warn("CuerpoPagina: contenedor #CuerpoPagina no encontrado.");
    return;
  }

  // Detectar "profundidad" de la página para resolver rutas relativas.
  // Si el HTML está en docs/HTML/ => location.pathname incluye '/HTML/'.
  // Si el HTML está en docs/ (root) => no incluirá '/HTML/'.
  const path = location.pathname || "";
  // normalizar: tomar sólo la parte final útil (sin host)
  // Ejemplo de path: /Proyecto-U/docs/HTML/index.html  o /index.html (dependiendo de Live Server)
  // Buscamos si 'HTML/' está en el path para decidir si debemos subir un nivel.
  const needUp = path.includes("/HTML/") || path.match(/\/HTML(\/|$)/);
  const base = needUp ? ".." : ".";

  // Si tus archivos de imagen tienen espacios (ej: "Logo Nuevo.png") es mejor renombrarlos
  // a "Logo-Nuevo.png" o "LogoNuevo.png" para evitar problemas en URLs.
  // Ejemplos de imagenes: Soporte.avif, SoporteAplicaciones.avif, Desarrollo.avif, CCTV.avif
  cont.innerHTML = `
    <section class="hero">
      <div class="container hero-content">
        <img src="${base}/Imagenes/Logo%20Nuevo.png" alt="Logo SOQUAL" class="hero-logo" onerror="this.onerror=null;this.src='${base}/Imagenes/Logo.png'">
        <div class="hero-text">
          <h2>Soporte Técnico Especializado en Tecnología</h2>
          <p>Soluciones integrales para computadores, aplicaciones, páginas web y sistemas de seguridad</p>
        </div>
      </div>
    </section>

    <section class="servicios-preview container">
      <img src="${base}/Imagenes/Soporte.avif" alt="Soporte" onerror="this.style.display='none'">
      <img src="${base}/Imagenes/SoporteAplicaciones.avif" alt="Soporte Aplicaciones" onerror="this.style.display='none'">
      <img src="${base}/Imagenes/Desarrollo.avif" alt="Desarrollo" onerror="this.style.display='none'">
      <img src="${base}/Imagenes/CCTV.avif" alt="CCTV" onerror="this.style.display='none'">
    </section>
  `;
});
