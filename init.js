// Arquivo de inicialização para expor funções globalmente
import { 
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    checkoutWhatsApp,
    checkoutPix,
    closePaymentModal,
    copyPixKey,
    handleImageError
} from './cart.js';

// Expõe funções globalmente
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.checkoutWhatsApp = checkoutWhatsApp;
window.checkoutPix = checkoutPix;
window.closePaymentModal = closePaymentModal;
window.copyPixKey = copyPixKey;
window.handleImageError = handleImageError;
