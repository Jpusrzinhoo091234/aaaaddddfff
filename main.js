import { renderCategories } from './categories.js';
import { renderProducts, searchProducts, products } from './products.js';

// Adicionar variável para armazenar itens do carrinho
let cartItems = [];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza categorias e produtos
    renderCategories();
    renderProducts('netflix'); // Iniciar com categoria Netflix
    
    // Event Listeners
    setupEventListeners();
    updateCartUI(); // Inicializar UI do carrinho
});

function setupEventListeners() {
    // Filtro de categorias
    document.getElementById('categories').addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            // Remove active class de todos os botões
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Adiciona active class ao botão clicado
            e.target.classList.add('active');
            
            // Filtra os produtos
            renderProducts(e.target.dataset.category);
        }
    });
    
    // Busca de produtos
    const searchInput = document.getElementById('search');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        // Debounce para a busca
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProducts(e.target.value);
        }, 300);
    });
    
    // Fechar modal de pré-visualização
    document.getElementById('closePreviewModal').addEventListener('click', () => {
        document.getElementById('previewModal').classList.remove('active');
    });
    
    // Fechar modal ao clicar fora
    document.getElementById('previewModal').addEventListener('click', (e) => {
        if (e.target.id === 'previewModal') {
            e.target.classList.remove('active');
        }
    });

    // Adicionar feedback visual ao clicar nos botões
    document.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 100);
        }
    });

    // Eventos do carrinho
    document.addEventListener('click', (e) => {
        // Adicionar ao carrinho
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const productId = e.target.dataset.productId;
            const quantity = getQuantityFromModal() || 1;
            addToCart(productId, quantity);
        }

        // Remover do carrinho
        if (e.target.classList.contains('remove-item')) {
            const productId = e.target.dataset.id;
            removeFromCart(productId);
        }
    });

    // Toggle do carrinho
    document.getElementById('cartIcon').addEventListener('click', () => {
        document.getElementById('cartModal').classList.toggle('active');
    });

    // Fechar carrinho
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('active');
    });

    // Checkout options
    document.getElementById('checkoutWhatsApp').addEventListener('click', () => checkoutWhatsApp(false));
    document.getElementById('checkoutPix').addEventListener('click', openPixModal);
    document.getElementById('confirmPayment').addEventListener('click', () => checkoutWhatsApp(true));
    document.getElementById('closePixModal').addEventListener('click', closePixModal);
    
    // Copiar chave PIX
    document.getElementById('copyPixKey').addEventListener('click', copyPixKey);
}

// Função para pegar quantidade do modal
function getQuantityFromModal() {
    const quantityElement = document.querySelector('.quantity-value');
    return quantityElement ? parseInt(quantityElement.textContent) : 1;
}

// Função para adicionar ao carrinho
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ ...product, quantity });
    }

    updateCartUI();
    showToast('Produto adicionado ao carrinho! ✨');
    
    // Fechar modal de preview se estiver aberto
    const previewModal = document.getElementById('previewModal');
    if (previewModal.classList.contains('active')) {
        previewModal.classList.remove('active');
    }
}

