// Importações
import { categories } from './categories.js';
import { products } from './data.js';
import { filterProductsByCategory, findProductById } from './utils.js';
import { productCardTemplate, noProductsTemplate } from './templates.js';

// Constantes
export const TAXA_ADICIONAL = 2.00;

// Renderizar produtos
function renderProducts(category = 'all') {
    const productsContainer = document.querySelector('#products .products-grid');
    productsContainer.innerHTML = '';

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const stockClass = product.stock < 5 ? 'low-stock' : '';
        
        card.innerHTML = `
            ${product.highlight ? `<div class="product-highlight">${product.highlight}</div>` : ''}
            <div class="product-emoji">${product.emoji}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price-container">
                ${product.oldPrice ? `<div class="product-old-price">R$ ${product.oldPrice.toFixed(2)}</div>` : ''}
                <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            </div>
            <p class="product-short-description">${product.shortDescription}</p>
            <div class="stock-info ${stockClass}">
                ${product.stock > 0 ? `✅ ${product.stock} em estoque` : '❌ Fora de estoque'}
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${product.id}')" ${product.stock === 0 ? 'disabled' : ''}>
                Adicionar ao Carrinho
            </button>
        `;

        // Adicionar evento de clique para abrir o modal
        card.addEventListener('click', () => {
            openPreviewModal(product);
        });
        
        productsContainer.appendChild(card);
    });
}

// Função para abrir o modal de preview
function openPreviewModal(product) {
    const modal = document.getElementById('previewModal');
    const emoji = modal.querySelector('.preview-emoji');
    const title = modal.querySelector('.preview-title');
    const oldPrice = modal.querySelector('.preview-old-price');
    const price = modal.querySelector('.preview-price');
    const stock = modal.querySelector('.preview-stock');
    const description = modal.querySelector('.preview-description');
    const benefitsList = modal.querySelector('.preview-benefits-list');
    const addButton = modal.querySelector('.preview-add-btn');

    // Preencher dados
    emoji.textContent = product.emoji;
    title.textContent = product.name;
    
    if (product.oldPrice) {
        oldPrice.textContent = `R$ ${product.oldPrice.toFixed(2)}`;
        oldPrice.style.display = 'block';
    } else {
        oldPrice.style.display = 'none';
    }
    
    price.textContent = `R$ ${product.price.toFixed(2)}`;
    
    const stockClass = product.stock < 5 ? 'low-stock' : '';
    stock.className = `preview-stock ${stockClass}`;
    stock.textContent = product.stock > 0 
        ? `✅ ${product.stock} em estoque` 
        : '❌ Fora de estoque';
    
    description.textContent = product.description;
    
    // Limpar e preencher benefícios
    benefitsList.innerHTML = '';
    product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.innerHTML = `<span>✨</span>${benefit}`;
        benefitsList.appendChild(li);
    });
    
    // Configurar botão de adicionar
    addButton.disabled = product.stock === 0;
    addButton.onclick = () => {
        addToCart(product.id);
        closePreviewModal();
    };

    // Mostrar modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
document.getElementById('previewModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closePreviewModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePreviewModal();
    }
});

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    
    // Adicionar eventos nos botões de categoria
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Atualizar botão ativo
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Renderizar produtos da categoria
            renderProducts(category);
        });
    });
});
