export const categories = [
    {
        id: 'subscriptions',
        name: 'Assinaturas',
        emoji: '📦'
    },
    {
        id: 'blue-locks',
        name: 'Blue Lock: Rivals',
        emoji: '⚽',
        highlight: '🔥 NOVO!'
    }
];

export function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category.id === 'subscriptions' ? 'active' : ''}" data-category="${category.id}">
            ${category.emoji} ${category.name}
            ${category.highlight ? `<span class="category-highlight">${category.highlight}</span>` : ''}
        </button>
    `).join('');

    // Adiciona event listeners aos botões de categoria
    const categoryButtons = categoriesContainer.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe active ao botão clicado
            button.classList.add('active');
            
            // Obtém a categoria do botão clicado
            const category = button.dataset.category;
            
            // Renderiza os produtos da categoria selecionada
            window.renderProducts(category);
        });
    });
}

// Certifique-se que esta função está sendo chamada quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
}); 