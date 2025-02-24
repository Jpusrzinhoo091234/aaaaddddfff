// Carrinho de compras
let cart = [];

// Importações
import { 
    findProductById,
    saveToLocalStorage,
    loadFromLocalStorage,
    calculateCartTotal,
    products,
    getAdjustedPrice
} from './utils.js';
import { products } from './data.js';

// Função para salvar carrinho
const saveCart = () => {
    if (!saveToLocalStorage('cart', cart)) {
        showToast('Erro ao salvar carrinho. Espaço insuficiente!');
    }
};

// Função para carregar carrinho
const loadCart = () => {
    const savedCart = loadFromLocalStorage('cart');
    if (savedCart) {
        cart = savedCart;
        updateCartUI();
    }
};

// Função para adicionar produto ao carrinho
function addToCart(productId, quantity = 1) {
    const product = findProductById(products, productId);
    if (!product) {
        showToast('Produto não encontrado!');
        return;
    }

    // Verifica se já existe no carrinho
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Atualiza quantidade
        updateQuantity(productId, existingItem.quantity + quantity);
    } else {
        // Adiciona novo item
        if (checkStock(productId, quantity)) {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
            saveCart();
            updateCartUI();
            showToast('Produto adicionado ao carrinho!');
            toggleCart(); // Abre o carrinho automaticamente
        }
    }
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Produto removido do carrinho!');
}

// Função para verificar estoque
function checkStock(productId, requestedQuantity) {
    const product = findProductById(products, productId);
    if (product && product.stock >= requestedQuantity) {
        return true;
    }
    showToast('Quantidade indisponível em estoque!');
    return false;
}

// Função para atualizar quantidade
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    if (checkStock(productId, quantity)) {
        item.quantity = quantity;
        saveCart();
        updateCartUI();
    }
}

// Função para atualizar a UI do carrinho
function updateCartUI() {
    const cartContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartCount = document.querySelector('.cart-count');
    
    if (!cartContainer || !cartTotal || !cartCount) return;

    // Atualiza contador do carrinho
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Se carrinho vazio
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio 😕</p>';
        cartTotal.textContent = 'Total: R$ 0,00';
        return;
    }

    // Renderiza itens
    cartContainer.innerHTML = cart.map(item => {
        const product = findProductById(products, item.id);
        const adjustedPrice = getAdjustedPrice(product.price);
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${product.name}</h4>
                    <p>R$ ${adjustedPrice.toFixed(2)} cada</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">×</button>
            </div>
        `;
    }).join('');

    // Atualiza total
    const total = calculateCartTotal(cart);
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para calcular o total do carrinho
function calculateCartTotal(cartItems) {
    return cartItems.reduce((total, item) => {
        const product = findProductById(products, item.id);
        const adjustedPrice = getAdjustedPrice(product.price);
        return total + (adjustedPrice * item.quantity);
    }, 0);
}

// Função para mostrar/esconder o carrinho
function toggleCart() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.classList.toggle('active');
}

// Função para finalizar compra via WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Seu carrinho está vazio!');
        return;
    }

    const total = calculateCartTotal(cart);
    
    let message = "🛍️ *Novo Pedido*\n\n";
    message += "*Itens do Pedido:*\n";
    
    cart.forEach(item => {
        const product = findProductById(products, item.id);
        const adjustedPrice = getAdjustedPrice(product.price);
        message += `▫️ ${product.name}\n`;
        message += `   ${item.quantity}x R$ ${adjustedPrice.toFixed(2)} = R$ ${(adjustedPrice * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `\n💰 *Total: R$ ${total.toFixed(2)}*`;
    
    const finalMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5524981128510?text=${finalMessage}`);
}

// Modal do PIX
function createPaymentModal() {
    const modal = document.createElement('div');
    modal.className = 'payment-modal';
    modal.innerHTML = `
        <div class="payment-modal-content">
            <button class="close-modal" onclick="closePaymentModal()">×</button>
            <h2>Pagamento via PIX</h2>
            
            <div class="pix-content">
                <div class="qr-container">
                    <img src="./qrcodepix.jpg" alt="QR Code PIX" class="qr-image" onerror="this.onerror=null; handleImageError(this);">
                    <div class="pix-key-section">
                        <p class="pix-key">Chave PIX: <strong>24981128510</strong></p>
                        <button class="copy-pix-btn" onclick="copyPixKey()">
                            <span>📋</span> Copiar Chave PIX
                        </button>
                    </div>
                    <div class="pix-steps">
                        <p>1. Escaneie o QR Code ou copie a chave PIX</p>
                        <p>2. Faça o pagamento de <strong class="total-value">R$ 0,00</strong></p>
                        <p>3. Clique no botão abaixo para enviar o comprovante</p>
                    </div>
                    <button onclick="window.open('https://wa.me/5524981128510')" class="whatsapp-proof-btn">
                        <span>💬</span> Enviar Comprovante no WhatsApp
                    </button>
                </div>
                
                <div class="pix-info">
                    
                </div>
            </div>
            
            <div class="pix-footer">
                <p class="total-amount"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

// Função para lidar com erro de carregamento da imagem
function handleImageError(img) {
    img.style.display = 'none';
    const errorMsg = document.createElement('p');
    errorMsg.className = 'qr-error';
    errorMsg.innerHTML = `
        <span style="font-size: 3rem;">⚠️</span><br>
        Erro ao carregar QR Code<br>
        <small>Por favor, utilize a chave PIX</small>
    `;
    img.parentNode.appendChild(errorMsg);
}

// Função para fechar modal de pagamento
function closePaymentModal() {
    const modal = document.querySelector('.payment-modal');
    if (modal) {
        modal.remove();
    }
}

// Função para copiar chave PIX
function copyPixKey() {
    const pixKey = "24981128510";
    navigator.clipboard.writeText(pixKey).then(() => {
        showToast('Chave PIX copiada!');
    }).catch(() => {
        showToast('Erro ao copiar chave PIX');
    });
}

// Função para finalizar compra via PIX
function checkoutPix() {
    if (cart.length === 0) {
        showToast('Seu carrinho está vazio!');
        return;
    }

    const total = calculateCartTotal(cart);
    const modal = createPaymentModal();
    modal.querySelector('.total-amount').textContent = `Total: R$ ${total.toFixed(2)}`;
    modal.querySelector('.total-value').textContent = `R$ ${total.toFixed(2)}`;
    modal.style.display = 'flex';
}

// Função para mostrar toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remove o toast após 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    
    // Adiciona eventos aos botões de adicionar ao carrinho
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.productId;
            addToCart(productId);
        }
    });
});

// Exporta funções
export {
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    checkoutWhatsApp,
    checkoutPix,
    closePaymentModal,
    copyPixKey,
    handleImageError
};