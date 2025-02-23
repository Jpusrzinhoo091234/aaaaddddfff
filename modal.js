import { productModalTemplate } from './templates.js';

// Abre o modal de pré-visualização
export function openPreviewModal(product) {
    const modal = document.getElementById('previewModal');
    if (!modal) return;

    const previewBody = document.getElementById('previewBody');
    
    modal.classList.add('active');
    previewBody.innerHTML = productModalTemplate(product);
    
    setupModalEvents(modal);
}

// Configura eventos do modal
function setupModalEvents(modal) {
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
}

// Fecha o modal
export function closeModal(modal) {
    modal.classList.remove('active');
}
