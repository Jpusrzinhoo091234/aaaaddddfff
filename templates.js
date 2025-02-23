import { formatPrice, formatStock, isProductAvailable, isLowStock } from './utils.js';

// Template do card de produto
export function productCardTemplate(product) {
    const priceWithTax = formatPrice(product.price);
    const oldPriceWithTax = product.oldPrice ? formatPrice(product.oldPrice) : null;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-emoji">${product.emoji}</div>
            ${product.highlight ? `<div class="product-highlight">${product.highlight}</div>` : ''}
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price-container">
                ${oldPriceWithTax ? `<p class="product-old-price">De R$ ${oldPriceWithTax}</p>` : ''}
                <p class="product-price">R$ ${priceWithTax}</p>
            </div>
            <p class="product-short-description">${product.shortDescription || ''}</p>
            <div class="stock-info ${isLowStock(product.stock) ? 'low-stock' : ''}">
                ${formatStock(product.stock)}
            </div>
            <button class="add-to-cart-btn pulse-animation" 
                    data-product-id="${product.id}"
                    ${!isProductAvailable(product.stock) ? 'disabled' : ''}>
                ${isProductAvailable(product.stock) ? 'Adicionar ao Carrinho 🛒' : 'Produto Indisponível ❌'}
            </button>
        </div>
    `;
}

// Template do modal de produto
export function productModalTemplate(product) {
    const priceWithTax = formatPrice(product.price);
    const oldPriceWithTax = product.oldPrice ? formatPrice(product.oldPrice) : null;
    
    return `
        <div class="preview-content">
            <div class="preview-left">
                <div class="preview-emoji">${product.emoji}</div>
                <div class="preview-price-container">
                    ${oldPriceWithTax ? `<p class="preview-old-price">De R$ ${oldPriceWithTax}</p>` : ''}
                    <p class="preview-price">R$ ${priceWithTax}</p>
                </div>
                <div class="preview-stock">
                    ${formatStock(product.stock)}
                </div>
            </div>
            <div class="preview-right">
                <div class="preview-description">
                    ${product.description}
                </div>
                <div class="preview-benefits">
                    <h4>✨ Benefícios:</h4>
                    <ul>
                        ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="add-to-cart-btn pulse-animation" 
                        data-product-id="${product.id}"
                        ${!isProductAvailable(product.stock) ? 'disabled' : ''}>
                    ${isProductAvailable(product.stock) ? 'Adicionar ao Carrinho 🛒' : 'Produto Indisponível ❌'}
                </button>
            </div>
        </div>
    `;
}

// Template para quando não há produtos
export function noProductsTemplate() {
    return `
        <div class="no-products">
            <p>Nenhum produto encontrado nesta categoria 😕</p>
        </div>
    `;
}
