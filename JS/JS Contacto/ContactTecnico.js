const ContactTecnico = document.createElement("div");
ContactTecnico.className = "info-grid";

ContactTecnico.innerHTML = `
            <div class="contact-card">
                <div class="profile-img">
                    <i class="fas fa-user-tie"></i>
                </div>
                <h3>Juan David Bayona</h3>
                <p>Especialista en Soporte Técnico</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div>
                            <p><strong>Teléfono:</strong></p>
                            <p>+57 302 802 5970</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <p><strong>Email:</strong></p>
                            <p>jdbayona@ucompensar.edu.co</p>
                            <p>Soqualst@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-card">
                <div class="profile-img">
                    <i class="fas fa-building"></i>
                </div>
                <h3>Soqual ST</h3>
                <p>Soluciones Tecnológicas</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <p><strong>Ubicación:</strong></p>
                            <p>Bogotá, Colombia</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div>
                            <p><strong>Horario:</strong></p>
                            <p>Lun-Vie: 8:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

// Agregarlo al cuerpo o a un contenedor específico
document.body.appendChild(ContactTecnico);