// Função para atualizar UI do carrinho
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Atualizar contador
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Atualizar lista de itens
    cartItemsContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <div class="cart-item-emoji">${item.emoji}</div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <div class="cart-item-price">
                    R$ ${item.price.toFixed(2)}
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
                <div class="item-subtotal">
                    Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">×</button>
        </div>
    `).join('');

    // Atualizar total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;

    // Adicionar event listeners para os botões de quantidade
    setupQuantityControls();
}

// Função para controlar quantidade no carrinho
function setupQuantityControls() {
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            const item = cartItems.find(item => item.id === productId);
            if (!item) return;

            if (e.target.classList.contains('increase')) {
                item.quantity += 1;
            } else if (e.target.classList.contains('decrease')) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    removeFromCart(productId);
                    return;
                }
            }

            updateCartUI();
            showToast('Quantidade atualizada! ✨');
        });
    });
}

// Função para remover item do carrinho
function removeFromCart(productId) {
    const itemIndex = cartItems.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        const item = cartItems[itemIndex];
        cartItems.splice(itemIndex, 1);
        updateCartUI();
        showToast(`${item.name} removido do carrinho`);
    }
}

// Função para abrir modal PIX
function openPixModal() {
    if (cartItems.length === 0) {
        showToast('Carrinho vazio! 🛒', 'error');
        return;
    }

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalFormatted = total.toFixed(2);
    document.getElementById('pixValue').textContent = `R$ ${totalFormatted}`;
    document.getElementById('pixValueCopy').textContent = totalFormatted;
    document.getElementById('pixModal').classList.add('active');
    document.getElementById('cartModal').classList.remove('active');
}

// Função para fechar modal PIX
function closePixModal() {
    document.getElementById('pixModal').classList.remove('active');
}

// Função para copiar chave PIX
function copyPixKey() {
    const pixKey = "24981128510"; // Sua chave PIX
    navigator.clipboard.writeText(pixKey).then(() => {
        showToast('Chave PIX copiada! 📋');
    });
}

// Atualizar função de checkout
function checkoutWhatsApp(isPaid = false) {
    if (cartItems.length === 0) {
        showToast('Carrinho vazio! 🛒', 'error');
        return;
    }

    const phoneNumber = '24981827333';
    let message = '🛍️ *Novo Pedido*\n\n';
    
    // Adicionar itens numerados
    cartItems.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Quantidade: ${item.quantity}\n`;
        message += `   Preço: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    // Adicionar total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*Total: R$ ${total.toFixed(2)}*\n\n`;
    
    // Adicionar status do pagamento
    if (isPaid) {
        message += '✅ *Efetuei o pagamento via PIX dos produtos:*\n';
        cartItems.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
        });
        message += '\n💫 *Estou esperando os produtos!*\n';
    } else {
        message += '📝 *Aguardando instruções de pagamento*\n';
        message += '✨ Aguardo seu contato para finalizar o pedido!';
    }

    // Criar link do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');

    // Limpar carrinho
    cartItems = [];
    updateCartUI();
    closePixModal();
    document.getElementById('cartModal').classList.remove('active');
    showToast('Pedido enviado para o WhatsApp! 📱');
}

// Função para mostrar notificações
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-emoji">${type === 'success' ? '✨' : '⚠️'}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Remover toast após 3 segundos
    setTimeout(() => {
        toast.style.animation = 'slideOutToast 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Adicionar contador de estoque dinâmico
function updateStockDisplay(product) {
    const randomReduction = Math.floor(Math.random() * 3) + 1;
    const currentStock = Math.max(0, product.stock - randomReduction);
    
    return `
        <div class="stock-info">
            <div class="stock-status">
                ${currentStock < 10 ? '🔥 ÚLTIMAS UNIDADES!' : '✨ PRODUTO EM ESTOQUE'}
            </div>
            <div class="stock-count">
                <span class="watching-now">👥 ${Math.floor(Math.random() * 15) + 5} pessoas estão vendo este produto</span>
                <span class="stock-remaining">📦 Apenas ${currentStock} unidades disponíveis</span>
            </div>
            <div class="stock-bar">
                <div class="stock-progress" style="width: ${(currentStock / product.stock) * 100}%"></div>
            </div>
        </div>
    `;
}

// Adicionar elementos de confiança ao modal de produto
function openPreviewModal(product) {
    // ... código existente ...
    
    previewBody.innerHTML = `
        <div class="preview-header">
            <div class="preview-badges">
                <span class="badge bestseller">🏆 MAIS VENDIDO</span>
                <span class="badge guarantee">✅ GARANTIA DE SATISFAÇÃO</span>
            </div>
            ${product.highlight ? `<span class="preview-highlight">${product.highlight}</span>` : ''}
        </div>
        
        // ... resto do HTML ...
        
        <div class="preview-trust">
            <div class="trust-item">
                <i class="fas fa-shield-alt"></i>
                <span>Compra 100% Segura</span>
            </div>
            <div class="trust-item">
                <i class="fas fa-bolt"></i>
                <span>Entrega Imediata</span>
            </div>
            <div class="trust-item">
                <i class="fas fa-headset"></i>
                <span>Suporte 24/7</span>
            </div>
        </div>
        
        ${updateStockDisplay(product)}
        
        <div class="social-proof">
            <div class="rating">
                ⭐⭐⭐⭐⭐ 4.9 (${Math.floor(Math.random() * 1000) + 500} avaliações)
            </div>
            <div class="recent-sales">
                🔥 ${Math.floor(Math.random() * 50) + 20} pessoas compraram nas últimas 24h
            </div>
        </div>
    `;
} 