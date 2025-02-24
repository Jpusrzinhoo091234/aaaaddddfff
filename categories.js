// Array de categorias - Fácil de adicionar novas categorias
export const categories = [
    {
        id: 'all',
        name: 'Todos',
        emoji: '🌟'
    },
    {
        id: 'streaming',
        name: 'Streaming',
        emoji: '📺'
    },
    {
        id: 'games',
        name: 'Games',
        emoji: '🎮'
    },
    {
        id: 'musica',
        name: 'Música',
        emoji: '🎵'
    },
    {
        id: 'produtividade',
        name: 'Produtividade',
        emoji: '💼'
    },
    {
        id: 'seguranca',
        name: 'Segurança',
        emoji: '🔒'
    },
    // Exemplo de como adicionar novas categorias:
    {
        id: 'educacao',
        name: 'Educação',
        emoji: '📚'
    },
    {
        id: 'design',
        name: 'Design',
        emoji: '🎨'
    }
];

// Função para adicionar uma nova categoria
export function addCategory(id, name, emoji) {
    const newCategory = { id, name, emoji };
    categories.push(newCategory);
    renderCategories(); // Atualiza a interface
    return newCategory;
}

export function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    
    // Cria o container com scroll horizontal
    categoriesContainer.classList.add('categories-container');
    
    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category.id === 'all' ? 'active' : ''}" data-category="${category.id}">
            ${category.emoji} ${category.name}
        </button>
    `).join('');

    // Adiciona event listeners aos botões de categoria
    const categoryButtons = categoriesContainer.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            window.renderProducts(category);
        });
    });
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
});