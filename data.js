// Array principal de produtos
export const products = [
    {
        id: 'netflix-premium',
        name: 'Netflix Premium',
        emoji: '📺',
        price: 44.90,
        oldPrice: 55.90,
        stock: 50,
        category: 'streaming',
        highlight: 'Mais Vendido',
        shortDescription: 'Acesso Premium com 4K e 4 telas',
        description: 'Desfrute do melhor do entretenimento com a Netflix Premium. Assista em até 4 telas simultaneamente em qualidade Ultra HD 4K. Baixe seus títulos favoritos e assista offline.',
        benefits: [
            'Qualidade Ultra HD 4K',
            '4 telas simultâneas',
            'Download para assistir offline',
            'Sem anúncios',
            'Cancelamento flexível'
        ]
    },
    {
        id: 'disney-premium',
        name: 'Disney+ Premium',
        emoji: '🏰',
        price: 33.90,
        oldPrice: 39.90,
        stock: 35,
        category: 'streaming',
        highlight: 'Promoção',
        shortDescription: 'Acesso Premium com conteúdo exclusivo',
        description: 'Todo o universo Disney, Marvel, Star Wars e National Geographic em um só lugar. Assista em qualidade 4K com áudio Dolby Atmos em até 4 dispositivos.',
        benefits: [
            'Conteúdo exclusivo Disney',
            'Qualidade 4K HDR',
            '4 dispositivos simultâneos',
            'Downloads ilimitados',
            'Perfis personalizados'
        ]
    },
    {
        id: 'prime-video',
        name: 'Prime Video',
        emoji: '🎬',
        price: 14.90,
        stock: 100,
        category: 'streaming',
        shortDescription: 'Filmes, séries e benefícios Prime',
        description: 'Amazon Prime Video com todo o catálogo de filmes e séries exclusivas. Inclui benefícios Prime como frete grátis e Prime Gaming.',
        benefits: [
            'Catálogo exclusivo Amazon',
            'Frete grátis Prime',
            'Prime Gaming incluso',
            'Qualidade 4K HDR',
            'Downloads para offline'
        ]
    },
    {
        id: 'hbo-max',
        name: 'HBO Max',
        emoji: '🎭',
        price: 27.90,
        oldPrice: 34.90,
        stock: 45,
        category: 'streaming',
        shortDescription: 'O melhor do entretenimento HBO',
        description: 'HBO Max com todo o catálogo HBO, DC Comics, Warner Bros e Cartoon Network. Assista em até 3 telas com qualidade 4K.',
        benefits: [
            'Catálogo completo HBO',
            'Lançamentos Warner',
            'Conteúdo DC Comics',
            '3 telas simultâneas',
            'Qualidade 4K HDR'
        ]
    },
    {
        id: 'game-pass',
        name: 'Xbox Game Pass Ultimate',
        emoji: '🎮',
        price: 44.90,
        stock: 30,
        category: 'games',
        highlight: 'Mais de 100 Jogos',
        shortDescription: 'Biblioteca com mais de 100 jogos',
        description: 'Xbox Game Pass Ultimate com acesso a mais de 100 jogos para Console, PC e Cloud Gaming. Inclui EA Play e Xbox Live Gold.',
        benefits: [
            'Mais de 100 jogos',
            'EA Play incluso',
            'Xbox Live Gold',
            'Cloud Gaming',
            'Jogos day-one'
        ]
    },
    {
        id: 'ps-plus',
        name: 'PlayStation Plus Extra',
        emoji: '🎮',
        price: 39.90,
        stock: 25,
        category: 'games',
        shortDescription: 'Catálogo PS4 e PS5 + Online',
        description: 'PlayStation Plus Extra com centenas de jogos PS4 e PS5, modo online e jogos mensais. Desfrute dos melhores títulos PlayStation.',
        benefits: [
            'Jogos PS4 e PS5',
            'Modo Online',
            'Jogos mensais',
            'Descontos exclusivos',
            'Cloud Storage'
        ]
    },
    {
        id: 'nintendo-online',
        name: 'Nintendo Switch Online',
        emoji: '🎮',
        price: 20.00,
        stock: 40,
        category: 'games',
        shortDescription: 'Jogue online + jogos retrô',
        description: 'Nintendo Switch Online com acesso a jogos online, biblioteca de clássicos NES e SNES, e backup em nuvem dos seus saves.',
        benefits: [
            'Jogo online',
            'Jogos NES e SNES',
            'Cloud Save',
            'Ofertas exclusivas',
            'Aplicativo móvel'
        ]
    },
    {
        id: 'spotify-premium',
        name: 'Spotify Premium',
        emoji: '🎵',
        price: 19.90,
        stock: 150,
        category: 'musica',
        highlight: 'Mais Popular',
        shortDescription: 'Música sem anúncios + Download',
        description: 'Spotify Premium com música em alta qualidade, sem anúncios e com download offline. Acesse milhões de músicas e podcasts.',
        benefits: [
            'Música sem anúncios',
            'Download offline',
            'Qualidade Premium',
            'Letras em tempo real',
            'Modo carro'
        ]
    },
    {
        id: 'youtube-premium',
        name: 'YouTube Premium',
        emoji: '▶️',
        price: 24.90,
        stock: 80,
        category: 'musica',
        shortDescription: 'YouTube sem anúncios + Music',
        description: 'YouTube Premium com YouTube Music, vídeos sem anúncios, download offline e reprodução em segundo plano.',
        benefits: [
            'Sem anúncios',
            'YouTube Music Premium',
            'Download offline',
            'Background Play',
            'Modo Picture-in-Picture'
        ]
    },
    {
        id: 'microsoft-365',
        name: 'Microsoft 365 Family',
        emoji: '💼',
        price: 99.90,
        oldPrice: 119.90,
        stock: 60,
        category: 'produtividade',
        highlight: 'Até 6 usuários',
        shortDescription: 'Office completo + 1TB OneDrive',
        description: 'Microsoft 365 Family com Word, Excel, PowerPoint e 1TB de OneDrive para até 6 usuários. Inclui apps premium para PC, Mac e dispositivos móveis.',
        benefits: [
            'Apps Office Premium',
            '1TB OneDrive/usuário',
            'Até 6 usuários',
            'Editor Premium',
            'Segurança avançada'
        ]
    },
    {
        id: 'adobe-cc',
        name: 'Adobe Creative Cloud',
        emoji: '🎨',
        price: 89.90,
        stock: 40,
        category: 'produtividade',
        shortDescription: 'Suite completa Adobe',
        description: 'Adobe Creative Cloud com todos os apps Adobe: Photoshop, Illustrator, Premiere Pro e mais. Inclui 100GB de armazenamento em nuvem.',
        benefits: [
            'Todos os apps Adobe',
            '100GB na nuvem',
            'Fontes premium',
            'Tutoriais exclusivos',
            'Atualizações incluídas'
        ]
    },
    {
        id: 'vpn-premium',
        name: 'VPN Premium',
        emoji: '🔒',
        price: 29.90,
        oldPrice: 39.90,
        stock: 100,
        category: 'seguranca',
        highlight: 'Proteção Total',
        shortDescription: 'Navegue com segurança total',
        description: 'VPN Premium com servidores em mais de 90 países, criptografia militar e política zero-logs. Proteja sua privacidade online.',
        benefits: [
            'Servidores globais',
            'Criptografia militar',
            'Política zero-logs',
            'Largura ilimitada',
            'Kill Switch'
        ]
    }
];
