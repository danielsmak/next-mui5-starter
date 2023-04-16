const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 64],
    domains: ['images.pexels.com'],
    minimumCacheTTL: 1200,
  },
};
