export const categories = [
    {
        id: 'streaming',
        name: 'Streaming',
        emoji: '📺',
        description: 'Serviços de streaming como Netflix, Disney+ e mais'
    },
    {
        id: 'games',
        name: 'Games',
        emoji: '🎮',
        description: 'Produtos e vantagens para seus jogos favoritos'
    }
];

export function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category.id === 'streaming' ? 'active' : ''}" data-category="${category.id}">
            ${category.emoji} ${category.name}
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