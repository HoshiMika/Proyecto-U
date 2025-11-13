// Crear elemento section para el formulario
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
    
    <div id="messageContainer"></div>
`;

    // Agregar el formulario al cuerpo
    document.body.appendChild(Formulario);

    // Función para manejar el envío del formulario
    function initFormHandler() {
        const contactForm = document.getElementById('contactForm');
        const messageContainer = document.getElementById('messageContainer');
    
    // URL de tu API PostgREST
    const API_URL = 'https://formspree.io/f/mjkjkzoa';
    
        // Función para enviar datos a Formspree
    async function enviarDatos(datos) {
    try {
        const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
        });

        if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al enviar datos:', error);
        throw error;
    }
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Mostrar estado de carga
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Obtener datos del formulario
        const formData = {
            nombre: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefono: document.getElementById('phone').value.trim(),
            asunto: document.getElementById('subject').value.trim(),
            mensaje: document.getElementById('message').value.trim()
        };
        
        try {
            // Validar campos requeridos
            if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
                throw new Error('Por favor, completa todos los campos requeridos');
            }
            
            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Por favor, ingresa un email válido');
            }
            
            // Enviar datos a la API
            const resultado = await enviarDatos(formData);
            
            // Si llegamos aquí, la petición fue exitosa
            showMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
            contactForm.reset();
            
            console.log('Datos enviados exitosamente:', resultado);
            
        } catch (error) {
            console.error('Error al procesar el formulario:', error);
            
            // Mensajes de error más específicos
            let mensajeError = error.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
            
            if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
                mensajeError = 'Error de conexión con el servidor. Verifica que el servidor esté ejecutándose y configurado correctamente.';
            } else if (error.message.includes('Error del servidor')) {
                mensajeError = `Error del servidor: ${error.message}. Contacta al administrador.`;
            }
            
            showMessage(mensajeError, 'error');
        } finally {
            // Restaurar botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
    
    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = `message ${type}`;
        messageContainer.style.display = 'block';
        messageContainer.style.padding = '10px';
        messageContainer.style.margin = '10px 0';
        messageContainer.style.borderRadius = '5px';
        messageContainer.style.fontWeight = 'bold';
        
        if (type === 'success') {
            messageContainer.style.backgroundColor = '#d4edda';
            messageContainer.style.color = '#155724';
            messageContainer.style.border = '1px solid #c3e6cb';
        } else {
            messageContainer.style.backgroundColor = '#f8d7da';
            messageContainer.style.color = '#721c24';
            messageContainer.style.border = '1px solid #f5c6cb';
        }
        
        // Ocultar mensaje después de 5 segundos (solo para éxito)
        if (type === 'success') {
            setTimeout(() => {
                messageContainer.style.display = 'none';
            }, 5000);
        }
    }
    
    // Validación en tiempo real
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remover estilo de error cuando el usuario empiece a escribir
            if (this.value.trim()) {
                this.style.borderColor = '';
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        
        if (field.hasAttribute('required') && !value) {
            field.style.borderColor = '#e53e3e';
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.style.borderColor = '#e53e3e';
                return false;
            }
        }
        
        field.style.borderColor = '#38a169';
        return true;
    }
}

// Inicializar el manejador del formulario cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormHandler);
} else {
    initFormHandler();
}

// Agregar Font Awesome si no está presente
if (!document.querySelector('link[href*="font-awesome"]')) {
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(faLink);
}

// Agregar estilos básicos para el formulario
const styles = `
    .contact-form {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    
    .form-group {
        margin-bottom: 15px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    }
    
    .form-group textarea {
        height: 100px;
        resize: vertical;
    }
    
    .btn {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }
    
    .btn:hover {
        background-color: #0056b3;
    }
    
    .btn:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
    
    .btn.loading {
        opacity: 0.7;
    }
    
    .fa-spinner {
        margin-right: 5px;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);