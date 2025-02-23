// Array principal de produtos
export const products = [
    {
        id: 'netflix-premium',
        name: 'Netflix Premium 4K',
        emoji: '📺',
        price: 21.90,
        oldPrice: 29.90,
        category: 'streaming',
        description: `✨ CONTA NETFLIX PREMIUM 4K
        
🎯 Características:
• Ultra HD 4K Garantido
• 30 dias de Acesso
• Suporte Premium 24/7
• Garantia de Funcionamento`,
        shortDescription: 'Netflix 4K - 30 dias de acesso',
        highlight: '⭐ PREMIUM',
        stock: 50,
        benefits: [
            '📺 4K Ultra HD',
            '🎮 Todos os Dispositivos',
            '⚡ Entrega Automática',
            '🔧 Suporte 24/7'
        ]
    },
    {
        id: 'disney-plus',
        name: 'Disney+ Premium',
        emoji: '🏰',
        price: 16.90,
        category: 'streaming',
        description: `✨ CONTA DISNEY+ PREMIUM
        
🎯 Características:
• Qualidade 4K HDR
• 30 dias de Acesso
• Perfil Próprio
• Suporte 24/7`,
        shortDescription: 'Disney+ - 30 dias de acesso',
        highlight: '✨ NOVO',
        stock: 30,
        benefits: [
            '🎬 4K HDR',
            '👥 Perfil Individual',
            '⚡ Entrega Imediata',
            '🔧 Suporte Premium'
        ]
    },
    {
        id: 'prime-video',
        name: 'Prime Video',
        emoji: '🎥',
        price: 14.90,
        oldPrice: 19.90,
        category: 'streaming',
        description: `✨ AMAZON PRIME VIDEO
        
🎯 Inclui:
• Prime Video HD
• Amazon Prime
• Prime Gaming
• Frete Grátis`,
        shortDescription: 'Prime Video + Amazon Prime',
        stock: 25,
        benefits: [
            '🎬 Conteúdo HD',
            '🎮 Prime Gaming',
            '📦 Frete Grátis',
            '💫 Benefícios Prime'
        ]
    },
    {
        id: 'hbo-max',
        name: 'HBO Max',
        emoji: '🌟',
        price: 18.90,
        category: 'streaming',
        description: `✨ HBO MAX PREMIUM
        
🎯 Características:
• Qualidade 4K
• 30 dias de Acesso
• Conteúdo Exclusivo
• Suporte VIP`,
        shortDescription: 'HBO Max - 30 dias Premium',
        highlight: '🔥 DESTAQUE',
        stock: 40,
        benefits: [
            '📺 4K Ultra HD',
            '🎬 Conteúdo Exclusivo',
            '⚡ Ativação Rápida',
            '👑 Suporte VIP'
        ]
    },
    {
        id: 'game-pass',
        name: 'Game Pass Ultimate',
        emoji: '🎮',
        price: 25.00,
        category: 'games',
        description: `🎮 XBOX GAME PASS ULTIMATE
        
✨ Benefícios:
• Acesso a +100 Jogos
• Xbox Live Gold Incluso
• EA Play Incluso
• Cloud Gaming`,
        shortDescription: '1 mês de Game Pass Ultimate',
        highlight: '🔥 MAIS VENDIDO',
        stock: 35,
        benefits: [
            '🎮 +100 Jogos Incríveis',
            '⭐ Xbox Live Gold',
            '🎯 EA Play Incluso',
            '☁️ Cloud Gaming'
        ]
    },
    {
        id: 'ps-plus',
        name: 'PlayStation Plus',
        emoji: '🎯',
        price: 29.90,
        category: 'games',
        description: `🎮 PS PLUS EXTRA
        
✨ Benefícios:
• Jogos Mensais
• Biblioteca com +400 Jogos
• Jogos Clássicos
• Cloud Storage`,
        shortDescription: '1 mês de PS Plus Extra',
        highlight: '🌟 PREMIUM',
        stock: 20,
        benefits: [
            '🎮 Jogos Mensais',
            '📚 +400 Jogos',
            '🏆 Multiplayer Online',
            '☁️ 100GB na Nuvem'
        ]
    },
    {
        id: 'nintendo-online',
        name: 'Nintendo Switch Online',
        emoji: '🎲',
        price: 19.90,
        category: 'games',
        description: `🎮 NINTENDO SWITCH ONLINE
        
✨ Inclui:
• Jogos NES e SNES
• Multiplayer Online
• Cloud Save
• Benefícios Exclusivos`,
        shortDescription: '3 meses de Nintendo Online',
        stock: 15,
        benefits: [
            '🎮 Jogos Retrô',
            '🌐 Online Gaming',
            '☁️ Save na Nuvem',
            '🎁 Ofertas Exclusivas'
        ]
    },
    {
        id: 'spotify-premium',
        name: 'Spotify Premium',
        emoji: '🎵',
        price: 17.90,
        category: 'musica',
        description: `🎵 SPOTIFY PREMIUM
        
✨ Recursos:
• Música Sem Anúncios
• Download Offline
• Alta Qualidade
• Multi-dispositivo`,
        shortDescription: '1 mês de Spotify Premium',
        highlight: '🎵 POPULAR',
        stock: 45,
        benefits: [
            '🎵 Sem Anúncios',
            '📱 Modo Offline',
            '🎧 Áudio HD',
            '📱 Multi-device'
        ]
    },
    {
        id: 'youtube-premium',
        name: 'YouTube Premium',
        emoji: '▶️',
        price: 24.90,
        oldPrice: 29.90,
        category: 'musica',
        description: `▶️ YOUTUBE PREMIUM
        
✨ Inclui:
• YouTube Sem Anúncios
• YouTube Music Premium
• Background Play
• Downloads`,
        shortDescription: '1 mês de YouTube Premium',
        stock: 30,
        benefits: [
            '🎵 Music Premium',
            '📺 Sem Anúncios',
            '📱 Background Play',
            '⬇️ Downloads'
        ]
    },
    {
        id: 'office-365',
        name: 'Microsoft 365',
        emoji: '💼',
        price: 29.90,
        category: 'produtividade',
        description: `💼 MICROSOFT 365
        
✨ Aplicativos:
• Word, Excel, PowerPoint
• OneDrive 1TB
• Outlook Premium
• Teams`,
        shortDescription: '1 mês de Microsoft 365',
        highlight: '💼 BUSINESS',
        stock: 25,
        benefits: [
            '📊 Office Completo',
            '☁️ 1TB OneDrive',
            '📧 Email Premium',
            '👥 Teams'
        ]
    },
    {
        id: 'adobe-cc',
        name: 'Adobe Creative Cloud',
        emoji: '🎨',
        price: 49.90,
        category: 'produtividade',
        description: `🎨 ADOBE CREATIVE CLOUD
        
✨ Aplicativos:
• Photoshop
• Illustrator
• Premiere Pro
• After Effects`,
        shortDescription: '1 mês de Adobe CC',
        highlight: '🎨 CRIATIVO',
        stock: 15,
        benefits: [
            '🎨 Suite Completa',
            '☁️ Cloud Storage',
            '📱 Apps Mobile',
            '🎓 Tutorials'
        ]
    },
    {
        id: 'vpn-premium',
        name: 'VPN Premium',
        emoji: '🔒',
        price: 15.90,
        category: 'seguranca',
        description: `🔒 VPN PREMIUM
        
✨ Recursos:
• Servidores Globais
• Conexão Ilimitada
• Política No-Logs
• Kill Switch`,
        shortDescription: '1 mês de VPN Premium',
        stock: 50,
        benefits: [
            '🌍 Servidores Globais',
            '⚡ Banda Ilimitada',
            '🔒 Criptografia',
            '🛡️ Proteção Total'
        ]
    }
];
