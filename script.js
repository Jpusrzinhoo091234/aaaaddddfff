// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const root = document.documentElement;

// Check for saved theme preference or default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
    const isDark = theme === 'dark';
    themeIcon.textContent = isDark ? '🌙' : '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Category Navigation
const categoryButtons = document.querySelectorAll('.category-btn');
const productsGrid = document.querySelector('.products-grid');
const trustSection = document.getElementById('trust-indicators');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        // Toggle visibility of sections based on category
        if (category === 'home') {
            trustSection.style.display = 'block';
            productsGrid.style.display = 'none';
        } else {
            trustSection.style.display = 'none';
            productsGrid.style.display = 'grid';
            loadProducts(category);
        }
    });
});

// Initial load
const initialCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
if (initialCategory === 'home') {
    trustSection.style.display = 'block';
    productsGrid.style.display = 'none';
} else {
    trustSection.style.display = 'none';
    productsGrid.style.display = 'grid';
    loadProducts(initialCategory);
}

// Cart functionality
let cart = [];
const cartModal = document.querySelector('.cart-modal');
const cartCount = document.querySelector('.cart-count');

function toggleCart() {
    cartModal.classList.toggle('active');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    updateCartDisplay();
    showToast('Produto adicionado ao carrinho!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    showToast('Produto removido do carrinho!');
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio</div>';
        cartTotal.textContent = 'Total: R$ 0,00';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function updateItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartCount();
        updateCartDisplay();
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// PIX Modal Functions
function openPixModal() {
    document.getElementById('pixModal').style.display = 'flex';
}

function closePixModal() {
    document.getElementById('pixModal').style.display = 'none';
}

function copyPix() {
    const pixKey = document.getElementById('pixKeyText').textContent;
    navigator.clipboard.writeText(pixKey);
    
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.textContent = '✅ Copiado!';
    
    setTimeout(() => {
        copyBtn.textContent = '📋 Copiar Chave PIX';
    }, 2000);
}

function sendProof() {
    const phone = '24981128510';
    const message = 'Olá! Acabei de fazer um pagamento PIX. Segue o comprovante:';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Checkout functions
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Adicione produtos ao carrinho primeiro!');
        return;
    }
    
    const message = encodeURIComponent(
        'Olá! Gostaria de fazer um pedido:\n\n' +
        cart.map(item => `${item.name} x${item.quantity}`).join('\n') +
        '\n\nTotal: R$ ' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
    );
    
    window.open(`https://wa.me/seu_numero_aqui?text=${message}`);
}

function checkoutPix() {
    if (cart.length === 0) {
        showToast('Adicione produtos ao carrinho primeiro!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    openPixModal();
}

function redirectToWhatsApp() {
    const phoneNumber = '24981128510';
    const message = encodeURIComponent('Olá! Acabei de fazer um pagamento PIX. Segue o comprovante:');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
