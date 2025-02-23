// Taxa fixa aos preços
export const TAXA_ADICIONAL = 2.00;

// Lista de produtos
export const products = [
    {
        id: 'netflix1',
        name: 'NETFLIX 4K 30 DIAS | 1 TELA COM PIN',
        emoji: '📺',
        price: 16.90 + TAXA_ADICIONAL,
        oldPrice: 19.90 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `✨ CONTA PREMIUM 4K ULTRA HD
        
🔐 Características:
• Plano Premium 4K Ultra HD
• Duração: 30 dias
• Tela Privada com PIN
• Acesso Garantido
• Suporte 24/7
• Envio Automático

📱 Funciona em:
• Smart TVs
• Celulares
• Tablets
• Computadores
• Video Games

⚡ Entrega Imediata
🔒 Conta Privada
✅ Garantia de Funcionamento`,
        shortDescription: 'Netflix Premium 4K - 30 dias com PIN ✨',
        highlight: 'PREMIUM',
        stock: 146514,
        benefits: [
            '📺 4K Ultra HD Garantido',
            '🔒 PIN Exclusivo',
            '📱 Todos Dispositivos',
            '⚡ Entrega Automática',
            '🎮 Compatível c/ Games'
        ]
    },
    {
        id: 'netflix2',
        name: '[TV] NETFLIX 4K 30 DIAS | 1 TELA COM PIN',
        emoji: '🎬',
        price: 15.90 + TAXA_ADICIONAL,
        oldPrice: 18.90 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `✨ EXCLUSIVO PARA SMART TVs
        
📺 Características:
• Plano Premium 4K Ultra HD
• Duração: 30 dias
• PIN de Acesso Único
• Otimizado para TVs
• Suporte Especializado
• Envio Instantâneo

💡 Compatível com:
• Samsung Smart TV
• LG Smart TV
• Android TV
• TCL
• Philips Smart TV
• Todas Smart TVs

⚡ Ativação Imediata
🔒 Acesso Exclusivo
✅ Garantia de 30 dias`,
        shortDescription: 'Netflix TV Premium 4K - 30 dias com PIN 📺',
        highlight: 'TV ONLY',
        stock: 13622,
        benefits: [
            '📺 4K Ultra HD TV',
            '🔒 PIN Exclusivo',
            '🖥️ Smart TV Only',
            '⚡ Ativação Imediata',
            '✨ Qualidade Máxima'
        ]
    },
    {
        id: 'netflix3',
        name: 'NETFLIX 4K 10 DIAS COMPARTILHADA',
        emoji: '🎥',
        price: 5.89 + TAXA_ADICIONAL,
        oldPrice: 7.99 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `🎬 CONTA COMPARTILHADA 4K
        
📱 Detalhes do Plano:
• Qualidade 4K Ultra HD
• 10 Dias de Acesso
• Perfil Compartilhado
• Multi-dispositivos
• Suporte Básico
• Envio Automático

💻 Compatibilidade:
• Todos Dispositivos
• Smart TVs
• Smartphones
• PCs e Notebooks
• Tablets

⚡ Entrega em 1 minuto
👥 Acesso Compartilhado
✅ Garantia de Reposição`,
        shortDescription: 'Netflix 4K Compartilhada - 10 dias 🎬',
        highlight: 'PROMO',
        stock: 5154,
        benefits: [
            '📺 4K Garantido',
            '👥 Compartilhada',
            '📱 Multi-Device',
            '⚡ Entrega Rápida',
            '💰 Melhor Custo'
        ]
    },
    {
        id: 'netflix4',
        name: '[TV] NETFLIX 4K 7 DIAS COMPARTILHADA',
        emoji: '🎞️',
        price: 2.99 + TAXA_ADICIONAL,
        oldPrice: 4.99 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `📺 ACESSO TV 7 DIAS
        
🎬 Informações:
• Qualidade 4K Ultra HD
• 7 Dias de Acesso
• Perfil Compartilhado
• Exclusivo Smart TVs
• Suporte via Chat
• Envio Automático

📺 Funciona em:
• Todas Smart TVs
• Android TV
• TV Box
• Apple TV
• Chromecast

⚡ Ativação Imediata
👥 Modo Compartilhado
✅ Garantia de 7 dias`,
        shortDescription: 'Netflix TV 4K Compartilhada - 7 dias 📺',
        highlight: 'BÁSICO',
        stock: 120,
        benefits: [
            '📺 4K Ultra HD',
            '👥 Compartilhada',
            '🖥️ TV Only',
            '⚡ Entrega Rápida',
            '💰 Menor Preço'
        ]
    }
];

