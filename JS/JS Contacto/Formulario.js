const Formulario = document.createElement("section");
Formulario.className = "contact-form";

Formulario.innerHTML = `
            <h2>Formulario de Contacto</h2>
            <p>Si deseas contactarnos, completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.</p>
            
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Nombre completo</label>
                    <input type="text" id="name" name="name" placeholder="Ingresa tu nombre completo" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" placeholder="Ingresa tu número de teléfono">
                </div>
                
                <div class="form-group">
                    <label for="subject">Asunto</label>
                    <input type="text" id="subject" name="subject" placeholder="Asunto del mensaje" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Mensaje</label>
                    <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
                </div>
                
                <button type="submit" class="btn"><i class="fas fa-paper-plane"></i> Enviar mensaje</button>
            </form>
        </section>
`;

// Agregarlo al cuerpo o a un contenedor específico
document.body.appendChild(Formulario);