const config: Config = {
    mode: 'world', // 'CHINA' | 'WORLD'
    botToken: '5264968049:AAHUniq68Nqq39CrFf8lVqerwetirQnGxzc',
    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },
    messages: {
        blocked: 'الموقع الصيني حظرنا خخخ♂️',
        bye:
            ' شكرا لاستخدام البوت 👍\n' +
            '',
        hello: 'هلا والله ارسلي الصورة حتى احولها الك',
        media: 'تريد تراسلني؟ تعال فيسبوك (طماطه بالدهن)',
        received: 'اصبر شويه',
    },
    sendMedia: {
        compared: true,
        single: true, // works only with mode=CHINA
        video: true, // works only with mode=CHINA
    },
    // proxyUrl: 'socks5://user:password@11.22.33.44:1234',
};

export default config;
