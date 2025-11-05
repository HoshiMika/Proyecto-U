document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("DatosContacto");

  if (!contenedor) {
    console.error("No se encontró el elemento con id='DatosContacto'");
    return;
  }

  contenedor.innerHTML += `
    <footer>
      <div class="container">
        <div class="footer-content">
          
          <div class="footer-section">
            <h3>Soqual ST</h3>
            <p>Soluciones Tecnológicas integrales para hogares y empresas en Colombia.</p>
            <div class="social-links">
              <a href="https://www.facebook.com/Soqualst" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/message/5BKFE4JXYKZRD1" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/juan-david-bayona/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Contacto</h3>
            <p><i class="fas fa-phone"></i> Tel: 320-407-3004</p>
            <p><i class="fas fa-envelope"></i> Email: soqualst@gmail.com</p>
            <p><i class="fas fa-map-marker-alt"></i> Dirección: Calle 6B #6A-66, Soacha</p>
          </div>

          <div class="footer-section">
            <h3>Horario de Atención</h3>
            <p><i class="fas fa-clock"></i> Lunes a Viernes: 7:00 AM - 5:00 PM</p>
            <p><i class="fas fa-clock"></i> Sábados: 9:00 AM - 2:00 PM</p>
            <p><i class="fas fa-exclamation-circle"></i> Emergencias técnicas: 24/7</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Soqual Soluciones Tecnológicas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
});
