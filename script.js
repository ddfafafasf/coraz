document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.getElementById('heartContainer');
    const letter = document.getElementById('letter');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const closedLetter = document.getElementById('closedLetter');
    const openedLetter = document.getElementById('openedLetter');
    
    // Mostrar carta ao clicar no coração principal
    heartContainer.addEventListener('click', function() {
        openLetter();
    });
    
    // Abrir carta
    openBtn.addEventListener('click', function() {
        closedLetter.classList.remove('active');
        openedLetter.classList.add('active');
    });
    
    // Fechar carta (botão dentro da carta)
    closeBtn.addEventListener('click', closeLetter);
    
    // Fechar carta (botão X no cabeçalho)
    closeLetterBtn.addEventListener('click', closeLetter);
    
    // Função para abrir a carta
    function openLetter() {
        letter.style.display = 'block';
        setTimeout(() => {
            letter.classList.add('show');
            closedLetter.classList.add('active');
        }, 10);
    }
    
    // Função para fechar a carta
    function closeLetter() {
        letter.classList.remove('show');
        openedLetter.classList.remove('active');
        closedLetter.classList.remove('active');
        
        // Resetar após a animação terminar
        setTimeout(() => {
            letter.style.display = 'none';
        }, 500);
    }
    
    // Adicionar mais camadas de sombra para efeito melhorado
    for (let i = 0; i < 3; i++) {
        const shadow = document.createElement('div');
        shadow.className = 'heart-shadow';
        shadow.style.animationDelay = `${i * 0.2}s`;
        shadow.style.opacity = 0.3 - (i * 0.1);
        heartContainer.appendChild(shadow);
    }
});