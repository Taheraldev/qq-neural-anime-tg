const config: Config = {
    // AI_PAINTING_SPRING
    // DIFFERENT_DIMENSION_ME
    // AI_PAINTING_ANIME
    // AIGCSDK_AI_PAINTING_ANIME
    mode: 'AI_PAINTING_ANIME',

    botToken: '5264968049:AAHUniq68Nqq39CrFf8lVqerwetirQnGxzc',

    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },

    messages: {
        blocked: 'The Chinese website has blocked the bot, too bad 🤷‍♂️',
        bye:
            'Thank you for using this bot 👍\n' +
            'Please rate and fork it on [Github](https://github.com/lmcsu/qq-neural-anime-tg) ♥️',
        hello: 'Hi 👋 Send me a photo to convert it into a 2D anime art',
        media: '@qq\\_neural\\_anime\\_bot',
        received: 'Photo has been received, please wait',
    },

    sendMedia: {
        // AI_PAINTING_SPRING
        // DIFFERENT_DIMENSION_ME
        // AI_PAINTING_ANIME
        compared: true,

        // AI_PAINTING_SPRING
        // DIFFERENT_DIMENSION_ME
        // AI_PAINTING_ANIME
        // AIGCSDK_AI_PAINTING_ANIME
        single: true,

        // AI_PAINTING_SPRING
        // AI_PAINTING_ANIME
        video: true,
    },

    parallelRequests: 10,

    // Uncomment the line below and set your proxy if you need it.
     proxyUrl: 'socks5://@58.49.230.248:30001',
};

export default config;
