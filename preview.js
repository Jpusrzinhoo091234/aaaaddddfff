// Elementos do Modal
const previewModal = document.getElementById('previewModal');
const previewEmoji = document.querySelector('.preview-emoji');
const previewTitle = document.querySelector('.preview-title');
const previewOldPrice = document.querySelector('.preview-old-price');
const previewPrice = document.querySelector('.preview-price');
const previewStock = document.querySelector('.preview-stock');
const previewDescription = document.querySelector('.preview-description');
const previewBenefitsList = document.querySelector('.preview-benefits-list');
const previewAddBtn = document.querySelector('.preview-add-btn');

let currentProductId = null;

// Abrir modal de preview
export function openPreviewModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    
    // Preencher dados do produto
    previewEmoji.textContent = product.emoji;
    previewTitle.textContent = product.name;
    
    // Preços
    if (product.oldPrice) {
        previewOldPrice.textContent = `R$ ${product.oldPrice.toFixed(2)}`;
        previewOldPrice.style.display = 'block';
    } else {
        previewOldPrice.style.display = 'none';
    }
    previewPrice.textContent = `R$ ${product.price.toFixed(2)}`;
    
    // Estoque
    const stockClass = product.stock < 5 ? 'low-stock' : '';
    previewStock.className = `preview-stock ${stockClass}`;
    previewStock.textContent = product.stock > 0 
        ? `✅ ${product.stock} em estoque` 
        : '❌ Fora de estoque';
    
    // Descrição
    previewDescription.textContent = product.description;
    
    // Benefícios
    previewBenefitsList.innerHTML = '';
    product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = `✨ ${benefit}`;
        previewBenefitsList.appendChild(li);
    });
    
    // Botão de adicionar
    previewAddBtn.disabled = product.stock === 0;
    previewAddBtn.onclick = () => {
        addToCart(product.id);
        closePreviewModal();
    };
    
    // Mostrar modal
    previewModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fechar modal de preview
export function closePreviewModal() {
    previewModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProductId = null;
}

// Fechar modal ao clicar fora
previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) {
        closePreviewModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && previewModal.style.display === 'flex') {
        closePreviewModal();
    }
});

// Make closePreviewModal available globally
window.closePreviewModal = closePreviewModal;
