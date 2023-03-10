const config: Config = {
    mode: 'CHINA', // 'CHINA' | 'WORLD'
    botToken: '5264968049:AAHUniq68Nqq39CrFf8lVqerwetirQnGxzc',
    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: false,
    },
    messages: {
        blocked: 'The Chinese server has blocked the bot, too bad',
        bye:
            'ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴛʜɪꜱ ʙᴏᴛ 🥰\n' +
            '@MikaEirene ᴊᴏɪɴ ꜰᴏʀ ᴍᴏʀᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ',
        hello: 'Hi 👋 Send me a photo to convert it into a 2D anime art',
        media: '@MikaEirene\\_bot',
        received: 'Photo has been received, please wait',
    },
    sendMedia: {
        compared: true,
        single: true, // works only with mode=CHINA
        video: false, // works only with mode=CHINA
    },
   // proxyUrl: 'socks5://@58.49.230.248:30001',
};

export default config;
    
