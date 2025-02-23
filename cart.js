// Carrinho de compras
let cart = [];

// Importar produtos e taxa adicional
import { products, TAXA_ADICIONAL } from './products.js';

// Função para adicionar produto ao carrinho
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showToast('Produto não encontrado! ❌');
        return;
    }
    
    // Verificar estoque
    if (product.stock <= 0) {
        showToast('Produto fora de estoque! ❌');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        // Verificar se há estoque suficiente para aumentar quantidade
        if (existingItem.quantity + quantity > product.stock) {
            showToast('Quantidade excede o estoque disponível! ❌');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity,
            stock: product.stock
        });
    }

    updateCartUI();
    showToast('Produto adicionado ao carrinho! 🛒');
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Produto removido do carrinho ❌');
}

// Função para atualizar quantidade no carrinho
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            // Verificar estoque antes de atualizar
            const product = products.find(p => p.id === productId);
            if (product && quantity <= product.stock) {
                item.quantity = quantity;
                updateCartUI();
            } else {
                showToast('Quantidade excede o estoque disponível! ❌');
            }
        }
    }
}

// Função para atualizar a UI do carrinho
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');

    if (!cartItems || !cartTotal || !cartCount) return;

    // Atualiza contador do carrinho
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Atualiza itens do carrinho
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <span class="cart-item-emoji">${item.emoji}</span>
                <span class="cart-item-name">${item.name}</span>
            </div>
            <div class="cart-item-quantity">
                <button onclick="window.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="window.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-item" onclick="window.removeFromCart('${item.id}')">×</button>
        </div>
    `).join('');

    // Atualiza total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;

    // Salva carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para mostrar/esconder o carrinho
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.toggle('active');
    }
}

// Função para finalizar compra via WhatsApp
function checkoutWhatsApp() {
    const phoneNumber = '24981128510';
    const message = cart.map(item => 
        `${item.quantity}x ${item.name}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const finalMessage = encodeURIComponent(
        `Olá! Gostaria de fazer um pedido:\n\n${message}\n\nTotal: R$ ${total.toFixed(2)}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${finalMessage}`, '_blank');
    
    // Limpar carrinho após finalizar pedido
    cart = [];
    updateCartUI();
    toggleCart();
    showToast('Pedido enviado com sucesso! 🎉');
}

// Função para mostrar toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }, 100);
}

// Adicionar funções ao escopo global
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.checkoutWhatsApp = checkoutWhatsApp;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carrega carrinho do localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (error) {
            console.error('Erro ao carregar carrinho:', error);
            localStorage.removeItem('cart');
        }
    }

    // Adiciona evento de clique no ícone do carrinho
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
    }

    // Adiciona evento para fechar o carrinho
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', toggleCart);
    }

    // Adiciona evento para o botão de checkout
    const checkoutBtn = document.getElementById('checkoutWhatsApp');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutWhatsApp);
    }
});