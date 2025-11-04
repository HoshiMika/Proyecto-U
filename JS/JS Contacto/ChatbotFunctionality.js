// Crear y agregar la interfaz completa del chatbot
const ChatbotFunctionality = document.createElement("div");

ChatbotFunctionality.innerHTML = `
<!-- Chatbot IA Completo -->
<div class="chatbot-ia">
    <div class="chatbot-header">
        <div class="chatbot-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="chatbot-info">
            <h4>Asistente IA Gemini</h4>
            <p>Conectado</p>
        </div>
        <button class="chatbot-close">
            <i class="fas fa-times"></i>
        </button>
    </div>
    
    <div class="chatbot-message">
        <p>¡Hola! Soy Gemini AI 🤖</p>
        <p>Estoy aquí para ayudarte con cualquier pregunta que tengas.</p>
    </div>
    
    <div class="chatbot-conversation" id="chatbotConversation">
        <!-- Los mensajes aparecerán aquí -->
    </div>
    
    <div class="chatbot-input-container">
        <input type="text" id="chatbotInput" placeholder="Escribe tu pregunta aquí..." class="chatbot-input">
        <button id="chatbotSend" class="chatbot-send">
            <i class="fas fa-paper-plane"></i>
        </button>
    </div>
    
    <div class="chatbot-status" id="chatbotStatus">
        <i class="fas fa-circle" style="color: #28a745; font-size: 8px;"></i>
        <span>Conectado a Gemini</span>
    </div>
</div>
`;

// Agregar la interfaz del chatbot al cuerpo
document.body.appendChild(ChatbotFunctionality);

