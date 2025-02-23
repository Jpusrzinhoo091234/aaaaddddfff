export const flashDeals = [
    {
        id: 'flash1',
        name: 'Super Smartphone',
        emoji: '📱',
        price: 1499.99,
        oldPrice: 2999.99,
        description: 'Smartphone top de linha com 50% OFF! Câmera 108MP, 256GB',
        shortDescription: 'Smartphone top de linha com 50% OFF!',
        discount: 50,
        stock: 5,
        endTime: '2024-03-20T23:59:59'
    },
    {
        id: 'flash2',
        name: 'Fones Wireless',
        emoji: '🎧',
        price: 199.99,
        oldPrice: 499.99,
        description: 'Fones de ouvido com cancelamento de ruído ativo, Bluetooth 5.0',
        shortDescription: 'Fones com cancelamento de ruído!',
        discount: 60,
        stock: 8,
        endTime: '2024-03-20T18:00:00'
    },
    {
        id: 'flash3',
        name: 'Smartwatch Pro',
        emoji: '⌚',
        price: 599.99,
        oldPrice: 1299.99,
        description: 'Relógio inteligente com GPS, monitor cardíaco e 7 dias de bateria',
        shortDescription: 'Smartwatch com GPS e monitor cardíaco!',
        discount: 55,
        stock: 3,
        endTime: '2024-03-20T12:00:00'
    }
];

export function renderFlashDeals() {
    const flashDealsGrid = document.getElementById('flashDealsGrid');
    flashDealsGrid.innerHTML = '';

    flashDeals.forEach(deal => {
        const card = document.createElement('div');
        card.className = 'flash-deal-card';
        card.setAttribute('data-product-id', deal.id);
        
        const discount = ((deal.oldPrice - deal.price) / deal.oldPrice * 100).toFixed(0);
        
        card.innerHTML = `
            <div class="flash-deal-badge">${discount}% OFF</div>
            <div class="product-emoji">${deal.emoji}</div>
            <h3 class="product-title">${deal.name}</h3>
            <div class="product-price-container">
                <p class="product-old-price">De R$ ${deal.oldPrice.toFixed(2)}</p>
                <p class="product-price">Por R$ ${deal.price.toFixed(2)}</p>
            </div>
            <p class="product-description">${deal.shortDescription}</p>
            <div class="stock-warning">
                Restam ${deal.stock} unidades!
            </div>
            <button class="add-to-cart-btn pulse-animation" data-product-id="${deal.id}">
                Comprar Agora 🔥
            </button>
        `;

        // Adicionar evento de clique para abrir modal
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                openFlashDealModal(deal);
            }
        });
        
        flashDealsGrid.appendChild(card);
    });
}

function openFlashDealModal(deal) {
    const modal = document.getElementById('previewModal');
    const previewBody = document.getElementById('previewBody');
    
    const discount = ((deal.oldPrice - deal.price) / deal.oldPrice * 100).toFixed(0);
    
    modal.classList.add('active');
    previewBody.innerHTML = `
        <div class="preview-emoji">${deal.emoji}</div>
        <div class="flash-deal-badge">${discount}% OFF</div>
        <div class="preview-details">
            <h3 class="preview-title">${deal.name}</h3>
            <div class="preview-price-container">
                <p class="preview-old-price">De R$ ${deal.oldPrice.toFixed(2)}</p>
                <p class="preview-price">Por R$ ${deal.price.toFixed(2)}</p>
                <p class="preview-savings">Economia de R$ ${(deal.oldPrice - deal.price).toFixed(2)}</p>
            </div>
            <p class="preview-description">${deal.description}</p>
            <div class="stock-warning">
                🔥 Apenas ${deal.stock} unidades em estoque!
            </div>
            <div class="preview-actions">
                <div class="preview-quantity">
                    <button class="quantity-decrease">-</button>
                    <span class="quantity-value">1</span>
                    <button class="quantity-increase">+</button>
                </div>
                <button class="add-to-cart-btn pulse-animation" data-product-id="${deal.id}">
                    Comprar Agora 🔥
                </button>
            </div>
        </div>
    `;
} 