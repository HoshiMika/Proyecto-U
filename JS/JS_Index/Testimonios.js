document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("Testimonios");

  if (!contenedor) {
    console.error("No se encontró el elemento con id='Testimonios'");
    return;
  }

  contenedor.innerHTML += `
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">Lo que Dicen Nuestros Clientes</h2>
        <div class="testimonials-grid">

          <div class="testimonial-card">
            <p class="testimonial-text">
              Excelente servicio técnico. Solucionaron todos los problemas de mi empresa de forma rápida y profesional. Muy recomendados.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">MC</div>
              <div>
                <strong>María Camila</strong>
                <p>Directora de Tecnología</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <p class="testimonial-text">
              Llevo años confiando en Soqual para el mantenimiento de todos nuestros equipos. Siempre responden rápido y con soluciones efectivas.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">JR</div>
              <div>
                <strong>Javier Rodríguez</strong>
                <p>Gerente de Sistemas</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <p class="testimonial-text">
              Instalaron las cámaras de seguridad en mi negocio y quedé muy satisfecho con la calidad y el profesionalismo del equipo.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">AC</div>
              <div>
                <strong>Ana Castillo</strong>
                <p>Propietaria de Restaurante</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
});
