// Gerenciamento de Tema
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Alterna entre os temas
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Atualiza o ícone do botão de tema
function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}
