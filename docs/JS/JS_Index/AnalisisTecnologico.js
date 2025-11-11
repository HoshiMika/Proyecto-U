document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("AnalisisTecnologico");

  if (!contenedor) {
    console.error("No se encontró el elemento con id='CuerpoPagina'");
    return;
  }

  contenedor.innerHTML += `
    <section class="analysis">
      <div class="container">
        <h2 class="section-title">Análisis Tecnológico</h2>
        <div class="analysis-content">
          <p>Según analistas del sector, la demanda de servicios de soporte técnico especializado ha crecido un 40% en el último año, con un aumento significativo en requerimientos de seguridad informática y transformación digital para pequeñas y medianas empresas.</p>
          <p>Soqual ST se posiciona como una de las empresas con mayor crecimiento en el sector, gracias a su enfoque en soluciones personalizadas y respuesta inmediata a emergencias tecnológicas.</p>
        </div>
      </div>
    </section>
  `;
});
