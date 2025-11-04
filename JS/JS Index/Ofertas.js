document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("Ofertas");

  if (!contenedor) {
    console.error("No se encontró el elemento con id='CuerpoPagina'");
    return;
  }

  contenedor.innerHTML = `
    <section class="countdown">
      <div class="container countdown-content">
        <h2>Oferta Especial por Tiempo Limitado</h2>
        <p>Mantenimiento preventivo para computadores con 30% de descuento</p>
        <div class="timer">Faltan 15 días para el fin de la promoción</div>
      </div>
    </section>
  `;
});