// Produtos de Assinaturas
export const subscriptionProducts = [
    {
        id: 'hbo-netflix-combo',
        name: '🔒 HBO + NETFLIX',
        emoji: '🔒',
        price: 16.99 + TAXA_ADICIONAL,
        category: 'subscriptions',
        description: `🔒 Acesso ao HBO e Netflix por 30 dias!
        
✅ Benefícios:
- HBO
- Netflix

(4 em estoque)`,
        shortDescription: 'HBO + Netflix - R$ ${(16.99 + TAXA_ADICIONAL).toFixed(2)}',
        stock: 4,
        benefits: [
            '📺 Acesso a HBO e Netflix',
            '📅 30 dias de acesso',
            '✅ Garantia de qualidade'
        ]
    },
    {
        id: 'combo-netflix-prime-paramount-hbo',
        name: 'COMBO/ NETFLIX + PRIME VIDEO + PARAMOUNT + HBO MAX',
        emoji: '🎉',
        price: 23.90,
        category: 'subscriptions',
        description: `🎉 Aproveite o melhor do entretenimento com este combo incrível!
        
✅ Inclui acesso a:
- Netflix
- Prime Video
- Paramount
- HBO Max

(27 em estoque)`,
        shortDescription: 'Combo de Assinaturas - R$ 23,90',
        stock: 27,
        benefits: [
            '🎬 Acesso a múltiplas plataformas',
            '💰 Melhor custo-benefício',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'combo-disney-prime-paramount-hbo',
        name: 'COMBO/ DISNEY 4K + PRIME VIDEO + PARAMOUNT + HBO MAX',
        emoji: '🌟',
        price: 19.90,
        category: 'subscriptions',
        description: `🌟 O melhor do streaming em um só lugar!
        
✅ Inclui acesso a:
- Disney+
- Prime Video
- Paramount
- HBO Max

(66 em estoque)`,
        shortDescription: 'Combo Disney + Prime + Paramount + HBO - R$ 19,90',
        stock: 66,
        benefits: [
            '🌈 Acesso a conteúdos exclusivos',
            '💰 Ótimo preço',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'youtube-premium-canva',
        name: 'YOUTUBE PREMIUM + CANVA PRO',
        emoji: '📹',
        price: 5.99,
        category: 'subscriptions',
        description: `📹 Aproveite o YouTube sem anúncios e tenha acesso ao Canva Pro!
        
✅ Benefícios:
- YouTube Premium por 30 dias
- Canva Pro para design gráfico

(55 em estoque)`,
        shortDescription: 'YouTube Premium + Canva Pro - R$ 5,99',
        stock: 55,
        benefits: [
            '🚫 Sem anúncios no YouTube',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'hbo-max-paramount',
        name: 'HBO MAX 4K + PARAMOUNT',
        emoji: '🎬',
        price: 11.90,
        category: 'subscriptions',
        description: `🎬 Acesso a HBO Max em 4K e Paramount!
        
✅ Benefícios:
- HBO Max em 4K
- Acesso a Paramount

(18 em estoque)`,
        shortDescription: 'HBO Max 4K + Paramount - R$ 11,90',
        stock: 18,
        benefits: [
            '🌟 Qualidade 4K',
            '🎥 Conteúdo exclusivo',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'amazon-prime-paramount',
        name: 'Amazon Prime - PRIME VÍDEO + PARAMOUNT',
        emoji: '📦',
        price: 3.99,
        category: 'subscriptions',
        description: `📦 Acesso ao Prime Video e Paramount por um preço incrível!
        
✅ Benefícios:
- Prime Video
- Paramount

(348 em estoque)`,
        shortDescription: 'Amazon Prime + Paramount - R$ 3,99',
        stock: 348,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '💰 Melhor preço',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'crunchyroll-canva',
        name: 'CRUNCHYROLL + CANVA PRO',
        emoji: '🍜',
        price: 2.00,
        category: 'subscriptions',
        description: `🍜 Acesso ao Crunchyroll e Canva Pro!
        
✅ Benefícios:
- Crunchyroll para animes
- Canva Pro para design

(142 em estoque)`,
        shortDescription: 'Crunchyroll + Canva Pro - R$ 2,00',
        stock: 142,
        benefits: [
            '🎉 Acesso a animes',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-10-days-canva',
        name: 'NETFLIX 10 DIAS DE GARANTIA + CANVA PRO',
        emoji: '🎥',
        price: 9.80,
        category: 'subscriptions',
        description: `🎥 Acesso ao Netflix por 10 dias e Canva Pro!
        
✅ Benefícios:
- Netflix por 10 dias
- Canva Pro para design

(59 em estoque)`,
        shortDescription: 'Netflix 10 dias + Canva Pro - R$ 9,80',
        stock: 59,
        benefits: [
            '📺 Acesso a Netflix',
            '🎨 Ferramentas de design premium',
            '📅 10 dias de acesso'
        ]
    },
    {
        id: 'max-hbo-paramount',
        name: '(02) - MAX / HBO MAX + Paramount',
        emoji: '🎬',
        price: 5.99,
        category: 'subscriptions',
        description: `🎬 Acesso ao MAX / HBO MAX e Paramount!
        
✅ Benefícios:
- HBO MAX
- Acesso a Paramount

(221 em estoque)`,
        shortDescription: 'MAX / HBO MAX + Paramount - R$ 5,99',
        stock: 221,
        benefits: [
            '🌟 Qualidade de streaming',
            '🎥 Conteúdo exclusivo',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-star-plus-canva',
        name: 'DISNEY + STAR PLUS 30 DIAS + CANVA',
        emoji: '🏰',
        price: 12.00,
        category: 'subscriptions',
        description: `🏰 Acesso ao Disney+ e Star Plus por 30 dias com Canva Pro!
        
✅ Benefícios:
- Disney+
- Star Plus
- Canva Pro

(320 em estoque)`,
        shortDescription: 'Disney + Star Plus + Canva - R$ 12,00',
        stock: 320,
        benefits: [
            '🎉 Acesso a múltiplas plataformas',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'prime-hbo-paramount-crunchyroll',
        name: '(02) PRIME VÍDEO + HBO MAX / PARAMOUNT / CRUNCHYROLL',
        emoji: '📦',
        price: 6.99,
        category: 'subscriptions',
        description: `📦 Acesso ao Prime Video, HBO MAX, Paramount e Crunchyroll!
        
✅ Benefícios:
- Prime Video
- HBO MAX
- Paramount
- Crunchyroll

(117 em estoque)`,
        shortDescription: 'Prime + HBO + Paramount + Crunchyroll - R$ 6,99',
        stock: 117,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '💰 Melhor preço',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'apple-tv-key',
        name: 'APPLE TV - KEY 3 MESES + CANVA PRO',
        emoji: '🍏',
        price: 4.99,
        category: 'subscriptions',
        description: `🍏 Acesso ao Apple TV por 3 meses e Canva Pro!
        
✅ Benefícios:
- Apple TV
- Canva Pro

(15 em estoque)`,
        shortDescription: 'Apple TV 3 meses + Canva Pro - R$ 4,99',
        stock: 15,
        benefits: [
            '📺 Acesso a Apple TV',
            '🎨 Ferramentas de design premium',
            '📅 3 meses de acesso'
        ]
    },
    {
        id: 'apple-music-key',
        name: 'APPLE MUSIC - KEY 3 MESES + CANVA PRO',
        emoji: '🎶',
        price: 3.99,
        category: 'subscriptions',
        description: `🎶 Acesso ao Apple Music por 3 meses e Canva Pro!
        
✅ Benefícios:
- Apple Music
- Canva Pro

(31 em estoque)`,
        shortDescription: 'Apple Music 3 meses + Canva Pro - R$ 3,99',
        stock: 31,
        benefits: [
            '🎵 Acesso a Apple Music',
            '🎨 Ferramentas de design premium',
            '📅 3 meses de acesso'
        ]
    },
    {
        id: 'yt-family-canva',
        name: 'YT PLANO FAMILIA (CONTA PRONTA) + CANVA',
        emoji: '📹',
        price: 10.00,
        category: 'subscriptions',
        description: `📹 Acesso ao YouTube Premium por 30 dias com nosso plano familiar.
        
✅ Benefícios:
- YouTube Premium
- Canva Pro

(55 em estoque)`,
        shortDescription: 'YouTube Premium + Canva - R$ 10,00',
        stock: 55,
        benefits: [
            '🚫 Sem anúncios no YouTube',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'mega-combo-netflix-prime-paramount-hbo',
        name: '😎 MEGA COMBO - NETFLIX + PRIME VIDEO + PARAMOUNT + HBO MAX',
        emoji: '🎉',
        price: 23.90,
        category: 'subscriptions',
        description: `🎉 O melhor do entretenimento em um só lugar!
        
✅ Inclui acesso a:
- Netflix
- Prime Video
- Paramount
- HBO Max

(27 em estoque)`,
        shortDescription: 'Mega Combo de Assinaturas - R$ 23,90',
        stock: 27,
        benefits: [
            '🎬 Acesso a múltiplas plataformas',
            '💰 Melhor custo-benefício',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'mega-combo-disney-prime-paramount-hbo',
        name: '😎 MEGA COMBO - DISNEY 4K + PRIME VIDEO + PARAMOUNT + HBO MAX',
        emoji: '🌟',
        price: 19.90,
        category: 'subscriptions',
        description: `🌟 O melhor do streaming em um só lugar!
        
✅ Inclui acesso a:
- Disney+
- Prime Video
- Paramount
- HBO Max

(66 em estoque)`,
        shortDescription: 'Mega Combo Disney + Prime + Paramount + HBO - R$ 19,90',
        stock: 66,
        benefits: [
            '🌈 Acesso a conteúdos exclusivos',
            '💰 Ótimo preço',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-star-espn',
        name: '⚡ DISNEY+ STAR + ESPN PREMIUM',
        emoji: '🏰',
        price: 9.99,
        category: 'subscriptions',
        description: `🏰 Acesso ao Disney+, Star e ESPN por 30 dias!
        
✅ Benefícios:
- Disney+
- Star+
- ESPN

(56 em estoque)`,
        shortDescription: 'Disney + Star + ESPN - R$ 9,99',
        stock: 56,
        benefits: [
            '🎉 Acesso a conteúdos exclusivos',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-hbo-prime',
        name: '⚡ NETFLIX 4K + HBO MAX + PRIME VIDEO',
        emoji: '🎥',
        price: 16.99,
        category: 'subscriptions',
        description: `🎥 Acesso ao Netflix 4K, HBO Max e Prime Video por 30 dias!
        
✅ Benefícios:
- Netflix 4K
- HBO Max
- Prime Video

(34 em estoque)`,
        shortDescription: 'Netflix 4K + HBO + Prime - R$ 16,99',
        stock: 34,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '💰 Melhor custo-benefício',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-hbo',
        name: '⚡ NETFLIX 4K + HBO MAX',
        emoji: '🎬',
        price: 14.99,
        category: 'subscriptions',
        description: `🎬 Acesso ao Netflix 4K e HBO Max por 30 dias!
        
✅ Benefícios:
- Netflix 4K
- HBO Max

(34 em estoque)`,
        shortDescription: 'Netflix 4K + HBO Max - R$ 14,99',
        stock: 34,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '💰 Melhor custo-benefício',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'youtube-premium-canva',
        name: '🎥 LINK YOUTUBE PREMIUM & MUSIC + CANVA [30 DIAS]',
        emoji: '🎶',
        price: 5.99,
        category: 'subscriptions',
        description: `🎶 Acesso ao YouTube Premium e Music com Canva Pro por 30 dias!
        
✅ Benefícios:
- YouTube Premium
- Canva Pro

(7 em estoque)`,
        shortDescription: 'YouTube Premium + Canva - R$ 5,99',
        stock: 7,
        benefits: [
            '🚫 Sem anúncios no YouTube',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'hbo-max-canva-30',
        name: '🎥 HBO/MAX + CANVA [30 DIAS]',
        emoji: '⚫️',
        price: 5.99,
        category: 'subscriptions',
        description: `⚫️ Acesso ao HBO Max e Canva Pro por 30 dias!
        
✅ Benefícios:
- HBO Max
- Canva Pro

(40 em estoque)`,
        shortDescription: 'HBO Max + Canva - R$ 5,99',
        stock: 40,
        benefits: [
            '📺 Acesso a HBO Max',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'prime-hbo-30',
        name: '🎥 PRIME VIDEO + HBO/MAX [30 DIAS]',
        emoji: '🔵',
        price: 6.99,
        category: 'subscriptions',
        description: `🔵 Acesso ao Prime Video e HBO Max por 30 dias!
        
✅ Benefícios:
- Prime Video
- HBO Max

(14 em estoque)`,
        shortDescription: 'Prime Video + HBO Max - R$ 6,99',
        stock: 14,
        benefits: [
            '📺 Acesso a Prime Video',
            '📺 Acesso a HBO Max',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-star-hbo-prime',
        name: '🎥 DISNEY/STAR + HBO/MAX + PRIME + APPLE TV [30 DIAS]',
        emoji: '🌟',
        price: 17.99,
        category: 'subscriptions',
        description: `🌟 Acesso ao Disney+, HBO Max, Prime Video e Apple TV por 30 dias!
        
✅ Benefícios:
- Disney+
- HBO Max
- Prime Video
- Apple TV

(4 em estoque)`,
        shortDescription: 'Disney + HBO + Prime + Apple - R$ 17,99',
        stock: 4,
        benefits: [
            '🎉 Acesso a múltiplas plataformas',
            '💰 Melhor custo-benefício',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-star-canva-7',
        name: '🎥 [7 DIAS] DISNEY/STAR + CANVA [7 DIAS DE GARANTIA]',
        emoji: '🏰',
        price: 5.99,
        category: 'subscriptions',
        description: `🏰 Acesso ao Disney+ e Canva Pro por 7 dias com garantia!
        
✅ Benefícios:
- Disney+
- Canva Pro

(51 em estoque)`,
        shortDescription: 'Disney + Canva - R$ 5,99',
        stock: 51,
        benefits: [
            '🎉 Acesso a conteúdos exclusivos',
            '🎨 Ferramentas de design premium',
            '📅 7 dias de acesso'
        ]
    },
    {
        id: 'hbo-max-canva-15',
        name: '🎥 [15 DIAS] HBO/MAX + CANVA [15 DIAS DE GARANTIA]',
        emoji: '⚫️',
        price: 4.99,
        category: 'subscriptions',
        description: `⚫️ Acesso ao HBO Max e Canva Pro por 15 dias com garantia!
        
✅ Benefícios:
- HBO Max
- Canva Pro

(43 em estoque)`,
        shortDescription: 'HBO Max + Canva - R$ 4,99',
        stock: 43,
        benefits: [
            '📺 Acesso a HBO Max',
            '🎨 Ferramentas de design premium',
            '📅 15 dias de acesso'
        ]
    },
    {
        id: 'paramount-prime-10',
        name: '🎥 [10 DIAS] PARAMOUNT + PRIME VIDEO [10 DIAS DE GARANTIA]',
        emoji: '⭐',
        price: 2.99,
        category: 'subscriptions',
        description: `⭐ Acesso ao Paramount e Prime Video por 10 dias com garantia!
        
✅ Benefícios:
- Paramount
- Prime Video

(68 em estoque)`,
        shortDescription: 'Paramount + Prime Video - R$ 2,99',
        stock: 68,
        benefits: [
            '📺 Acesso a Paramount',
            '📺 Acesso a Prime Video',
            '📅 10 dias de acesso'
        ]
    },
    {
        id: 'hbo-paramount-10',
        name: '🎥 [10 DIAS] HBO/MAX + PARAMOUNT [10 DIAS DE GARANTIA]',
        emoji: '🎬',
        price: 3.99,
        category: 'subscriptions',
        description: `🎬 Acesso ao HBO Max e Paramount por 10 dias com garantia!
        
✅ Benefícios:
- HBO Max
- Paramount

(69 em estoque)`,
        shortDescription: 'HBO Max + Paramount - R$ 3,99',
        stock: 69,
        benefits: [
            '📺 Acesso a HBO Max',
            '📺 Acesso a Paramount',
            '📅 10 dias de acesso'
        ]
    },
    {
        id: 'crunchyroll-canva-14',
        name: '🎥 [14 DIAS] CRUNCHYROLL + CANVA [14 DIAS DE GARANTIA]',
        emoji: '🍜',
        price: 2.00,
        category: 'subscriptions',
        description: `🍜 Acesso ao Crunchyroll e Canva Pro por 14 dias com garantia!
        
✅ Benefícios:
- Crunchyroll
- Canva Pro

(11 em estoque)`,
        shortDescription: 'Crunchyroll + Canva - R$ 2,00',
        stock: 11,
        benefits: [
            '🎉 Acesso a animes',
            '🎨 Ferramentas de design premium',
            '📅 14 dias de acesso'
        ]
    },
    {
        id: 'deezer-canva-30',
        name: 'DEEZER PREMIUM + CANVA PRO 30 DIAS',
        emoji: '🎶',
        price: 2.99,
        category: 'subscriptions',
        description: `🎶 Acesso ao Deezer Premium e Canva Pro por 30 dias!
        
✅ Benefícios:
- Deezer Premium
- Canva Pro

(1 em estoque)`,
        shortDescription: 'Deezer Premium + Canva - R$ 2,99',
        stock: 1,
        benefits: [
            '🎵 Acesso a música sem anúncios',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'apple-tv-canva-30',
        name: '🎥 CONTA APPLE TV + CANVA [30 DIAS]',
        emoji: '🍏',
        price: 7.99,
        category: 'subscriptions',
        description: `🍏 Acesso à Apple TV e Canva Pro por 30 dias!
        
✅ Benefícios:
- Apple TV
- Canva Pro

(108 em estoque)`,
        shortDescription: 'Apple TV + Canva - R$ 7,99',
        stock: 108,
        benefits: [
            '📺 Acesso a Apple TV',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'ufc-fight-pass-canva-7',
        name: '🎥 CONTA PRIVADA | UFC FIGHT PASS + CANVA [7 DIAS]',
        emoji: '🥊',
        price: 29.99,
        category: 'subscriptions',
        description: `🥊 Acesso ao UFC Fight Pass e Canva Pro por 7 dias!
        
✅ Benefícios:
- UFC Fight Pass
- Canva Pro

(5 em estoque)`,
        shortDescription: 'UFC Fight Pass + Canva - R$ 29,99',
        stock: 5,
        benefits: [
            '🎉 Acesso a eventos ao vivo',
            '🎨 Ferramentas de design premium',
            '📅 7 dias de acesso'
        ]
    },
    {
        id: 'nba-league-pass-canva-7',
        name: '🎥 CONTA PRIVADA | NBA LEAGUE PASS + CANVA [7 DIAS]',
        emoji: '🏀',
        price: 29.99,
        category: 'subscriptions',
        description: `🏀 Acesso ao NBA League Pass e Canva Pro por 7 dias!
        
✅ Benefícios:
- NBA League Pass
- Canva Pro

(5 em estoque)`,
        shortDescription: 'NBA League Pass + Canva - R$ 29,99',
        stock: 5,
        benefits: [
            '🎉 Acesso a jogos ao vivo',
            '🎨 Ferramentas de design premium',
            '📅 7 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-30-pin',
        name: 'NETFLIX 4K 30 DIAS | 1 TELA COM PIN',
        emoji: '📺',
        price: 16.90,
        category: 'subscriptions',
        description: `📺 Acesso ao Netflix 4K por 30 dias com 1 tela e PIN!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- 1 Tela com PIN
- Suporte 30 dias
- Envio rápido

(146507 em estoque)`,
        shortDescription: 'Netflix 4K 30 dias - R$ 16,90',
        stock: 146507,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta com PIN',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-30-pin-tv',
        name: '[SOMENTE PARA TV] NETFLIX 4K 30 DIAS | 1 TELA COM PIN',
        emoji: '📺',
        price: 15.90,
        category: 'subscriptions',
        description: `📺 Acesso ao Netflix 4K por 30 dias com 1 tela e PIN, exclusivo para TV!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- 1 Tela com PIN
- Suporte 30 dias
- Envio rápido

(13619 em estoque)`,
        shortDescription: 'Netflix 4K TV 30 dias - R$ 15,90',
        stock: 13619,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta com PIN',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-10-days-shared',
        name: 'NETFLIX 10 DIAS COMPARTILHADA',
        emoji: '🎬',
        price: 5.89,
        category: 'subscriptions',
        description: `🎬 Acesso ao Netflix por 10 dias, conta compartilhada!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- 10 Dias de Acesso
- Suporte Básico
- Envio Automático

(5149 em estoque)`,
        shortDescription: 'Netflix 10 dias compartilhada - R$ 5,89',
        stock: 5149,
        benefits: [
            '📺 Acesso a Netflix',
            '👥 Conta compartilhada',
            '📅 10 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-7-days-shared',
        name: '[SOMENTE PARA TV] NETFLIX 4K 7 DIAS COMPARTILHADA',
        emoji: '🎞️',
        price: 2.99,
        category: 'subscriptions',
        description: `📺 Acesso ao Netflix 4K por 7 dias, conta compartilhada, exclusivo para TV!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- 7 Dias de Acesso
- Suporte via Chat
- Envio Automático

(120 em estoque)`,
        shortDescription: 'Netflix TV 4K 7 dias compartilhada - R$ 2,99',
        stock: 120,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '👥 Conta compartilhada',
            '📅 7 dias de acesso'
        ]
    },
    {
        id: 'max-standart-paramount',
        name: 'MAX STANDART + PARAMOUNT 30 dias',
        emoji: '🎥',
        price: 5.00,
        category: 'subscriptions',
        description: `🎥 Acesso ao Max Standart e Paramount por 30 dias!
        
✅ Benefícios:
- Max Standart
- Paramount

(3 em estoque)`,
        shortDescription: 'Max Standart + Paramount - R$ 5,00',
        stock: 3,
        benefits: [
            '📺 Acesso a Max Standart',
            '📺 Acesso a Paramount',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'prime-video-max',
        name: 'PRIME VIDEO + MAX STANDART - 30 DIAS',
        emoji: '📦',
        price: 5.00,
        category: 'subscriptions',
        description: `📦 Acesso ao Prime Video e Max Standart por 30 dias!
        
✅ Benefícios:
- Prime Video
- Max Standart

(2 em estoque)`,
        shortDescription: 'Prime Video + Max Standart - R$ 5,00',
        stock: 2,
        benefits: [
            '📺 Acesso a Prime Video',
            '📺 Acesso a Max Standart',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'max-crunchyroll',
        name: 'MAX STANDART + CRUNCHYROLL 30 DIAS',
        emoji: '🍜',
        price: 5.00,
        category: 'subscriptions',
        description: `🍜 Acesso ao Max Standart e Crunchyroll por 30 dias!
        
✅ Benefícios:
- Max Standart
- Crunchyroll

(2 em estoque)`,
        shortDescription: 'Max Standart + Crunchyroll - R$ 5,00',
        stock: 2,
        benefits: [
            '📺 Acesso a Max Standart',
            '🎉 Acesso a animes',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-prime',
        name: 'DISNEY PLUS + PRIME VIDEO',
        emoji: '🏰',
        price: 9.00,
        category: 'subscriptions',
        description: `🏰 Acesso ao Disney+ e Prime Video por 30 dias!
        
✅ Benefícios:
- Disney+
- Prime Video

(9 em estoque)`,
        shortDescription: 'Disney + Prime Video - R$ 9,00',
        stock: 9,
        benefits: [
            '🎉 Acesso a conteúdos exclusivos',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'prime-crunchyroll-disney',
        name: 'Prime video/ Crunchyroll/ disney+star',
        emoji: '🎬',
        price: 9.50,
        category: 'subscriptions',
        description: `🎬 Acesso ao Prime Video, Crunchyroll e Disney+Star por 30 dias!
        
✅ Benefícios:
- Prime Video
- Crunchyroll
- Disney+Star

(2 em estoque)`,
        shortDescription: 'Prime + Crunchyroll + Disney - R$ 9,50',
        stock: 2,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'crunchyroll-apple-tv',
        name: 'CRUNCHYROLL + APPLE TV - 30 dias',
        emoji: '🍏',
        price: 5.00,
        category: 'subscriptions',
        description: `🍏 Acesso ao Crunchyroll e Apple TV por 30 dias!
        
✅ Benefícios:
- Crunchyroll
- Apple TV

(3 em estoque)`,
        shortDescription: 'Crunchyroll + Apple TV - R$ 5,00',
        stock: 3,
        benefits: [
            '🎉 Acesso a animes',
            '📺 Acesso a Apple TV',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'my-family-cinema',
        name: 'MY FAMILY CINEMA + PARAMOUNT + MAX STANDART',
        emoji: '🎥',
        price: 4.80,
        category: 'subscriptions',
        description: `🎥 Acesso ao My Family Cinema, Paramount e Max Standart por 30 dias!
        
✅ Benefícios:
- My Family Cinema
- Paramount
- Max Standart

(2 em estoque)`,
        shortDescription: 'My Family Cinema + Paramount + Max - R$ 4,80',
        stock: 2,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'paramount-disney',
        name: 'PARAMOUNT + DISNEY',
        emoji: '🏰',
        price: 9.00,
        category: 'subscriptions',
        description: `🏰 Acesso ao Paramount e Disney por 30 dias!
        
✅ Benefícios:
- Paramount
- Disney

(4 em estoque)`,
        shortDescription: 'Paramount + Disney - R$ 9,00',
        stock: 4,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-apple-tv',
        name: 'DISNEY PLUS + APPLE TV',
        emoji: '🍏',
        price: 9.00,
        category: 'subscriptions',
        description: `🍏 Acesso ao Disney+ e Apple TV por 30 dias!
        
✅ Benefícios:
- Disney+
- Apple TV

(4 em estoque)`,
        shortDescription: 'Disney + Apple TV - R$ 9,00',
        stock: 4,
        benefits: [
            '🎉 Acesso a conteúdos exclusivos',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'max-paramount-prime',
        name: 'MAX STANDART + PARAMOUNT + PRIME VÍDEO',
        emoji: '🎥',
        price: 5.00,
        category: 'subscriptions',
        description: `🎥 Acesso ao Max Standart, Paramount e Prime Video por 30 dias!
        
✅ Benefícios:
- Max Standart
- Paramount
- Prime Video

(1 em estoque)`,
        shortDescription: 'Max + Paramount + Prime - R$ 5,00',
        stock: 1,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'combo-streaming',
        name: 'MONTE SEU COMBO (4 STREAMING) EXCETO NETFLIX',
        emoji: '🎉',
        price: 11.00,
        category: 'subscriptions',
        description: `🎉 Escolha 3 itens de streaming, exceto Netflix!
        
✅ Benefícios:
- Escolha entre várias opções de streaming

(20 em estoque)`,
        shortDescription: 'Monte seu combo - R$ 11,00',
        stock: 20,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'apple-tv-canva-prime',
        name: 'CONTA APPLE TV + CANVA + PRIME VIDEO',
        emoji: '🍏',
        price: 4.00,
        category: 'subscriptions',
        description: `🍏 Acesso à Apple TV, Canva Pro e Prime Video por 30 dias!
        
✅ Benefícios:
- Apple TV
- Canva Pro
- Prime Video

(3 em estoque)`,
        shortDescription: 'Apple TV + Canva + Prime - R$ 4,00',
        stock: 3,
        benefits: [
            '📺 Acesso a Apple TV',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'youtube-premium-family',
        name: 'YOUTUBE PREM FAMILIA NO SEU EMAIL + CANVA + PRIME VIDEO',
        emoji: '🎶',
        price: 5.90,
        category: 'subscriptions',
        description: `🎶 Acesso ao YouTube Premium em família, Canva Pro e Prime Video por 30 dias!
        
✅ Benefícios:
- YouTube Premium
- Canva Pro
- Prime Video

(3 em estoque)`,
        shortDescription: 'YouTube Premium + Canva + Prime - R$ 5,90',
        stock: 3,
        benefits: [
            '🚫 Sem anúncios no YouTube',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-private-pin-30',
        name: 'TELA PRIVADA COM PIN (GARANTIA 30 DIAS)',
        emoji: '📺',
        price: 12.90,
        category: 'subscriptions',
        description: `📺 Acesso ao Netflix 4K por 30 dias com tela privada e PIN!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- TELA PRIVADA COM PIN
- Garantia de 30 dias
- Suporte 24/7

(10 em estoque)`,
        shortDescription: 'Netflix 4K - TELA PRIVADA 30 dias - R$ 12,90',
        stock: 10,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta com PIN',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-private-tv-30',
        name: '[SOMENTE EM TV] TELA NETFLIX PRIVADA 4K 30 DIAS',
        emoji: '📺',
        price: 9.98,
        category: 'subscriptions',
        description: `📺 Acesso ao Netflix 4K por 30 dias com tela privada, exclusivo para TV!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- TELA PRIVADA
- Garantia de 30 dias
- Suporte 24/7

(15 em estoque)`,
        shortDescription: 'Netflix TV PRIVADA 4K 30 dias - R$ 9,98',
        stock: 15,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta privada',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-7-days-shared',
        name: 'TELA PRIVADA COM PIN (GARANTIA 7 DIAS)',
        emoji: '🎬',
        price: 2.99,
        category: 'subscriptions',
        description: `🎬 Acesso ao Netflix por 7 dias com tela privada e PIN!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- TELA PRIVADA COM PIN
- Garantia de 7 dias
- Suporte 24/7

(18 em estoque)`,
        shortDescription: 'Netflix 4K - TELA PRIVADA 7 dias - R$ 2,99',
        stock: 18,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta com PIN',
            '📅 7 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-private-30',
        name: 'NETFLIX 4K - TELA PRIVADA EXCLUSIVA POR 30 DIAS + BRINDE!',
        emoji: '🎥',
        price: 12.90,
        category: 'subscriptions',
        description: `🎥 Acesso ao Netflix 4K por 30 dias com tela privada e brinde!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- TELA PRIVADA
- Garantia de 30 dias
- Suporte 24/7

(10 em estoque)`,
        shortDescription: 'Netflix 4K - TELA PRIVADA 30 dias - R$ 12,90',
        stock: 10,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta privada',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-private-7',
        name: 'NETFLIX 4K - TELA PRIVADA EXCLUSIVA POR 7 DIAS',
        emoji: '🎥',
        price: 2.99,
        category: 'subscriptions',
        description: `🎥 Acesso ao Netflix 4K por 7 dias com tela privada!
        
✅ Benefícios:
- Qualidade 4K Ultra HD
- TELA PRIVADA
- Garantia de 7 dias
- Suporte 24/7

(10 em estoque)`,
        shortDescription: 'Netflix 4K - TELA PRIVADA 7 dias - R$ 2,99',
        stock: 10,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🔒 Conta privada',
            '📅 7 dias de acesso'
        ]
    },
    {
        id: 'prime-video-hbo-max',
        name: 'PRIME VIDEO + HBO MAX 30 DIAS',
        emoji: '📦',
        price: 4.29,
        category: 'subscriptions',
        description: `📦 Acesso ao Prime Video e HBO Max por 30 dias!
        
✅ Benefícios:
- Prime Video
- HBO Max

(10 em estoque)`,
        shortDescription: 'Prime Video + HBO Max - R$ 4,29',
        stock: 10,
        benefits: [
            '📺 Acesso a Prime Video',
            '📺 Acesso a HBO Max',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'disney-star-espn',
        name: 'DISNEY PREMIUM + STAR PLUS + ESPN 30 DIAS',
        emoji: '🏰',
        price: 10.99,
        category: 'subscriptions',
        description: `🏰 Acesso ao Disney+, Star Plus e ESPN por 30 dias!
        
✅ Benefícios:
- Disney+
- Star Plus
- ESPN

(5 em estoque)`,
        shortDescription: 'Disney + Star + ESPN - R$ 10,99',
        stock: 5,
        benefits: [
            '🎉 Acesso a conteúdos exclusivos',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'paramount-plus-canva',
        name: 'PARAMOUNT PLUS + CANVA PRO 30 DIAS',
        emoji: '🎥',
        price: 2.49,
        category: 'subscriptions',
        description: `🎥 Acesso ao Paramount Plus e Canva Pro por 30 dias!
        
✅ Benefícios:
- Paramount Plus
- Canva Pro

(8 em estoque)`,
        shortDescription: 'Paramount Plus + Canva - R$ 2,49',
        stock: 8,
        benefits: [
            '📺 Acesso a Paramount Plus',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'prime-video-crunchyroll',
        name: 'PRIME VIDEO + CRUNCHYROLL 30 DIAS',
        emoji: '🍜',
        price: 2.99,
        category: 'subscriptions',
        description: `🍜 Acesso ao Prime Video e Crunchyroll por 30 dias!
        
✅ Benefícios:
- Prime Video
- Crunchyroll

(14 em estoque)`,
        shortDescription: 'Prime Video + Crunchyroll - R$ 2,99',
        stock: 14,
        benefits: [
            '📺 Acesso a Prime Video',
            '🎉 Acesso a animes',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'hbo-max-crunchyroll',
        name: 'HBO MAX + CRUNCHYROLL 30 DIAS',
        emoji: '🎬',
        price: 4.29,
        category: 'subscriptions',
        description: `🎬 Acesso ao HBO Max e Crunchyroll por 30 dias!
        
✅ Benefícios:
- HBO Max
- Crunchyroll

(7 em estoque)`,
        shortDescription: 'HBO Max + Crunchyroll - R$ 4,29',
        stock: 7,
        benefits: [
            '📺 Acesso a HBO Max',
            '🎉 Acesso a animes',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'prime-video-canva',
        name: 'PRIME VIDEO + CANVA PRO 30 DIAS',
        emoji: '📦',
        price: 2.00,
        category: 'subscriptions',
        description: `📦 Acesso ao Prime Video e Canva Pro por 30 dias!
        
✅ Benefícios:
- Prime Video
- Canva Pro

(8 em estoque)`,
        shortDescription: 'Prime Video + Canva - R$ 2,00',
        stock: 8,
        benefits: [
            '📺 Acesso a Prime Video',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'paramount-plus-prime',
        name: 'PARAMOUNT PLUS + PRIME VIDEO 30 DIAS',
        emoji: '🏰',
        price: 3.49,
        category: 'subscriptions',
        description: `🏰 Acesso ao Paramount Plus e Prime Video por 30 dias!
        
✅ Benefícios:
- Paramount Plus
- Prime Video

(10 em estoque)`,
        shortDescription: 'Paramount + Prime Video - R$ 3,49',
        stock: 10,
        benefits: [
            '📺 Acesso a Paramount Plus',
            '📺 Acesso a Prime Video',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'max-hbo-canva',
        name: 'MAX HBO + CANVA PRO 30 DIAS',
        emoji: '🎥',
        price: 2.99,
        category: 'subscriptions',
        description: `🎥 Acesso ao Max HBO e Canva Pro por 30 dias!
        
✅ Benefícios:
- Max HBO
- Canva Pro

(8 em estoque)`,
        shortDescription: 'Max HBO + Canva - R$ 2,99',
        stock: 8,
        benefits: [
            '📺 Acesso a Max HBO',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'crunchyroll-canva-30',
        name: 'CRUNCHYROLL + CANVA PRO 30 DIAS',
        emoji: '🍜',
        price: 3.00,
        category: 'subscriptions',
        description: `🍜 Acesso ao Crunchyroll e Canva Pro por 30 dias!
        
✅ Benefícios:
- Crunchyroll
- Canva Pro

(5 em estoque)`,
        shortDescription: 'Crunchyroll + Canva - R$ 3,00',
        stock: 5,
        benefits: [
            '🎉 Acesso a animes',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'apple-tv-canva-30',
        name: 'APPLE TV [ CONTA ] + CANVA PRO 30 DIAS',
        emoji: '🍏',
        price: 2.50,
        category: 'subscriptions',
        description: `🍏 Acesso à Apple TV e Canva Pro por 30 dias!
        
✅ Benefícios:
- Apple TV
- Canva Pro

(13 em estoque)`,
        shortDescription: 'Apple TV + Canva - R$ 2,50',
        stock: 13,
        benefits: [
            '📺 Acesso a Apple TV',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'deezer-canva-30',
        name: 'DEEZER PREMIUM + CANVA PRO 30 DIAS',
        emoji: '🎶',
        price: 2.99,
        category: 'subscriptions',
        description: `🎶 Acesso ao Deezer Premium e Canva Pro por 30 dias!
        
✅ Benefícios:
- Deezer Premium
- Canva Pro

(1 em estoque)`,
        shortDescription: 'Deezer Premium + Canva - R$ 2,99',
        stock: 1,
        benefits: [
            '🎵 Acesso a música sem anúncios',
            '🎨 Ferramentas de design premium',
            '📅 30 dias de acesso'
        ]
    },
    {
        id: 'netflix-4k-premium-10',
        name: 'NETFLIX 4K PREMIUM 10 DIAS + CANVA PRO 30 DIAS',
        emoji: '🎥',
        price: 5.99,
        category: 'subscriptions',
        description: `🎥 Acesso ao Netflix 4K por 10 dias e Canva Pro por 30 dias!
        
✅ Benefícios:
- Netflix 4K
- Canva Pro

(1 em estoque)`,
        shortDescription: 'Netflix 4K 10 dias + Canva - R$ 5,99',
        stock: 1,
        benefits: [
            '📺 Acesso a Netflix 4K',
            '🎨 Ferramentas de design premium',
            '📅 10 dias de acesso'
        ]
    },
    {
        id: 'combo-three-items',
        name: '3 ITENS DA SUA ESCOLHA [SEM NETFLIX]',
        emoji: '🎉',
        price: 10.99,
        category: 'subscriptions',
        description: `🎉 Escolha 3 itens de streaming, exceto Netflix!
        
✅ Benefícios:
- Escolha entre várias opções de streaming

(6 em estoque)`,
        shortDescription: 'Monte seu combo - R$ 10,99',
        stock: 6,
        benefits: [
            '📺 Acesso a múltiplas plataformas',
            '📅 30 dias de acesso'
        ]
    }
];

// Produtos de Blue Locks
export const blueLocksProducts = [
    {
        id: 'vip-blue-locks',
        name: 'VIP Blue Locks 👑',
        emoji: '👑',
        price: 20.00,
        category: 'blue-locks',
        description: `✨ VIP EXCLUSIVO BLUE LOCK RIVALS

🌟 Benefícios VIP:
• 2x Mais Moedas no Jogo
• 2x Mais Experiência
• Player Card Exclusivo
• Tag VIP no Chat
• Acesso a Itens Especiais

💫 Características:
• Permanente
• Ativação Instantânea
• Suporte Prioritário
• Atualizações Exclusivas

⚽ Desbloqueie seu Potencial!`,
        shortDescription: 'VIP com 2x Moedas, 2x EXP e muito mais! ✨',
        highlight: '🔥 MAIS VENDIDO',
        stock: 50,
        benefits: [
            '💰 2x Mais Moedas no Jogo',
            '📈 2x Mais Experiência',
            '🎴 Player Card Exclusivo',
            '💬 Tag VIP no Chat',
            '🎁 Benefícios Exclusivos'
        ]
    },
    {
        id: 'cash-99k',
        name: '99k Cash 💰',
        emoji: '💰',
        price: 40.00,
        category: 'blue-locks',
        description: `💸 99.000 CASH BLUE LOCK RIVALS

💎 O que você recebe:
• 99.000 Cash no Jogo
• Entrega Instantânea
• Sem Espera
• Suporte 24/7

🛍️ Use seu Cash para:
• Comprar Itens Raros
• Desbloquear Personagens
• Adquirir Habilidades
• Personalizar seu Jogador

⚡ Entrega Automática!`,
        shortDescription: '99.000 Cash para gastar no jogo! 💸',
        highlight: '💎 MELHOR CUSTO-BENEFÍCIO',
        stock: 100,
        benefits: [
            '💰 99k Cash Instantâneo',
            '🎮 Compre Itens Especiais',
            '📈 Desbloqueie Conteúdo',
            '⚡ Entrega Imediata'
        ]
    },
    {
        id: 'anime-emotes',
        name: 'Anime Emotes 🎭',
        emoji: '🎭',
        price: 16.00,
        category: 'blue-locks',
        description: `🎭 EMOTES DE ANIME EXCLUSIVOS

😎 Pack Inclui:
• Emotes Exclusivos de Anime
• Expressões Únicas
• Alta Qualidade
• Atualizações Mensais

🌟 Características:
• Permanente
• Uso Ilimitado
• Animações Suaves
• Design Premium

✨ Expresse-se com Estilo!`,
        shortDescription: 'Pack com emotes de anime exclusivos! 🎭',
        highlight: '✨ NOVO',
        stock: 30,
        benefits: [
            '🎭 Emotes Exclusivos',
            '🌟 Expressões Únicas',
            '✨ Alta Qualidade',
            '🔄 Atualizações Mensais'
        ]
    },
    {
        id: 'goal-effects',
        name: 'Goal Effects Pack ⚽',
        emoji: '⚽',
        price: 8.00,
        category: 'blue-locks',
        description: `⚽ EFEITOS ESPECIAIS DE GOL

🎯 Inclui:
• Efeitos Visuais Incríveis
• Animações Especiais
• Partículas Personalizadas
• Sons Únicos

✨ Características:
• Efeitos Permanentes
• Múltiplos Estilos
• Alta Qualidade Visual
• Personalizável

🌟 Comemore com Estilo!`,
        shortDescription: 'Efeitos especiais para seus gols! ⚽',
        stock: 45,
        benefits: [
            '🎯 Efeitos Incríveis',
            '🌟 Comemore com Estilo',
            '✨ Diversos Efeitos',
            '⚡ Destaque-se em Campo'
        ]
    },
    {
        id: 'toxic-emotes',
        name: 'Toxic Emotes 😈',
        emoji: '😈',
        price: 8.00,
        category: 'blue-locks',
        description: `😈 EMOTES TÓXICOS BLUE LOCK

🎭 Pack Inclui:
• Emotes Provocativos
• Expressões Tóxicas
• Animações Exclusivas
• Atualizações Mensais

⚡ Características:
• Permanente
• Uso Ilimitado
• Alta Qualidade
• Design Premium

🔥 Provoque com Estilo!`,
        shortDescription: 'Emotes provocativos para intimidar! 😈',
        stock: 25,
        benefits: [
            '😈 Emotes Provocantes',
            '🎭 Intimide Rivais',
            '✨ Expressões Únicas',
            '🔄 Updates Mensais'
        ]
    },
    {
        id: 'player-cards',
        name: 'Player Cards Pack 🎴',
        emoji: '🎴',
        price: 6.50,
        category: 'blue-locks',
        description: `🎴 CARDS EXCLUSIVOS BLUE LOCK

🌟 Pack Inclui:
• Cards Personalizados
• Designs Exclusivos
• Bordas Especiais
• Efeitos Visuais

✨ Características:
• Permanente
• Colecionável
• Alta Qualidade
• Raridades Diferentes

💫 Mostre seu Estilo!`,
        shortDescription: 'Cards exclusivos para seu perfil! 🎴',
        stock: 40,
        benefits: [
            '🎴 Cards Únicos',
            '✨ Designs Premium',
            '🌟 Efeitos Especiais',
            '💫 Coleção Exclusiva'
        ]
    },
    {
        id: 'awakening-outfits',
        name: 'Awakening Outfits 👕',
        emoji: '👕',
        price: 6.50,
        category: 'blue-locks',
        description: `👕 ROUPAS AWAKENING MODE

🎽 Pack Inclui:
• Roupas Exclusivas
• Designs Especiais
• Efeitos Visuais
• Cores Únicas

✨ Características:
• Permanente
• Alta Qualidade
• Personalizável
• Visual Premium

🌟 Vista-se com Estilo!`,
        shortDescription: 'Roupas especiais do modo Awakening! 👕',
        stock: 35,
        benefits: [
            '👕 Visuais Únicos',
            '🎽 Roupas Premium',
            '✨ Alta Qualidade',
            '🌟 Destaque-se'
        ]
    },
    {
        id: 'goal-sound',
        name: 'Goal Sound 🔊',
        emoji: '🔊',
        price: 6.50,
        category: 'blue-locks',
        description: `🔊 SONS DE GOL ESPECIAIS

🎵 Pack Inclui:
• Sons Personalizados
• Efeitos Sonoros
• Músicas Exclusivas
• Comemorações Únicas

✨ Características:
• Permanente
• Alta Qualidade
• Personalizável
• Som Premium

🌟 Comemore com Estilo!`,
        shortDescription: 'Sons especiais para seus gols! 🔊',
        stock: 50,
        benefits: [
            '🔊 Sons Únicos',
            '🎵 Efeitos Premium',
            '✨ Alta Qualidade',
            '🌟 Comemore Diferente'
        ]
    },
    {
        id: 'ankle-breaker',
        name: 'Ankle Breaker Sound 🦶',
        emoji: '🦶',
        price: 6.50,
        category: 'blue-locks',
        description: 'Som especial ao quebrar tornozelos!',
        stock: 30,
        benefits: [
            'Som Satisfatório',
            'Efeito Realista',
            'Intimide Adversários',
            'Qualidade Premium'
        ]
    },
    {
        id: 'emotes-pack',
        name: 'Emotes Pack 😎',
        emoji: '😎',
        price: 4.00,
        category: 'blue-locks',
        description: 'Pacote completo de emotes básicos!',
        stock: 60,
        benefits: [
            'Variedade de Emotes',
            'Expressões Divertidas',
            'Atualizações Frequentes',
            'Preço Acessível'
        ]
    },
    {
        id: 'skip-spins',
        name: 'Skip Spins ⏩',
        emoji: '⏩',
        price: 4.00,
        category: 'blue-locks',
        description: 'Pule giros e ganhe recompensas instantâneas!',
        stock: 100,
        benefits: [
            'Economize Tempo',
            'Recompensas Instantâneas',
            'Sem Espera',
            'Use Quando Quiser'
        ]
    }
];

// Adicionar todos os produtos de Assinaturas à lista de produtos
products.push(
    ...subscriptionProducts,
    ...blueLocksProducts
);

// Adicionar array de ofertas relâmpago
export const flashDeals = [
    {
        id: 'flash1',
        name: 'Super Smartphone',
        emoji: '📱',
        price: 1499.99,
        oldPrice: 2999.99,
        description: 'Smartphone top de linha com 50% OFF!',
        discount: 50,
        stock: 5,
        endTime: new Date().getTime() + (24 * 60 * 60 * 1000) // 24 horas
    },
    {
        id: 'flash2',
        name: 'Fones Wireless',
        emoji: '🎧',
        price: 199.99,
        oldPrice: 499.99,
        description: 'Fones de ouvido com cancelamento de ruído',
        discount: 60,
        stock: 8,
        endTime: new Date().getTime() + (12 * 60 * 60 * 1000) // 12 horas
    },
    {
        id: 'flash3',
        name: 'Smartwatch Pro',
        emoji: '⌚',
        price: 599.99,
        oldPrice: 1299.99,
        description: 'Relógio inteligente com GPS e monitor cardíaco',
        discount: 55,
        stock: 3,
        endTime: new Date().getTime() + (8 * 60 * 60 * 1000) // 8 horas
    }
];

// Função para renderizar produtos
export function renderProducts(category = 'subscriptions') {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    // Filtrar produtos por categoria
    let filteredProducts = products;
    if (category && category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }

    // Aplicar ordenação
    const sortSelect = document.getElementById('sortFilter');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        switch (sortValue) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'recent':
                // Assumindo que produtos mais recentes estão no final do array
                filteredProducts.reverse();
                break;
            // 'popular' é a ordem padrão
        }
    }

    // Renderizar produtos
    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-badges">
                ${product.highlight ? `<span class="badge hot">${product.highlight}</span>` : ''}
                ${product.oldPrice ? `<span class="badge discount">-${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <div class="product-image">
                <span class="product-emoji">${product.emoji}</span>
            </div>
            <div class="product-info">
                <div class="product-category">
                    <i class="fas fa-tag"></i> ${product.category}
                </div>
                <h4>${product.name}</h4>
                <div class="product-meta">
                    <div class="stock-info">
                        <i class="fas fa-box"></i> ${product.stock} em estoque
                    </div>
                    <div class="delivery-info">
                        <i class="fas fa-bolt"></i> Entrega Instantânea
                    </div>
                </div>
                <div class="product-price">
                    ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                    <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart('${product.id}')">
                    <i class="fas fa-shopping-cart"></i>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');

    // Adicionar event listeners para os cards de produto
    const productCards = productsContainer.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                const productId = card.dataset.productId;
                const product = products.find(p => p.id === productId);
                if (product) {
                    openPreviewModal(product);
                }
            }
        });
    });
}

// Função para buscar produtos
export function searchProducts(query) {
    const productsContainer = document.getElementById('products');
    if (!productsContainer || !query) {
        renderProducts(); // Se não houver query, mostrar todos os produtos
        return;
    }

    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );

    renderProducts('all', searchResults);
}

// Inicializar produtos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // Adicionar event listeners para filtros
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            renderProducts(categoryFilter.value);
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            renderProducts(categoryFilter?.value || 'all');
        });
    }
});