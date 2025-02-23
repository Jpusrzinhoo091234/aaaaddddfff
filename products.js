// Importações
import { categories } from './categories.js';
import { products } from './data.js';
import { filterProductsByCategory, findProductById } from './utils.js';
import { productCardTemplate, noProductsTemplate } from './templates.js';
import { openPreviewModal } from './modal.js';

// Constantes
export const TAXA_ADICIONAL = 2.00;

// Renderiza os produtos
function renderProducts(category = 'streaming') {
    const productsContainer = document.querySelector('#products .products-grid');
    if (!productsContainer) return;

    // Filtra produtos pela categoria
    const filteredProducts = filterProductsByCategory(products, category);

    // Se não houver produtos
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = noProductsTemplate();
        return;
    }

    // Renderiza os produtos
    productsContainer.innerHTML = filteredProducts.map(productCardTemplate).join('');

    // Adiciona eventos de clique nos cards
    setupProductCardEvents(productsContainer);
}

// Configura eventos dos cards de produto
function setupProductCardEvents(container) {
    const cards = container.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                const productId = card.dataset.id;
                const product = findProductById(products, productId);
                if (product) {
                    openPreviewModal(product);
                }
            }
        });
    });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza produtos iniciais
    renderProducts('streaming');

    // Adiciona eventos nos botões de categoria
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProducts(button.dataset.category);
        });
    });
});
