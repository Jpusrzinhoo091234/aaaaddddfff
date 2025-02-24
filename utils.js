// Constantes
export const TAXA_ADICIONAL = 2.00;

// Formata preço com taxa
export function formatPrice(price) {
    return (parseFloat(price) + TAXA_ADICIONAL).toFixed(2);
}

// Formata estoque
export function formatStock(stock) {
    return stock > 0 ? `✅ ${stock} em estoque` : '❌ Fora de estoque';
}

// Verifica se produto está disponível
export function isProductAvailable(stock) {
    return stock > 0;
}

// Verifica se estoque está baixo
export function isLowStock(stock) {
    return stock <= 5;
}

// Encontra produto por ID
export function findProductById(products, id) {
    return products.find(p => p.id === id);
}

// Filtra produtos por categoria
export function filterProductsByCategory(products, category) {
    return category === 'all' ? products : products.filter(p => p.category === category);
}

// Verifica disponibilidade do localStorage
export function isLocalStorageAvailable() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

// Salva dados no localStorage
export function saveToLocalStorage(key, data) {
    if (!isLocalStorageAvailable()) return false;
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch(e) {
        console.error(`Erro ao salvar no localStorage (${key}):`, e);
        return false;
    }
}

// Carrega dados do localStorage
export function loadFromLocalStorage(key) {
    if (!isLocalStorageAvailable()) return null;
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch(e) {
        console.error(`Erro ao carregar do localStorage (${key}):`, e);
        return null;
    }
}

// Calcula total do carrinho
export function calculateCartTotal(cart) {
    return cart.reduce((total, item) => {
        const priceWithTax = parseFloat(item.price) + TAXA_ADICIONAL;
        return total + (priceWithTax * item.quantity);
    }, 0);
}


/* Flexbox para alinhamento horizontal */document.querySelector('.category-btn[data-category="instagram"]').addEventListener('click', function() {
    exibirProdutos('instagram'); // Chama a função para exibir produtos da categoria Instagram
});

function exibirProdutos(categoria) {
    const produtosContainer = document.getElementById('produtos-container'); // Certifique-se de que este ID existe no seu HTML
    produtosContainer.innerHTML = ''; // Limpa o conteúdo anterior

    // Filtra os produtos pela categoria
    const produtosFiltrados = products.filter(produto => produto.category === categoria);

    // Exibe os produtos filtrados
    produtosFiltrados.forEach(produto => {
        const button = document.createElement('button');
        button.className = 'product-btn';
        button.innerText = produto.name; // Nome do produto
        produtosContainer.appendChild(button);
    });
}