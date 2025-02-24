// Ajuste de preço global (em reais)
export const PRICE_ADJUSTMENT = 2.00;

// Array principal de produtos
export const products = [
    // Seguidores Brasileiros
    {
        id: 'insta-10k-conta',
        name: '[CONTA] INSTA COM 10K SEGUIDORES',
        emoji: '🧑',
        price: 149.90,
        stock: 1,
        category: 'instagram',
        shortDescription: 'Conta Instagram com 10.000 seguidores',
        description: 'Conta Instagram com 10.000 seguidores já estabelecidos. Ideal para começar sua presença digital com autoridade.',
        benefits: [
            'Conta pronta para uso',
            '10.000 seguidores estabelecidos',
            'Entrega imediata',
            'Suporte completo'
        ]
    },
    {
        id: 'insta-1k-br',
        name: '1K SEGUIDORES (BRASILEIROS)',
        emoji: '🧑',
        price: 35.00,
        stock: 99713,
        category: 'instagram',
        highlight: 'MAIS VENDIDO',
        shortDescription: '1.000 seguidores brasileiros reais',
        description: 'Pacote de 1.000 seguidores brasileiros para seu perfil do Instagram. Seguidores de alta qualidade com baixíssima taxa de queda.',
        benefits: [
            'Seguidores brasileiros',
            'Entrega rápida: 2k-10k+/dia',
            'Garantia de 30 dias',
            'Suporte dedicado'
        ]
    },
    {
        id: 'insta-1k-mundial',
        name: '1K SEGUIDORES (MUNDIAIS)',
        emoji: '🧑',
        price: 13.99,
        stock: 99087,
        category: 'instagram',
        shortDescription: '1.000 seguidores internacionais',
        description: 'Pacote de 1.000 seguidores internacionais para seu perfil do Instagram. Entrega super rápida e garantia de qualidade.',
        benefits: [
            'Seguidores internacionais',
            'Entrega rápida: 5k-100k+/dia',
            'Garantia de 30 dias',
            'Perfil deve estar público'
        ]
    },
    // Curtidas
    {
        id: 'insta-1k-likes-br',
        name: '1K CURTIDAS (BRASILEIRAS)',
        emoji: '👍',
        price: 6.99,
        stock: 999859,
        category: 'instagram',
        shortDescription: '1.000 curtidas de usuários brasileiros',
        description: 'Pacote de 1.000 curtidas brasileiras para suas publicações no Instagram. Aumente o engajamento de forma natural.',
        benefits: [
            'Curtidas de usuários brasileiros',
            'Divisão em várias fotos',
            'Entrega rápida: 5K+/dia',
            'Garantia de reposição'
        ]
    },
    {
        id: 'insta-1k-likes-mundial',
        name: '1K CURTIDAS (MUNDIAIS)',
        emoji: '👍',
        price: 2.00,
        stock: 99699,
        category: 'instagram',
        shortDescription: '1.000 curtidas internacionais',
        description: 'Pacote de 1.000 curtidas internacionais para suas publicações no Instagram. Preço acessível e entrega rápida.',
        benefits: [
            'Curtidas internacionais',
            'Divisão em várias fotos',
            'Entrega rápida: 20K+/dia',
            'Garantia de reposição'
        ]
    },
    // Views
    {
        id: 'insta-10k-views-reels',
        name: '10K VIEWS REELS/VÍDEO/IGTV',
        emoji: '👀',
        price: 9.99,
        stock: 99959,
        category: 'instagram',
        shortDescription: '10.000 visualizações para seus vídeos',
        description: 'Pacote de 10.000 visualizações para seus Reels, Vídeos ou IGTV no Instagram. Aumente a visibilidade do seu conteúdo.',
        benefits: [
            'Views mundiais',
            'Compatível com Reels/Vídeo/IGTV',
            'Entrega rápida',
            'Garantia de 30 dias'
        ]
    }
];

// Função para ajustar o preço do produto
export function getAdjustedPrice(basePrice) {
    return basePrice + PRICE_ADJUSTMENT;
}

// Informações gerais sobre os serviços
export const serviceInfo = {
    garantia: "30 dias para reposição em caso de quedas (acima de 5%)",
    entrega: {
        seguidoresBr: "2k-10k+/dia",
        seguidoresMundial: "5k-100k+/dia",
        outrosBr: "5K+/dia",
        outrosMundial: "20K+/dia"
    },
    restricoes: [
        "Perfil deve estar em modo público",
        "Não trocar @ durante o processo",
        "Não solicitar cancelamento/remoção",
        "Não fazer pedidos simultâneos com outros vendedores"
    ],
    atendimento: "09:00 às 23:00",
    observacoes: [
        "Pode haver overdelivery (entrega extra)",
        "Reposição apenas para quedas acima de 5%",
        "Views não são compatíveis com monetização"
    ]
};
