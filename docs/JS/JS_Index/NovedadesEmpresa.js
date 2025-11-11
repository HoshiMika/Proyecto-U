document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("NovedadesEmpresa");

  if (!contenedor) {
    console.error("No se encontró el elemento con id='CuerpoPagina'");
    return;
  }

  contenedor.innerHTML = `
    <section class="news">
      <div class="container">
        <h2 class="section-title">Novedades Tecnológicas</h2>

        <table class="news-table">
          <thead>
            <tr>
              <th>Título de la noticia</th>
              <th>Fecha</th>
              <th>Fuente</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Soqual ST anuncia el lanzamiento de su nueva página web para ampliar su alcance y garantizar mayor confidencialidad</td>
              <td>30/10/2025</td>
              <td>Soqual ST Blog</td>
            </tr>
            <tr>
              <td>Soqual ST anuncia nueva línea de soporte técnico remoto 24/7</td>
              <td>06/09/2025</td>
              <td>Soqual ST Blog</td>
            </tr>
            <tr>
              <td>Nuevas medidas de ciberseguridad para empresas Colombianas</td>
              <td>05/09/2025</td>
              <td>El Tiempo Tecnología</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
});