// Funcionalidad del chatbot con la librería oficial de Google
document.addEventListener('DOMContentLoaded', async function() {
    // Importar la librería oficial de Google
    const { GoogleGenerativeAI } = await import("https://esm.run/@google/generative-ai");
    
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    const chatbot = document.querySelector('.chatbot-ia');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotConversation = document.getElementById('chatbotConversation');
    const chatbotStatus = document.getElementById('chatbotStatus');
    
    let conversationHistory = [];
    let genAI;
    let model;
    
    // Inicializar Gemini AI
    function initializeGemini() {
        try {
            if (typeof GEMINI_CONFIG === 'undefined' || GEMINI_CONFIG.API_KEY === 'TU_API_KEY_AQUI') {
                showStatus('⚠️ Configura tu API Key', 'warning');
                return false;
            }
            
            genAI = new GoogleGenerativeAI(GEMINI_CONFIG.API_KEY);
            model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash-exp",
                generationConfig: GEMINI_CONFIG.CONFIG.generationConfig
            });
            
            showStatus('Conectado a Gemini', 'success');
            return true;
        } catch (error) {
            console.error('Error al inicializar Gemini:', error);
            showStatus('Error de conexión', 'error');
            return false;
        }
    }
    
    // Inicializar al cargar la página
    const isInitialized = initializeGemini();
    
    // Abrir chatbot
    chatbotTrigger.addEventListener('click', function() {
        chatbot.classList.add('active');
        chatbotInput.focus();
        
        // Reintentar inicialización si falló antes
        if (!isInitialized) {
            initializeGemini();
        }
    });
    
    // Cerrar chatbot
    chatbotClose.addEventListener('click', function() {
        chatbot.classList.remove('active');
    });
    
    // Enviar mensaje al hacer clic en el botón
    chatbotSend.addEventListener('click', function() {
        sendMessage();
    });
    
    // Enviar mensaje al presionar Enter
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Función para enviar mensaje
    async function sendMessage() {
        const message = chatbotInput.value.trim();
        
        if (message === '') return;
        
        // Verificar configuración
        if (!genAI || !model) {
            if (!initializeGemini()) {
                addMessage('Por favor, configura la API Key de Gemini en el archivo GeminiConfig.js', 'ai');
                return;
            }
        }
        
        // Deshabilitar input mientras se procesa
        chatbotInput.disabled = true;
        chatbotSend.disabled = true;
        
        // Agregar mensaje del usuario
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Mostrar indicador de typing
        const typingIndicator = showTypingIndicator();
        
        try {
            // Construir el historial de conversación para el contexto
            let fullPrompt = buildConversationHistory(message);
            
            // Obtener respuesta de Gemini
            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            const aiResponse = response.text();
            
            typingIndicator.remove();
            addMessage(aiResponse, 'ai');
            showStatus('Conectado a Gemini', 'success');
            
            // Actualizar historial de conversación
            updateConversationHistory(message, aiResponse);
            
        } catch (error) {
            typingIndicator.remove();
            console.error('Error con Gemini API:', error);
            
            let errorMessage = 'Lo siento, hubo un error al procesar tu solicitud. ';
            
            if (error.message.includes('API_KEY') || error.message.includes('401')) {
                errorMessage += 'Error de autenticación. Verifica tu API Key.';
                showStatus('Error de API Key', 'error');
            } else if (error.message.includes('429')) {
                errorMessage += 'Límite de solicitudes excedido. Intenta más tarde.';
                showStatus('Límite excedido', 'warning');
            } else if (error.message.includes('BLOCKED')) {
                errorMessage += 'La solicitud fue bloqueada por políticas de seguridad.';
                showStatus('Contenido bloqueado', 'warning');
            } else {
                errorMessage += 'Por favor, intenta nuevamente.';
                showStatus('Error de servidor', 'error');
            }
            
            addMessage(errorMessage, 'ai');
        }
        
        // Rehabilitar input
        chatbotInput.disabled = false;
        chatbotSend.disabled = false;
        chatbotInput.focus();
    }
    
    // Función para construir el historial de conversación
    function buildConversationHistory(newMessage) {
        if (conversationHistory.length === 0) {
            return `Eres un asistente útil y amigable. Responde en español.\n\nUsuario: ${newMessage}`;
        }
        
        let history = "Esta es la conversación anterior:\n";
        conversationHistory.forEach(entry => {
            history += `${entry.role === 'user' ? 'Usuario' : 'Asistente'}: ${entry.content}\n`;
        });
        
        history += `\nAhora el usuario dice: ${newMessage}`;
        return history;
    }
    
    // Función para actualizar el historial
    function updateConversationHistory(userMessage, aiMessage) {
        conversationHistory.push({
            role: 'user',
            content: userMessage
        });
        
        conversationHistory.push({
            role: 'assistant',
            content: aiMessage
        });
        
        // Limitar el historial a las últimas 6 interacciones
        if (conversationHistory.length > 12) {
            conversationHistory = conversationHistory.slice(-12);
        }
    }
    
    // Función para agregar mensaje al chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        // Formatear texto con saltos de línea
        const formattedText = text.replace(/\n/g, '<br>');
        messageContent.innerHTML = formattedText;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = getCurrentTime();
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        chatbotConversation.appendChild(messageDiv);
        
        // Scroll al final
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
    }
    
    // Función para mostrar indicador de typing
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>Gemini está pensando...</p>
        `;
        chatbotConversation.appendChild(typingIndicator);
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
        return typingIndicator;
    }
    
    // Función para mostrar estado de conexión
    function showStatus(message, type) {
        const colors = {
            success: '#28a745',
            warning: '#ffc107',
            error: '#dc3545'
        };
        
        const icons = {
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-exclamation-circle'
        };
        
        chatbotStatus.innerHTML = `
            <i class="fas ${icons[type]}" style="color: ${colors[type]}; font-size: 12px;"></i>
            <span>${message}</span>
        `;
    }
    
    // Función para obtener hora actual
    function getCurrentTime() {
        const now = new Date();
        return now.getHours().toString().padStart(2, '0') + ':' + 
               now.getMinutes().toString().padStart(2, '0');
    }
    
    // Cerrar al hacer clic fuera del chatbot
    document.addEventListener('click', function(event) {
        if (chatbot.classList.contains('active') && 
            !chatbot.contains(event.target) && 
            !chatbotTrigger.contains(event.target)) {
            chatbot.classList.remove('active');
        }
    });
});